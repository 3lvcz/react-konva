#!/bin/bash -e

babel=node_modules/.bin/babel
webpack=node_modules/.bin/webpack

rm -rf build

$babel -e 0 -L -d build/lib ./src
cp README.md build/
find -X build/lib -type d -name __tests__ | xargs rm -rf
node -p 'p=require("./package");p.main="lib";p.scripts=p.devDependencies=undefined;JSON.stringify(p,null,2)' > build/package.json

NODE_ENV=production $webpack src/index.js build/umd/ReactKonva.js
NODE_ENV=production COMPRESS=1 $webpack src/index.js build/umd/ReactKonva.min.js

echo "gzipped, the global build is `gzip -c build/umd/ReactKonva.min.js | wc -c | sed -e 's/^[[:space:]]*//'` bytes"
