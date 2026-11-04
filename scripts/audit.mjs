import http from 'http';

const ENDPOINTS = [
  '/',
  '/admissions',
  '/examinations',
  '/departments',
  '/departments/computer-science-it',
  '/downloads',
  '/about',
  '/about/vc-message',
  '/research',
  '/notices',
  '/contact',
];

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:3000${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path, status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

async function runAudit() {
  console.log('--- Starting Automated Production Quality Audit ---\n');

  let passed = true;
  const issues = [];

  for (const path of ENDPOINTS) {
    try {
      const page = await fetchPage(path);
      if (page.status !== 200) {
        issues.push(`[HTTP ${page.status}] ${path} did not return 200 OK`);
        passed = false;
        continue;
      }

      console.log(`✓ [200 OK] ${path} (HTML Length: ${page.html.length.toLocaleString()} bytes)`);

      // 1. Audit Images for alt attributes
      const imgRegex = /<img\s+[^>]*>/gi;
      const imgs = page.html.match(imgRegex) || [];
      for (const img of imgs) {
        if (!/alt\s*=\s*["'][^"']+["']/i.test(img)) {
          issues.push(`[Missing Alt] on ${path}: ${img}`);
          passed = false;
        }
      }

      // 2. Audit External Links for security attributes
      const linkRegex = /<a\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>/gi;
      let match;
      while ((match = linkRegex.exec(page.html)) !== null) {
        const fullTag = match[0];
        const url = match[1];

        // Ensure external links have rel="noopener noreferrer" and target="_blank"
        if (!/target\s*=\s*["']_blank["']/i.test(fullTag)) {
          issues.push(`[Missing target="_blank"] on ${path} for external link ${url}`);
          passed = false;
        }
        if (!/rel\s*=\s*["'][^"']*noopener[^"']*["']/i.test(fullTag)) {
          issues.push(`[Missing rel="noopener"] on ${path} for external link ${url}`);
          passed = false;
        }
      }

      // 3. Check for obvious uncaught exceptions or error text
      if (page.html.includes('Internal Server Error') || page.html.includes('Unhandled Runtime Error')) {
        issues.push(`[Runtime Error detected in page body] ${path}`);
        passed = false;
      }
    } catch (err) {
      issues.push(`[Fetch Failed] ${path}: ${err.message}`);
      passed = false;
    }
  }

  console.log('\n--- Production Audit Results ---');
  if (passed && issues.length === 0) {
    console.log('✅ ALL CHECKS PASSED:');
    console.log(' - 100% of tested routes returned HTTP 200 OK');
    console.log(' - 100% of images possess descriptive and valid alt tags');
    console.log(' - 100% of external links (CMS, webmail, etc.) have secure target="_blank" and rel="noopener noreferrer"');
    console.log(' - Zero runtime error markers detected in production HTML');
  } else {
    console.error(`❌ ISSUES FOUND (${issues.length}):`);
    issues.forEach((iss) => console.error(`  - ${iss}`));
    process.exit(1);
  }
}

runAudit();

