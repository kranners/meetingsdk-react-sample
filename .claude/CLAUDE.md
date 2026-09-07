# meetingsdk-react-sample

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repository is a fork of the official Zoom Meeting SDK React sample (https://github.com/zoom/meetingsdk-react-sample).

The purpose of the fork is primarily to test the Zoom Meeting SDK, and to diagnose potential Zoom errors, rather than to perform active development on features.

As this is a fork, it is public and its visibility cannot be altered.

## Workflow

As this repository is inherently experimental, most work will be committed directly to the `master` branch.

Any branches used will be primarily for either parallelisation or for archival or both.

## Architecture

The repository is a simple React single-page-application running through Vite.

The App.tsx renders a single header and a setup to load the Zoom Meeting SDK.

Values to join a given Zoom meeting are populated in the environment file `.env.local` so that secrets like the meeting signature are not exposed publicly.

## Common commands

```bash
# Run the dev server
npm run dev
```

