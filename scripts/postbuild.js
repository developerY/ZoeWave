const fs = require('node:fs');
const path = require('node:path');

const browserDir = path.join(__dirname, '..', 'dist', 'app', 'browser');

if (fs.existsSync(browserDir)) {
  const homeIndexPath = path.join(browserDir, 'home', 'index.html');
  const csrIndexPath = path.join(browserDir, 'index.csr.html');
  const rootIndexPath = path.join(browserDir, 'index.html');

  // If home/index.html exists (prerendered home), use it as root index.html so / loads the prerendered home
  // Otherwise fallback to index.csr.html
  if (fs.existsSync(homeIndexPath)) {
    fs.copyFileSync(homeIndexPath, rootIndexPath);
    console.log('[postbuild] Replaced dist/app/browser/index.html with prerendered home/index.html');
  } else if (fs.existsSync(csrIndexPath)) {
    fs.copyFileSync(csrIndexPath, rootIndexPath);
    console.log('[postbuild] Replaced dist/app/browser/index.html with index.csr.html');
  }
} else {
  console.warn('[postbuild] Directory dist/app/browser does not exist');
}
