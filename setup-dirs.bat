@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0"

if not exist "pages" mkdir pages
if not exist "styles" mkdir styles
if not exist "public" mkdir public

echo Directories created successfully.
