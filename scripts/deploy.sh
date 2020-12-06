#!/usr/bin/env bash

yarn build  &&
cd build  &&
git init  &&
git add . &&
git commit -m "update"  &&
git remote add origin git@gitee.com:zrh0617/pocketbookkeeping-website.git &&
git push -u origin master -f
cd -