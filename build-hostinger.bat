@echo off
echo ========================================
echo Build para Hostinger - Philip Portfolio
echo ========================================
echo.

echo 🔨 Executando build do Angular...
call npm run build:hostinger

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Erro durante o build!
    echo Verifique se todas as dependências estão instaladas.
    pause
    exit /b 1
)

echo.
echo ========================================
echo ✅ Build concluído com sucesso!
echo ========================================
echo.
echo 📁 Pasta criada: hostinger-upload/
echo.
echo 📋 Próximos passos:
echo 1. Abra a pasta 'hostinger-upload/'
echo 2. Faça upload de TODOS os arquivos para o public_html da Hostinger
echo 3. Certifique-se que o arquivo .htaccess foi incluído
echo 4. Teste o site após o upload
echo.
echo Pressione qualquer tecla para abrir a pasta...
pause > nul

if exist "hostinger-upload" (
    start hostinger-upload
) else (
    echo ❌ Pasta hostinger-upload não encontrada!
    pause
) 