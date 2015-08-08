#!/bin/bash
npm install supervisor -g
npm install bower -g
rm -rf ./bin README.md LICENSE
mv scripts bin
rm -f butler.sh setup.sh
rm -f package.json package.json.cli
mv package.json.skeleton package.json
npm install
bower install
chmod u+x ./bin/start.sh
chmod u+x ./bin/stop.sh
chmod u+x ./bin/dev_start.sh
