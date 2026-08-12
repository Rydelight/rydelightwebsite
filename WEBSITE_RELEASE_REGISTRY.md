# Rydelight Website Release Registry

This file is the human-readable index for website releases. GitHub is the authoritative version history; Vercel deploys the commit at the head of `main`. Each approved production release receives a short tag and an entry below, so rollback does not require searching deployment metadata.

## How to use this registry

When a change is ready for production, create a GitHub commit, then record its commit ID, the Vercel production deployment URL, and any quick rollback note. To recover from an issue, restore the selected release tag in a new commit and deploy that commit; do not make Drive or Vercel the source of truth.

| Release | Git commit | Vercel deployment | Status | Purpose and rollback note |
|---|---|---|---|---|
| `pre-bts-arlington-campaign` | `013e1d5acb2be2b805cd63ddad810033d116f757` | `https://rydelightwebsite-a8v92mimn-rydelight.vercel.app` | Live baseline | Last verified version before the BTS Arlington campaign. Restore this tag if the campaign update must be removed. |
| `bts-arlington-campaign-2026-08-12` | `eae1afc14221847f2c83f09e273fe4bbc658641c` | `https://rydelightwebsite-c5klqgslg-rydelight.vercel.app` | Live | Adds the Arlington concert campaign, PC sync helper, release registry, and recovery workflow. Verified on `rydelight.com`. |

## Standard recovery procedure

1. Identify the last known-good release tag in this file.
2. Create a new commit from that tag or use GitHub’s revert flow; do not force-push or delete history.
3. Push the rollback commit to `main` and let Vercel deploy it.
4. Confirm `rydelight.com` loads correctly, then refresh the PC working copy.
5. Add a short note here documenting the incident and the restored release.

## Mirror policy

The PC working copy and the ManusOS release mirror are convenience and recovery copies. They follow GitHub commits; they do not independently deploy the website. The release mirror should contain a dated source archive, this registry, the commit ID, and build-validation result.
