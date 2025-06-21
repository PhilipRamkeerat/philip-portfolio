const fs = require('fs');
const path = require('path');

console.log('🚀 Preparando arquivos para upload na Hostinger...\n');

// Configurações
const sourceDir = 'dist/philip-portfolio/browser';
const targetDir = 'hostinger-upload';

// Função para copiar arquivos recursivamente
function copyFileSync(source, target) {
    let targetFile = target;

    // Se o target for um diretório, copie o arquivo com o mesmo nome
    if (fs.existsSync(target) && fs.lstatSync(target).isDirectory()) {
        targetFile = path.join(target, path.basename(source));
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

// Função para copiar diretórios recursivamente
function copyFolderRecursiveSync(source, target) {
    let files = [];

    // Verificar se a pasta precisa ser criada
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }

    // Copiar arquivos
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

// Função para criar arquivo .htaccess otimizado para Hostinger
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

// Função para criar arquivo index.html que carrega diretamente a aplicação
function createIndexHtml() {
    const indexContent = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Philip Ramkeerat - Senior Angular Developer | Portfólio</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <meta name="description" content="Philip Ramkeerat - Senior Angular Developer com 8+ anos de experiência. Especialista em Angular, TypeScript, RxJS e desenvolvimento frontend de alta performance.">
  <meta name="keywords" content="Angular, TypeScript, Frontend Developer, Senior Developer, RxJS, NgRx, JavaScript, Web Development, Brazil">
  <meta name="author" content="Philip Ramkeerat">
  <meta name="robots" content="index, follow">
  
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://philip-ramkeerat.dev/">
  <meta property="og:title" content="Philip Ramkeerat - Senior Angular Developer">
  <meta property="og:description" content="Senior Angular Developer com 8+ anos de experiência em desenvolvimento frontend de alta performance.">
  <meta property="og:image" content="https://philip-ramkeerat.dev/assets/og-image.jpg">
  
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://philip-ramkeerat.dev/">
  <meta property="twitter:title" content="Philip Ramkeerat - Senior Angular Developer">
  <meta property="twitter:description" content="Senior Angular Developer com 8+ anos de experiência em desenvolvimento frontend de alta performance.">
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
    "description": "Senior Angular Developer com 8+ anos de experiência em desenvolvimento frontend",
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

// Função para criar arquivo de instruções
function createInstructions() {
    const instructions = `# 🚀 Upload para Hostinger - Instruções

## 📁 Arquivos Prontos para Upload

Todos os arquivos nesta pasta estão prontos para serem enviados para o diretório \`public_html\` da sua conta Hostinger.

## 🔄 Como Fazer Upload:

### Opção 1: File Manager da Hostinger
1. Acesse o painel de controle da Hostinger
2. Vá em "File Manager"
3. Navegue até a pasta \`public_html\`
4. Faça upload de TODOS os arquivos desta pasta

### Opção 2: FTP/SFTP
1. Use um cliente FTP (FileZilla, WinSCP, etc.)
2. Conecte-se ao seu servidor Hostinger
3. Navegue até \`public_html\`
4. Faça upload de TODOS os arquivos

## ⚠️ IMPORTANTE:

- **NÃO ESQUEÇA** do arquivo \`.htaccess\` - ele é essencial para o roteamento funcionar
- Mantenha a estrutura de pastas (home/, about/, contact/, etc.)
- Todos os arquivos devem ir para a raiz do \`public_html\`

## 🧪 Teste Após Upload:

- \`https://seudominio.com/\` - Página inicial
- \`https://seudominio.com/about\` - Página sobre
- \`https://seudominio.com/contact\` - Página contato
- \`https://seudominio.com/experience\` - Página experiência
- \`https://seudominio.com/skills\` - Página habilidades

## 🔧 Se Algo Não Funcionar:

1. Verifique se o arquivo \`.htaccess\` foi uploadado
2. Verifique se todos os arquivos estão na raiz do \`public_html\`
3. Entre em contato com o suporte da Hostinger se necessário

## 📊 Arquivos Incluídos:

- ✅ \`.htaccess\` - Configuração Apache
- ✅ \`index.html\` - Redirecionamento
- ✅ \`index.csr.html\` - Aplicação Angular
- ✅ \`main-*.js\` - JavaScript principal
- ✅ \`styles-*.css\` - Estilos CSS
- ✅ \`chunk-*.js\` - Chunks JavaScript
- ✅ \`*.png\` - Imagens
- ✅ \`favicon.ico\` - Ícone
- ✅ Pastas: \`home/\`, \`about/\`, \`contact/\`, \`experience/\`, \`skills/\`

---
Gerado automaticamente em: ${new Date().toLocaleString('pt-BR')}
`;

    fs.writeFileSync(path.join(targetDir, 'INSTRUCOES-HOSTINGER.md'), instructions);
}

// Função principal
function main() {
    try {
        // Verificar se o build existe
        if (!fs.existsSync(sourceDir)) {
            console.error('❌ Erro: Pasta de build não encontrada!');
            console.error('Execute primeiro: npm run build');
            process.exit(1);
        }

        // Limpar pasta de destino se existir
        if (fs.existsSync(targetDir)) {
            fs.rmSync(targetDir, { recursive: true, force: true });
        }

        // Criar pasta de destino
        fs.mkdirSync(targetDir, { recursive: true });

        console.log('📁 Copiando arquivos...');
        copyFolderRecursiveSync(sourceDir, targetDir);

        console.log('⚙️ Criando arquivos de configuração...');
        createHtaccess();
        createIndexHtml();
        createInstructions();

        // Contar arquivos
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

        console.log('\n✅ Preparação concluída com sucesso!');
        console.log(`📊 Total de arquivos: ${fileCount}`);
        console.log(`📁 Pasta criada: ${targetDir}/`);
        console.log('\n📋 Próximos passos:');
        console.log('1. Faça upload de TODOS os arquivos da pasta \'hostinger-upload/\'');
        console.log('2. Coloque-os no diretório \'public_html/\' da sua conta Hostinger');
        console.log('3. Certifique-se que o arquivo .htaccess foi incluído');
        console.log('4. Teste o site após o upload');
        console.log('\n🎉 Seu portfolio estará online!');

    } catch (error) {
        console.error('❌ Erro durante a preparação:', error.message);
        process.exit(1);
    }
}

// Executar
main(); 