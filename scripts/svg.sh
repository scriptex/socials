#!/bin/bash

# Optimize SVG files using SVGO.
# List of used plugins can be found in the svgo.yml file in the root of the project
svgo -f assets --config=svgo.yml

# Generate a SVG sprite
spritesh -q -i assets -o data/sprite.svg -p svg-

# Minify the SVG sprite and remove all unnecessary whitespace
html-minifier data/sprite.svg --collapse-whitespace -o data/sprite.svg
