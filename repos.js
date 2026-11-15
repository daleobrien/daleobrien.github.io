// THE ONLY FILE TO EDIT. To add a repo, add one line to a section's `repos` list:
//   { name: "my-repo", desc: "One sentence.", lang: "Rust", stars: 3, img: "img/my-repo.svg" },
// Optional: lang, stars, site (live site URL), siteLabel (link text, default "Live site"), url (defaults to https://github.com/daleobrien/<name>).
// cover: true shows the repo's own docs/cover.png (1280 by 640) from GitHub instead, with img as the
// fallback until that file is there (or while the repo is private).
// Put the thumbnail in img/. To add a section, add { id, title, repos: [...] } to the list.
window.SECTIONS = [
  { id: "mazes", title: "Mazes & Puzzles", repos: [
    { name: "maze", desc: "Weave mazes, generated in Python, as SVG, PDF or text: passages cross over and under each other.", lang: "Python", stars: 130, cover: true, img: "img/maze.svg", site: "https://maze.do.id.au/?maze=straight", siteLabel: "Play" },
    { name: "maze-rs", desc: "Fast weave mazes, generated in Rust, as SVG, PDF or text, with an optional solution and a hand-drawn look.", lang: "Rust", cover: true, img: "img/maze-rs.svg", site: "https://maze.do.id.au/?maze=straight", siteLabel: "Play" },
    { name: "lubra", desc: "Hand-drawn triangle-tile mazes, generated in Rust, with tracks that pass over and under each other.", lang: "Rust", cover: true, img: "img/lubra.svg", site: "https://maze.do.id.au/?maze=curvy", siteLabel: "Play" }
  ]},
  { id: "games", title: "Games", repos: [
    { name: "Rock", desc: "A Rust port of ROCK, a boulders-and-diamonds game I wrote in Turbo Pascal for Windows 3.x in 1993.", lang: "Rust", img: "img/rock.png", site: "https://rock.do.id.au/", siteLabel: "Play" },
    { name: "Dash", desc: "A digging game: tunnel through dirt, collect gems, and keep out from under the rocks.", lang: "Rust", img: "img/dash.jpg", site: "https://dash.do.id.au/", siteLabel: "Play" },
    { name: "wordsearch", desc: "Word search puzzles from your own word lists, in the terminal or as a PDF, with hidden near-misses to make them harder.", lang: "Python", stars: 1, cover: true, img: "img/wordsearch.png" }
  ]},
  { id: "engineering", title: "Engineering", repos: [
    { name: "lattice-gas", desc: "A cellular-automaton fluid: particles on a hexagonal lattice that shed a vortex street, after Wolfram's A New Kind of Science.", lang: "Rust", cover: true, img: "img/lattice-gas.png" },
    { name: "mars", desc: "A quadtree fractal image codec in Rust, for Apple Silicon: images stored as self-similarities, rebuilt by iteration.", lang: "Rust", cover: true, img: "img/mars.svg" },
    { name: "fractal_pie", desc: "Image compression from a quadtree of least-squares planes, range-coded: 1.75 bpp in about 10 ms.", lang: "Rust", stars: 1, cover: true, img: "img/fractal-pie.svg" },
    { name: "fractal_mars", desc: "Mario Polvere's 1998 fractal image coder in C, comparing six ways to speed up the codebook search.", lang: "C", stars: 2, cover: true, img: "img/fractal-mars.svg" }
  ]},
  { id: "servers", title: "Servers & Systems", repos: [
    { name: "sarm", desc: "A static-file web server written entirely in ARM64 assembly. HTTP/1.1, HTTP/2 and TLS 1.3, no libc.", lang: "ARM64 assembly", img: "img/sarm.svg" },
    { name: "Static", desc: "A minimal, self-contained static web server with zero runtime dependencies, embedded files and TLS.", lang: "Rust", img: "img/static.svg" },
    { name: "start-stop-daemon", desc: "A C rewrite of Debian's start-stop-daemon.", lang: "C", stars: 50, img: "img/start-stop-daemon.svg" }
  ]},
  { id: "utils", title: "Utils", repos: [
    { name: "ebook-maker", desc: "Create epub ebooks from folders of plain text chapters.", lang: "Python", stars: 14, img: "img/ebook-maker.svg" },
    { name: "sql-ksuid", desc: "SQL functions to create a KSUID, for MySQL and PostgreSQL.", lang: "SQL", stars: 12, img: "img/sql-ksuid.svg" },
    { name: "workbook", desc: "Print a data structure to an ASCII table, or to an Excel spreadsheet.", lang: "Python", stars: 4, img: "img/workbook.svg" },
    { name: "npm-with-chrome-browser-action", desc: "GitHub Action: npm with a Chrome browser, for react-snap and static pre-rendering.", lang: "JavaScript", stars: 4, img: "img/npm-with-chrome-browser-action.svg" },
    { name: "gh-pr-stats", desc: "Who reviews whose pull requests: each contributor's share across a repo's last 100 PRs.", lang: "Rust", img: "img/gh-pr-stats.svg" }
  ]},
  { id: "experiments", title: "Experiments & Other", repos: [
    { name: "container-comparsions", desc: "Minimal Dockerised hello world in a dozen languages, comparing image sizes and run times.", img: "img/container-comparsions.svg" },
    { name: "rust-only-mssql-client", desc: "Building and testing a Rust MSSQL client as a Windows executable.", lang: "Rust", img: "img/rust-only-mssql-client.svg" },
    { name: "totem-keymap", desc: "Keymap for the TOTEM split keyboard.", img: "img/totem-keymap.svg" }
  ]}
];
