# Rydelight website workspace sync
# Purpose: Create or safely refresh the authoritative GitHub working copy on this PC.
# This script never overwrites local uncommitted changes.

$ErrorActionPreference = 'Stop'

$RepositoryUrl = 'https://github.com/Rydelight/rydelightwebsite.git'
$RepositoryPath = 'C:\Users\Scott\Documents\Projects\rydelightwebsite'
$Branch = 'main'

function Invoke-Git {
    param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Arguments)
    & git @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "Git command failed: git $($Arguments -join ' ')"
    }
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw 'Git is not installed or is not available in PATH. Install Git for Windows, then run this script again.'
}

if (-not (Test-Path $RepositoryPath)) {
    $parent = Split-Path -Parent $RepositoryPath
    New-Item -ItemType Directory -Force -Path $parent | Out-Null
    Write-Host "Creating the local Rydelight website workspace..." -ForegroundColor Cyan
    Invoke-Git clone $RepositoryUrl $RepositoryPath
}

if (-not (Test-Path (Join-Path $RepositoryPath '.git'))) {
    throw "The folder exists but is not a Git repository: $RepositoryPath"
}

$trackedDesktopIni = & git -C $RepositoryPath ls-files '*desktop.ini' '*Desktop.ini'
if ($LASTEXITCODE -ne 0) {
    throw "Unable to inspect tracked Windows metadata in $RepositoryPath"
}

if ($trackedDesktopIni) {
    & git -C $RepositoryPath restore --staged --worktree -- $trackedDesktopIni
    if ($LASTEXITCODE -ne 0) {
        throw 'Unable to restore tracked Windows desktop.ini metadata files.'
    }
}

$changes = & git -C $RepositoryPath status --porcelain
if ($LASTEXITCODE -ne 0) {
    throw "Unable to inspect Git status in $RepositoryPath"
}

if ($changes) {
    Write-Host 'Sync stopped: this PC has uncommitted website changes.' -ForegroundColor Yellow
    Write-Host 'Nothing was overwritten. Commit, stash, or copy those changes before running the sync again.' -ForegroundColor Yellow
    Write-Host ''
    Write-Host 'Current local changes:' -ForegroundColor Yellow
    $changes | ForEach-Object { Write-Host "  $_" }
    exit 2
}

Write-Host 'Checking GitHub for the latest approved website version...' -ForegroundColor Cyan
Invoke-Git -C $RepositoryPath fetch origin $Branch
Invoke-Git -C $RepositoryPath checkout $Branch
Invoke-Git -C $RepositoryPath pull --ff-only origin $Branch

$commit = (& git -C $RepositoryPath rev-parse --short HEAD).Trim()
$subject = (& git -C $RepositoryPath log -1 --pretty=%s).Trim()

Write-Host ''
Write-Host 'Rydelight website workspace is current.' -ForegroundColor Green
Write-Host "Commit: $commit" -ForegroundColor Green
Write-Host "Change: $subject" -ForegroundColor Green
Write-Host "Location: $RepositoryPath" -ForegroundColor Green
