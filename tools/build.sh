#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

if [ "$#" -ge 1 ]; then
    HIGHLIGHT_JS_DST="$1"
fi

: ${HIGHLIGHT_JS_SRC="src/highlight.pack.js"}
: ${HIGHLIGHT_JS_DST="$HOME/git/rmarkdown/inst/rmd/h/highlight/highlight.js"}

# Build highlight.js with pre-set languages
python tools/build.py bash cpp css ini js perl python r ruby scala sql stan xml

# Optionally copy the generated 'highlight.pack.js' to a new location
# as needed (e.g. when bundling with R Markdown)
if [ -e "$(dirname "${HIGHLIGHT_JS_DST}")" ]; then
    cp "${HIGHLIGHT_JS_SRC}" "${HIGHLIGHT_JS_DST}"
    echo -e '\nhljs.initHighlightingOnLoad();\n' >> "${HIGHLIGHT_JS_DST}"
fi

