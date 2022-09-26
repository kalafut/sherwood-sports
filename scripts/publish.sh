#!/bin/bash

git co gh-pages
git merge -m "Merge main" main
npm run build
rm -rf docs
cp -a dist docs
git add docs
git commit -m "Build site"
git push
git co -f main
