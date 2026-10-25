#!/bin/sh
# Publishes dist/ to the gh-pages branch of origin, as a single fresh commit.
set -e
url=$(git remote get-url origin)
cd dist
touch .nojekyll
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(git -C .. rev-parse --short HEAD)"
git push -q -f "$url" gh-pages
rm -rf .git
echo "Pushed dist/ to gh-pages"
