# Rydelight Website Operations Runbook

## Purpose

Rydelight’s website is one continuing responsibility within ManusOS’s broader Chief-of-Staff role. ManusOS serves as the website development function for troubleshooting, maintenance, improvements, release management, diagnostics, and recovery.

## Source of Truth

| Layer | Role | Rule |
|---|---|---|
| GitHub: `Rydelight/rydelightwebsite` | Authoritative source code and complete commit history | Every production change must be committed before deployment. |
| Vercel project: `rydelightwebsite` | Builds and serves the deployed website | Production deployment must trace to a GitHub commit. |
| `WEBSITE_RELEASE_REGISTRY.md` | Human-readable release and rollback index | Record each significant production release and its deployment URL. |
| ManusOS website source mirror | Dated recovery snapshot available on Scott’s PC through Drive sync | Reference and recovery copy only; never the deployment source. |
| PC workspace: `C:\Users\Scott\Documents\Projects\rydelightwebsite` | Scott’s editable local Git working copy | Update only through Git after preserving any local work. |

## How ManusOS Should Handle Future Requests

| Request from Scott | Required diagnostic sequence | Deliverable |
|---|---|---|
| “My website is behaving oddly” | Verify the live site, identify the active Vercel deployment, review recent deployment logs, compare recent GitHub commits, and inspect the release registry. | Plain-English cause assessment, evidence, and recommended next step. |
| “What changed?” | Compare the active production commit to the selected earlier release tag and summarize code, content, and behavior changes. | Short change log with release IDs and deployment links. |
| “Fix this on the site” | Reproduce or validate the issue, modify a branch, run the production build, preview the change, and request approval before publishing. | Tested release candidate and clear deployment summary. |
| “Roll the site back” | Identify the last known-good release tag, create a new rollback commit, push it, verify Vercel production, and refresh the PC workspace only after the live site is confirmed. | Verified rollback with the restored release ID. |
| “Make an improvement” | Define conversion, usability, content, or operational objective; inspect current implementation; build, test, preview, and request approval before release. | Production-ready improvement with rollback point. |

## Release Discipline

1. Before each production change, identify the current release tag and confirm the production commit.
2. Make changes on a branch whenever practical. Run `npm run build` before requesting release approval.
3. Commit changes with a descriptive message. Push only after Scott approves the external production release.
4. Verify the completed Vercel deployment and the live site. Update `WEBSITE_RELEASE_REGISTRY.md` for significant releases.
5. Create a dated ManusOS source mirror after important releases.

## Recovery Procedure

1. Start with `WEBSITE_RELEASE_REGISTRY.md` and choose the last known-good release tag.
2. Restore using a new Git commit or GitHub revert. Do not force-push or erase history.
3. Push the rollback commit to `main`, then wait for Vercel production to become ready.
4. Verify `https://rydelight.com` directly before declaring recovery complete.
5. Refresh the PC workspace using the sync script after production is confirmed.

## PC Workspace Synchronization

The PC workspace does not change until Scott runs `tools/Sync-RydelightWebsite.ps1`. The script fetches from GitHub, automatically clears only Windows `desktop.ini` metadata, and refuses to overwrite genuine local changes.

If real local changes exist, ManusOS must preserve and compare them before synchronization. The current process is safe and manual. A future improvement may add automatic local-change capture to ManusOS before the script stops; it must never auto-publish local edits or overwrite them silently.

## Current Known Release Points

| Name | Git reference | Use |
|---|---|---|
| `pre-bts-arlington-campaign` | Baseline before the BTS Arlington campaign | Safe rollback point for removing the campaign. |
| `bts-arlington-campaign-2026-08-12` | BTS Arlington campaign release | Reference point for the campaign and release workflow. |

## Security and Change Controls

The repository is currently public and `main` is not branch-protected. ManusOS must not alter repository privacy, access controls, production domains, billing, or authentication settings without Scott’s explicit approval.
