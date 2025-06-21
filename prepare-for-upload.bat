@echo off
echo ========================================
echo Preparando arquivos para upload Apache
echo ========================================

REM Criar pasta de upload se não existir
if not exist "upload-apache" mkdir upload-apache

REM Copiar todos os arquivos da pasta browser
echo Copiando arquivos...
xcopy "dist\philip-portfolio\browser\*" "upload-apache\" /E /Y

echo.
echo ========================================
echo Upload preparado com sucesso!
echo ========================================
echo.
echo Pasta 'upload-apache' criada com todos os arquivos necessários.
echo.
echo INSTRUÇÕES:
echo 1. Faça upload de TODOS os arquivos da pasta 'upload-apache' 
echo    para o diretório raiz do seu servidor web
echo 2. Certifique-se que o arquivo .htaccess foi incluído no upload
echo 3. Verifique se o servidor Apache tem mod_rewrite habilitado
echo.
echo Pressione qualquer tecla para abrir a pasta...
pause > nul
start upload-apache 