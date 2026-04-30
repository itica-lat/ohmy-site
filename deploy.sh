#!/usr/bin/env bash
set -euo pipefail
export PATH="$HOME/.bun/bin:$PATH"

LIVE=/var/www/ohmy-site
FLAG=/run/nginx-maintenance/ohmy-site

maintenance_on()  { mkdir -p /run/nginx-maintenance; touch "$FLAG"; sudo nginx -s reload; }
maintenance_off() { rm -f "$FLAG"; sudo nginx -s reload; }
trap maintenance_off EXIT

maintenance_on
bun install --frozen-lockfile
bun run build
rsync -a --delete dist/ "$LIVE/dist/"
