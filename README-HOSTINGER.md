# 🚀 Build for Hostinger - Philip Portfolio

## 📋 How to Use

### Option 1: Automatic Script (Recommended)
```bash
# Run the batch script (Windows)
build-hostinger.bat

# Or use npm command directly
npm run build:hostinger
```

### Option 2: Manual Commands
```bash
# 1. Build Angular
npm run build

# 2. Prepare for Hostinger
npm run prepare:hostinger
```

## 📁 What is Generated

After running the command, the `hostinger-upload/` folder will be created containing:

### Main Files:
- ✅ `.htaccess` - Apache configuration optimized for Hostinger
- ✅ `index.html` - Main application
- ✅ `main-*.js` - Main JavaScript
- ✅ `styles-*.css` - CSS styles
- ✅ `chunk-*.js` - JavaScript chunks

### Assets:
- ✅ `*.png` - Portfolio images
- ✅ `favicon.ico` - Site icon

### Pre-rendered Pages:
- ✅ `home/` - Home page
- ✅ `about/` - About page
- ✅ `contact/` - Contact page
- ✅ `experience/` - Experience page
- ✅ `skills/` - Skills page

### Documentation:
- ✅ `HOSTINGER-INSTRUCTIONS.md` - Detailed upload instructions

## 🔄 Upload Process

### 1. Access your Hostinger account
- Control panel → File Manager
- Or use FTP/SFTP

### 2. Navigate to public_html
- This is the root directory of your site

### 3. Upload files
- **IMPORTANT**: Upload ALL files from the `hostinger-upload/` folder
- Keep the folder structure
- **DON'T FORGET** the `.htaccess` file

### 4. Test the site
- `https://yourdomain.com/` - Home page
- `https://yourdomain.com/about` - About page
- `https://yourdomain.com/contact` - Contact page

## ⚙️ Automatic Configurations

The script automatically:

### Performance Optimizations:
- ✅ Gzip compression for static files
- ✅ Optimized cache headers
- ✅ Security headers configured

### Angular Routing:
- ✅ `.htaccess` configuration for SPA
- ✅ Automatic route redirection
- ✅ Pre-rendered page support

## 🔧 Troubleshooting

### Error 500 (Internal Server Error)
- Check if the `.htaccess` file was uploaded
- Check if `mod_rewrite` is enabled on Hostinger

### Page not found (404)
- Check if all files were uploaded
- Check if they are in the root of `public_html`

### Routes don't work
- Check if `.htaccess` is in the root
- Contact Hostinger support

## 📊 System Advantages

### For Development:
- ✅ Automated build
- ✅ Optimized files
- ✅ Automatic configuration
- ✅ Not tracked in Git

### For Production:
- ✅ Optimized performance
- ✅ Improved SEO (pre-rendering)
- ✅ Security configured
- ✅ Optimized cache

## 🎯 Available Commands

```bash
# Normal build
npm run build

# Build for Hostinger (recommended)
npm run build:hostinger

# Only prepare files (if build already exists)
npm run prepare:hostinger

# Development
npm start

# Tests
npm test
```

## 📝 Important Notes

- The `hostinger-upload/` folder is **ignored by Git**
- Always run `npm run build:hostinger` before uploading
- The `.htaccess` file is **ESSENTIAL** for functionality
- Always test after upload

## 🎉 Success!

After following all steps, your Angular portfolio will be running perfectly on Hostinger with:
- ✅ Optimized performance
- ✅ Improved SEO
- ✅ Working routing
- ✅ Security configured

---

**Last updated:** ${new Date().toLocaleDateString('en-US')} 