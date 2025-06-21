const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing files for Hostinger upload...\n');

const sourceDir = 'dist/philip-portfolio/browser';
const targetDir = 'hostinger-upload';

function copyFileSync(source, target) {
    let targetFile = target;

    if (fs.existsSync(target) && fs.lstatSync(target).isDirectory()) {
        targetFile = path.join(target, path.basename(source));
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
    let files = [];

    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }

    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            let curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, path.join(target, file));
            } else {
                copyFileSync(curSource, target);
            }
        });
    }
}

function createHtaccess() {
    const htaccessContent = `RewriteEngine On

# Handle Angular routes
# If the requested file or directory exists, serve it directly
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# If the request is for a route that doesn't exist as a file or directory,
# serve the index.html file (Angular will handle the routing)
RewriteRule ^ index.html [L]

# Enable compression for better performance
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers for static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/ico "access plus 1 year"
    ExpiresByType image/icon "access plus 1 year"
    ExpiresByType text/plain "access plus 1 month"
    ExpiresByType application/x-shockwave-flash "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>`;

    fs.writeFileSync(path.join(targetDir, '.htaccess'), htaccessContent);
}

function createIndexHtml() {
    const indexContent = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Philip Ramkeerat - Senior Angular Developer | Portfolio</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <meta name="description" content="Philip Ramkeerat - Senior Angular Developer with 8+ years of experience. Specialist in Angular, TypeScript, RxJS and high-performance frontend development.">
  <meta name="keywords" content="Angular, TypeScript, Frontend Developer, Senior Developer, RxJS, NgRx, JavaScript, Web Development, Brazil">
  <meta name="author" content="Philip Ramkeerat">
  <meta name="robots" content="index, follow">
  
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://philip-ramkeerat.dev/">
  <meta property="og:title" content="Philip Ramkeerat - Senior Angular Developer">
  <meta property="og:description" content="Senior Angular Developer with 8+ years of experience in high-performance frontend development.">
  <meta property="og:image" content="https://philip-ramkeerat.dev/assets/og-image.jpg">
  
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://philip-ramkeerat.dev/">
  <meta property="twitter:title" content="Philip Ramkeerat - Senior Angular Developer">
  <meta property="twitter:description" content="Senior Angular Developer with 8+ years of experience in high-performance frontend development.">
  <meta property="twitter:image" content="https://philip-ramkeerat.dev/assets/og-image.jpg">
  
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdnjs.cloudflare.com">
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Philip Ramkeerat",
    "jobTitle": "Senior Angular Developer",
    "description": "Senior Angular Developer with 8+ years of experience in frontend development",
    "url": "https://philip-ramkeerat.dev",
    "sameAs": [
      "https://linkedin.com/in/philip-ramkeerat",
      "https://github.com/philip-ramkeerat"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "GFT Brazil"
    },
    "knowsAbout": [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "NgRx",
      "Frontend Development",
      "Web Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    }
  }
  </script>
  
  <meta name="theme-color" content="#00d4aa">
  <meta name="msapplication-TileColor" content="#00d4aa">
  
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="X-XSS-Protection" content="1; mode=block">
</head>
<body>
  <app-root></app-root>
  <script src="main-3HJ7MK24.js" type="module"></script>
  <link rel="stylesheet" href="styles-GOQM2B2Y.css">
</body>
</html>`;

    fs.writeFileSync(path.join(targetDir, 'index.html'), indexContent);
}

function createInstructions() {
    const instructions = `# 🚀 Hostinger Upload Instructions

## 📁 Files Ready for Upload

All files in this folder are ready to be uploaded to the \`public_html\` directory of your Hostinger account.

## 🔄 How to Upload:

### Option 1: Hostinger File Manager
1. Access your Hostinger control panel
2. Go to "File Manager"
3. Navigate to the \`public_html\` folder
4. Upload ALL files from this folder

### Option 2: FTP/SFTP
1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your Hostinger server
3. Navigate to \`public_html\`
4. Upload ALL files

## ⚠️ IMPORTANT:

- **DON'T FORGET** the \`.htaccess\` file - it's essential for routing to work
- Keep the folder structure (home/, about/, contact/, etc.)
- All files must go to the root of \`public_html\`

## 🧪 Test After Upload:

- \`https://yourdomain.com/\` - Home page
- \`https://yourdomain.com/about\` - About page
- \`https://yourdomain.com/contact\` - Contact page
- \`https://yourdomain.com/experience\` - Experience page
- \`https://yourdomain.com/skills\` - Skills page

## 🔧 If Something Doesn't Work:

1. Check if the \`.htaccess\` file was uploaded
2. Check if all files are in the root of \`public_html\`
3. Contact Hostinger support if necessary

## 📊 Files Included:

- ✅ \`.htaccess\` - Apache configuration
- ✅ \`index.html\` - Main application
- ✅ \`main-*.js\` - Main JavaScript
- ✅ \`styles-*.css\` - CSS styles
- ✅ \`chunk-*.js\` - JavaScript chunks
- ✅ \`*.png\` - Images
- ✅ \`favicon.ico\` - Icon
- ✅ Folders: \`home/\`, \`about/\`, \`contact/\`, \`experience/\`, \`skills/\`

---
Generated automatically on: ${new Date().toLocaleString('en-US')}
`;

    fs.writeFileSync(path.join(targetDir, 'HOSTINGER-INSTRUCTIONS.md'), instructions);
}

function main() {
    try {
        if (!fs.existsSync(sourceDir)) {
            console.error('❌ Error: Build folder not found!');
            console.error('Run first: npm run build');
            process.exit(1);
        }

        if (fs.existsSync(targetDir)) {
            fs.rmSync(targetDir, { recursive: true, force: true });
        }

        fs.mkdirSync(targetDir, { recursive: true });

        console.log('📁 Copying files...');
        copyFolderRecursiveSync(sourceDir, targetDir);

        console.log('⚙️ Creating configuration files...');
        createHtaccess();
        createIndexHtml();
        createInstructions();

        const countFiles = (dir) => {
            let count = 0;
            const items = fs.readdirSync(dir);
            items.forEach(item => {
                const fullPath = path.join(dir, item);
                if (fs.statSync(fullPath).isDirectory()) {
                    count += countFiles(fullPath);
                } else {
                    count++;
                }
            });
            return count;
        };

        const fileCount = countFiles(targetDir);

        console.log('\n✅ Preparation completed successfully!');
        console.log(`📊 Total files: ${fileCount}`);
        console.log(`📁 Folder created: ${targetDir}/`);
        console.log('\n📋 Next steps:');
        console.log('1. Upload ALL files from the \'hostinger-upload/\' folder');
        console.log('2. Place them in the \'public_html/\' directory of your Hostinger account');
        console.log('3. Make sure the .htaccess file was included');
        console.log('4. Test the site after upload');
        console.log('\n🎉 Your portfolio will be online!');

    } catch (error) {
        console.error('❌ Error during preparation:', error.message);
        process.exit(1);
    }
}

main(); 