#!/usr/bin/env node

/**
 * Google Indexing API Status Check Script
 * Checks the indexing status of all sitemap URLs
 *
 * Usage: node scripts/google-indexing-check.js
 * Or: npm run google-index-check
 */

const { google } = require('googleapis');
const https = require('https');
const fs = require('fs');
const { parseStringPromise } = require('xml2js');
const path = require('path');

const KEY_FILE = path.join(__dirname, '..', 'google-indexing-key.json');

function loadKey() {
  const content = fs.readFileSync(KEY_FILE, 'utf8');
  return JSON.parse(content);
}
const HOST = 'surinderseerat.com';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

// Delay between requests (ms) to avoid rate limits
const REQUEST_DELAY = 500;

async function fetchSitemap() {
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function extractUrls(xml) {
  const parsed = await parseStringPromise(xml);
  if (!parsed.urlset || !parsed.urlset.url) {
    throw new Error('Invalid sitemap format');
  }
  return parsed.urlset.url.map(u => u.loc[0]);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function formatDate(isoString) {
  if (!isoString) return 'N/A';
  const date = new Date(isoString);
  return date.toLocaleString();
}

async function main() {
  console.log('Google Indexing API Status Check');
  console.log('=================================\n');

  // Load service account key
  let key;
  try {
    key = loadKey();
    console.log(`Service Account: ${key.client_email}\n`);
  } catch (err) {
    console.error(`Error loading key file: ${err.message}`);
    process.exit(1);
  }

  // Authenticate with Google
  console.log('Authenticating with Google...');
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/indexing']
  });

  try {
    const client = await auth.getClient();
    google.options({ auth: client });
    console.log('Authentication successful!\n');
  } catch (err) {
    console.error(`Authentication failed: ${err.message}`);
    process.exit(1);
  }

  // Fetch sitemap
  console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
  let urls;
  try {
    const xml = await fetchSitemap();
    urls = await extractUrls(xml);
    console.log(`Found ${urls.length} URLs\n`);
  } catch (err) {
    console.error(`Error fetching sitemap: ${err.message}`);
    process.exit(1);
  }

  // Check status of each URL
  console.log('Checking indexing status...\n');

  const results = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    process.stdout.write(`[${i + 1}/${urls.length}] Checking: ${url}... `);

    try {
      const response = await google.indexing('v3').urlNotifications.getMetadata({
        url: url
      });

      const metadata = response.data;
      const latestUpdate = metadata.latestUpdate;
      const latestRemove = metadata.latestRemove;

      let status = 'Unknown';
      let lastNotified = 'N/A';

      if (latestUpdate) {
        status = latestUpdate.type || 'URL_UPDATED';
        lastNotified = formatDate(latestUpdate.notifyTime);
      } else if (latestRemove) {
        status = 'URL_DELETED';
        lastNotified = formatDate(latestRemove.notifyTime);
      }

      console.log(`${status}`);
      results.push({
        url,
        status,
        lastNotified,
        error: null
      });
    } catch (err) {
      const errorMessage = err.response?.data?.error?.message || err.message;

      // 404 means URL hasn't been submitted yet
      if (err.response?.status === 404) {
        console.log('Not submitted');
        results.push({
          url,
          status: 'Not submitted',
          lastNotified: 'N/A',
          error: null
        });
      } else {
        console.log(`Error: ${errorMessage}`);
        results.push({
          url,
          status: 'Error',
          lastNotified: 'N/A',
          error: errorMessage
        });
      }
    }

    // Delay between requests
    if (i < urls.length - 1) {
      await sleep(REQUEST_DELAY);
    }
  }

  // Display results table
  console.log('\n=================================');
  console.log('STATUS TABLE');
  console.log('=================================\n');

  // Calculate column widths
  const urlWidth = Math.max(...results.map(r => r.url.length), 3);
  const statusWidth = Math.max(...results.map(r => r.status.length), 6);

  console.log(`${'URL'.padEnd(urlWidth)} | ${'Status'.padEnd(statusWidth)} | Last Notified`);
  console.log(`${'-'.repeat(urlWidth)} | ${'-'.repeat(statusWidth)} | -------------`);

  results.forEach(r => {
    console.log(`${r.url.padEnd(urlWidth)} | ${r.status.padEnd(statusWidth)} | ${r.lastNotified}`);
  });

  // Summary
  const submitted = results.filter(r => r.status !== 'Not submitted' && r.status !== 'Error').length;
  const notSubmitted = results.filter(r => r.status === 'Not submitted').length;
  const errors = results.filter(r => r.status === 'Error').length;

  console.log('\n=================================');
  console.log('SUMMARY');
  console.log('=================================');
  console.log(`Total URLs: ${results.length}`);
  console.log(`Submitted: ${submitted}`);
  console.log(`Not submitted: ${notSubmitted}`);
  console.log(`Errors: ${errors}`);

  console.log('\nDone!');
}

main().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
