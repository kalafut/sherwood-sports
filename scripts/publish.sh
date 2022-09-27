#!/bin/bash

git co gh-pages
git merge -m "Merge main" main
npm run build
rm -rf docs
cp -a dist docs
cp CNAME docs
git add docs
git commit --amend -m "Build site"
git push
git co -f main
