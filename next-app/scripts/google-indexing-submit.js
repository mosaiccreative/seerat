#!/usr/bin/env node

/**
 * Google Indexing API Submission Script
 * Submits all sitemap URLs to Google for indexing
 *
 * Usage: node scripts/google-indexing-submit.js
 * Or: npm run google-index
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
const REQUEST_DELAY = 1000;

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

async function main() {
  console.log('Google Indexing API Submission Script');
  console.log('=====================================\n');

  // Load service account key
  let key;
  try {
    key = loadKey();
    console.log(`Service Account: ${key.client_email}`);
    console.log(`Project ID: ${key.project_id}\n`);
  } catch (err) {
    console.error(`Error loading key file: ${err.message}`);
    console.error(`Expected location: ${KEY_FILE}`);
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
    console.log(`Found ${urls.length} URLs in sitemap:\n`);
    urls.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
    console.log('');
  } catch (err) {
    console.error(`Error fetching sitemap: ${err.message}`);
    process.exit(1);
  }

  // Submit each URL
  console.log('Submitting URLs to Google Indexing API...\n');

  const results = {
    success: [],
    failed: []
  };

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`[${i + 1}/${urls.length}] Submitting: ${url}`);

    try {
      const response = await google.indexing('v3').urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });

      console.log(`    ✓ Success - Notified at: ${response.data.urlNotificationMetadata?.latestUpdate?.notifyTime || 'pending'}`);
      results.success.push({ url, response: response.data });
    } catch (err) {
      const errorMessage = err.response?.data?.error?.message || err.message;
      console.log(`    ✗ Failed - ${errorMessage}`);
      results.failed.push({ url, error: errorMessage });
    }

    // Delay between requests
    if (i < urls.length - 1) {
      await sleep(REQUEST_DELAY);
    }
  }

  // Summary
  console.log('\n=====================================');
  console.log('SUMMARY');
  console.log('=====================================');
  console.log(`Total URLs: ${urls.length}`);
  console.log(`Successful: ${results.success.length}`);
  console.log(`Failed: ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log('\nFailed URLs:');
    results.failed.forEach(f => console.log(`  - ${f.url}: ${f.error}`));
  }

  console.log('\nDone!');

  // Exit with error code if any failed
  process.exit(results.failed.length > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
