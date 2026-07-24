/**
 * Prepares the production build for static hosting on an Apache server
 * (e.g. Hostinger). Copies the prerendered browser output as-is — including
 * the hashed asset references inside index.html — and adds an .htaccess
 * with SPA routing, compression, caching and security headers.
 *
 * Usage: npm run build:hostinger
 */
const fs = require('fs');
const path = require('path');

const sourceDir = path.join('dist', 'philip-portfolio', 'browser');
const targetDir = 'hostinger-upload';

const HTACCESS = `RewriteEngine On

# Serve existing files and directories directly
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Everything else falls back to the prerendered index.html
RewriteRule ^ index.html [L]

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain text/html text/xml text/css
    AddOutputFilterByType DEFLATE application/xml application/xhtml+xml
    AddOutputFilterByType DEFLATE application/javascript application/json
    AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Cache headers (hashed assets can be cached aggressively)
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

function main() {
    if (!fs.existsSync(sourceDir)) {
        console.error('Build output not found. Run "npm run build" first.');
        process.exit(1);
    }

    fs.rmSync(targetDir, { recursive: true, force: true });
    fs.cpSync(sourceDir, targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, '.htaccess'), HTACCESS);

    console.log(`Done. Upload the contents of "${targetDir}/" to public_html (including the .htaccess file).`);
}

main();
