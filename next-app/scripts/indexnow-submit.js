#!/usr/bin/env node

/**
 * IndexNow Submission Script
 * Fetches sitemap.xml and submits all URLs to IndexNow API
 *
 * Usage: node scripts/indexnow-submit.js
 * Or: npm run indexnow
 */

const https = require('https');
const { parseStringPromise } = require('xml2js');

const KEY = 'b0f44730b490c294beff18e413fdd9d7';
const HOST = 'surinderseerat.com';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

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

async function submitToIndexNow(urls) {
  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: body || '(empty response)'
        });
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('IndexNow Submission Script');
  console.log('==========================\n');

  console.log(`Host: ${HOST}`);
  console.log(`Key: ${KEY}`);
  console.log(`Sitemap: ${SITEMAP_URL}\n`);

  try {
    // Fetch sitemap
    console.log('Fetching sitemap...');
    const xml = await fetchSitemap();

    // Extract URLs
    const urls = await extractUrls(xml);
    console.log(`Found ${urls.length} URLs in sitemap:\n`);
    urls.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
    console.log('');

    // Submit to IndexNow
    console.log('Submitting to IndexNow API...');
    const response = await submitToIndexNow(urls);

    console.log(`\nResponse: ${response.statusCode} ${response.statusMessage}`);
    if (response.body && response.body !== '(empty response)') {
      console.log(`Body: ${response.body}`);
    }

    // Interpret response
    console.log('\n---');
    if (response.statusCode === 200 || response.statusCode === 202) {
      console.log(`SUCCESS: Submitted ${urls.length} URLs to IndexNow`);
      console.log('Search engines (Bing, DuckDuckGo, Yandex, etc.) will be notified.');
    } else if (response.statusCode === 400) {
      console.log('ERROR: Bad request - check key format or URL list');
    } else if (response.statusCode === 403) {
      console.log('ERROR: Key not valid or not found at keyLocation');
    } else if (response.statusCode === 422) {
      console.log('ERROR: URLs do not belong to the specified host');
    } else {
      console.log(`WARNING: Unexpected response code ${response.statusCode}`);
    }

    return response.statusCode;
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main().then(code => {
  process.exit(code === 200 || code === 202 ? 0 : 1);
});
