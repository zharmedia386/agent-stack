#!/usr/bin/env bash
# Snapshot public GitHub stars into data-raw/github-stars.json (needs gh + jq; GH_TOKEN in CI).
set -euo pipefail

user="${STARS_USER:-zharmedia386}"
out="data-raw/github-stars.json"
tmp="$(mktemp)"

gh api --paginate -H "Accept: application/vnd.github.star+json" "users/${user}/starred?per_page=100" \
  | jq -s 'add | map({starred_at, full_name: .repo.full_name, html_url: .repo.html_url, description: .repo.description, language: .repo.language, stargazers_count: .repo.stargazers_count, topics: .repo.topics, homepage: .repo.homepage})' \
  > "$tmp"

# An empty or truncated response must never wipe the site.
count="$(jq length "$tmp")"
if [ "$count" -lt 1 ]; then
  echo "fetched 0 stars, keeping previous snapshot" >&2
  exit 1
fi

mv "$tmp" "$out"
echo "saved $count stars to $out"
