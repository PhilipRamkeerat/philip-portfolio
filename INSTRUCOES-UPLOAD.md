# 🚀 Instruções para Upload no Servidor Apache

## ✅ Preparação Concluída!

Seu projeto Angular foi preparado para upload em servidor Apache. Todos os arquivos necessários estão na pasta `upload-apache/`.

## 📁 O que foi criado:

1. **Pasta `upload-apache/`** - Contém todos os arquivos prontos para upload
2. **Arquivo `.htaccess`** - Configuração do Apache para roteamento Angular
3. **Arquivo `index.html`** - Redirecionamento para a aplicação principal
4. **Páginas pré-renderizadas** - Para melhor SEO e performance

## 🔄 Passos para Upload:

### 1. Acesse seu servidor web
- Use FTP, SFTP ou o painel de controle do seu provedor
- Navegue até o diretório raiz do seu site (geralmente `public_html/`, `www/` ou `htdocs/`)

### 2. Faça upload dos arquivos
- **IMPORTANTE**: Faça upload de **TODOS** os arquivos da pasta `upload-apache/`
- Mantenha a estrutura de pastas (home/, about/, contact/, etc.)
- **NÃO ESQUEÇA** do arquivo `.htaccess` - ele é essencial!

### 3. Verifique as permissões
- Arquivos: 644
- Pastas: 755
- `.htaccess`: 644

### 4. Teste o site
Após o upload, teste:
- `http://seudominio.com/` - Página inicial
- `http://seudominio.com/about` - Página sobre
- `http://seudominio.com/contact` - Página contato
- `http://seudominio.com/experience` - Página experiência
- `http://seudominio.com/skills` - Página habilidades

## ⚠️ Problemas Comuns:

### Erro 500 (Internal Server Error)
- Verifique se o módulo `mod_rewrite` está habilitado no servidor
- Verifique se o arquivo `.htaccess` foi uploadado corretamente

### Página não encontrada (404)
- Verifique se todos os arquivos foram uploadados
- Verifique se o `.htaccess` está na raiz do site

### Rotas não funcionam
- Alguns provedores desabilitam `.htaccess` por padrão
- Entre em contato com o suporte do seu provedor

## 🛠️ Configurações do Servidor:

### Módulos Apache necessários:
- `mod_rewrite` (obrigatório)
- `mod_deflate` (opcional - para compressão)
- `mod_expires` (opcional - para cache)
- `mod_headers` (opcional - para segurança)

### Se o servidor não suporta .htaccess:
Alguns provedores de hospedagem compartilhada não permitem `.htaccess`. Nesse caso:
1. Entre em contato com o suporte
2. Peça para habilitar `mod_rewrite`
3. Ou considere usar um provedor que suporte essas configurações

## 📞 Suporte:

Se ainda tiver problemas:
1. Verifique os logs de erro do Apache
2. Teste com um arquivo `.htaccess` mais simples
3. Entre em contato com o suporte do seu provedor de hospedagem

## 🎉 Sucesso!

Se tudo funcionar corretamente, seu portfolio Angular estará rodando perfeitamente no servidor Apache!

---

**Arquivos na pasta `upload-apache/`:**
- ✅ `.htaccess` - Configuração Apache
- ✅ `index.html` - Redirecionamento
- ✅ `index.csr.html` - Aplicação Angular
- ✅ `main-*.js` - JavaScript principal
- ✅ `styles-*.css` - Estilos CSS
- ✅ `chunk-*.js` - Chunks JavaScript
- ✅ `*.png` - Imagens
- ✅ `favicon.ico` - Ícone
- ✅ Pastas: `home/`, `about/`, `contact/`, `experience/`, `skills/` 