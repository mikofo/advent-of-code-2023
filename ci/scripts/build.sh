#!/bin/bash
set -ex

bun install
bun build index.js --compile --target bun --outfile mikofo-advent-of-code-2023-js
bun jest

# step out of the repo dir
cd ../

VERSION=$(cat repo/package.json | grep version | head -1 | cut -d '"' -f 4)

# we need a way to reference the version
echo "$VERSION" > release/VERSION

echo "Packaging $VERSION"

mkdir dist
cp "repo/mikofo-advent-of-code-2023-js" dist/

cd dist
ARCHIVE="aoc-js-${VERSION}.tar.gz"
tar czf "$ARCHIVE" "mikofo-advent-of-code-2023-js"
cd ../

mv "dist/$ARCHIVE" "release/$ARCHIVE"

# we need a way to reference the file name
echo "$ARCHIVE" > release/ARCHIVE_NAME