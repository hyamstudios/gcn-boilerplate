#!/bin/sh
sed -i 's/PLACEHOLDER_SPACE_ID/$SPACE_ID/g' ./netlify.toml
sed -i 's/PLACEHOLDER_ACCESS_TOKEN/$ACCESS_TOKEN/g' ./netlify.toml
sed -i 's/PLACEHOLDER_PREVIEW_TOKEN/$PREVIEW_TOKEN/g' ./netlify.toml
cat ./netlify.toml
# gatsby build