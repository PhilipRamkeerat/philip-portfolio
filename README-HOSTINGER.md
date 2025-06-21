# 🚀 Build para Hostinger - Philip Portfolio

## 📋 Como Usar

### Opção 1: Script Automático (Recomendado)
```bash
# Execute o script batch (Windows)
build-hostinger.bat

# Ou use o comando npm diretamente
npm run build:hostinger
```

### Opção 2: Comandos Manuais
```bash
# 1. Fazer o build do Angular
npm run build

# 2. Preparar arquivos para Hostinger
npm run prepare:hostinger
```

## 📁 O que é Gerado

Após executar o comando, será criada a pasta `hostinger-upload/` contendo:

### Arquivos Principais:
- ✅ `.htaccess` - Configuração Apache otimizada para Hostinger
- ✅ `index.html` - Redirecionamento para a aplicação
- ✅ `index.csr.html` - Aplicação Angular principal
- ✅ `main-*.js` - JavaScript principal
- ✅ `styles-*.css` - Estilos CSS
- ✅ `chunk-*.js` - Chunks JavaScript

### Assets:
- ✅ `*.png` - Imagens do portfolio
- ✅ `favicon.ico` - Ícone do site

### Páginas Pré-renderizadas:
- ✅ `home/` - Página inicial
- ✅ `about/` - Página sobre
- ✅ `contact/` - Página contato
- ✅ `experience/` - Página experiência
- ✅ `skills/` - Página habilidades

### Documentação:
- ✅ `INSTRUCOES-HOSTINGER.md` - Instruções detalhadas para upload

## 🔄 Processo de Upload

### 1. Acesse sua conta Hostinger
- Painel de controle → File Manager
- Ou use FTP/SFTP

### 2. Navegue até public_html
- Este é o diretório raiz do seu site

### 3. Faça upload
- **IMPORTANTE**: Upload de TODOS os arquivos da pasta `hostinger-upload/`
- Mantenha a estrutura de pastas
- **NÃO ESQUEÇA** do arquivo `.htaccess`

### 4. Teste o site
- `https://seudominio.com/` - Página inicial
- `https://seudominio.com/about` - Página sobre
- `https://seudominio.com/contact` - Página contato

## ⚙️ Configurações Automáticas

O script automaticamente:

### Otimizações de Performance:
- ✅ Compressão gzip para arquivos estáticos
- ✅ Headers de cache otimizados
- ✅ Headers de segurança configurados

### Roteamento Angular:
- ✅ Configuração `.htaccess` para SPA
- ✅ Redirecionamento automático para rotas
- ✅ Suporte a páginas pré-renderizadas

## 🔧 Solução de Problemas

### Erro 500 (Internal Server Error)
- Verifique se o arquivo `.htaccess` foi uploadado
- Verifique se o `mod_rewrite` está habilitado na Hostinger

### Página não encontrada (404)
- Verifique se todos os arquivos foram uploadados
- Verifique se estão na raiz do `public_html`

### Rotas não funcionam
- Verifique se o `.htaccess` está na raiz
- Entre em contato com o suporte da Hostinger

## 📊 Vantagens do Sistema

### Para Desenvolvimento:
- ✅ Build automatizado
- ✅ Arquivos otimizados
- ✅ Configuração automática
- ✅ Não trackeado no Git

### Para Produção:
- ✅ Performance otimizada
- ✅ SEO melhorado (pré-renderização)
- ✅ Segurança configurada
- ✅ Cache otimizado

## 🎯 Comandos Disponíveis

```bash
# Build normal
npm run build

# Build para Hostinger (recomendado)
npm run build:hostinger

# Apenas preparar arquivos (se build já existe)
npm run prepare:hostinger

# Desenvolvimento
npm start

# Testes
npm test
```

## 📝 Notas Importantes

- A pasta `hostinger-upload/` é **ignorada pelo Git**
- Sempre execute `npm run build:hostinger` antes de fazer upload
- O arquivo `.htaccess` é **ESSENCIAL** para o funcionamento
- Teste sempre após o upload

## 🎉 Sucesso!

Após seguir todos os passos, seu portfolio Angular estará rodando perfeitamente na Hostinger com:
- ✅ Performance otimizada
- ✅ SEO melhorado
- ✅ Roteamento funcionando
- ✅ Segurança configurada

---

**Última atualização:** ${new Date().toLocaleDateString('pt-BR')} 