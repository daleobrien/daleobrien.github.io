# daleobrien.github.io

A small static index of my GitHub projects. No build step, no framework.

- `repos.js` is the only file to edit: it holds every section and repo.
- To add a repo, add one line to a section's `repos` list (see the comment at the top of `repos.js`).
- Put its thumbnail in `img/` (2 by 1, 640 by 320, like a cover) and point `img` at it.
- Or add `cover: true` to show the repo's own `docs/cover.png` (1280 by 640) straight from GitHub; `img` is then the fallback until that file is there, or while the repo is private.
- To preview, open `index.html` in a browser.
- Deployed by GitHub Pages from the repo root (`.nojekyll` is present).
