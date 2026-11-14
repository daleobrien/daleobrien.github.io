// THE ONLY FILE TO EDIT. To add a repo, add one line to a section's `repos` list:
//   { name: "my-repo", desc: "One sentence.", lang: "Rust", stars: 3, img: "img/my-repo.svg" },
// Optional: lang, stars, site (live site URL), siteLabel (link text, default "Live site"), url (defaults to https://github.com/daleobrien/<name>).
// Put the thumbnail in img/. To add a section, add { id, title, repos: [...] } to the list.
window.SECTIONS = [
  { id: "mazes", title: "Mazes & Puzzles", repos: [
    { name: "maze", desc: "Maze generator with crossings: passages weave over and under each other.", lang: "Python", stars: 130, img: "img/maze.svg", site: "https://maze.do.id.au/" },
    { name: "maze-rs", desc: "A fast Rust port of maze. Writes weave mazes as SVG, PDF or text, with an optional solution and hand-drawn ink look.", lang: "Rust", img: "img/maze-rs.svg" },
    { name: "lubra", desc: "Generates, reduces and renders hex-tile mazes as SVG.", lang: "Rust", img: "img/lubra.svg" },
    { name: "wordsearch", desc: "Create word search puzzles from a list of words, with optional decoy words.", lang: "Python", stars: 1, img: "img/wordsearch.png" }
  ]},
  { id: "games", title: "Games", repos: [
    { name: "Rock", desc: "A Rust port of ROCK, a boulders-and-diamonds game I wrote in Turbo Pascal for Windows 3.x in 1993.", lang: "Rust", img: "img/rock.png", site: "https://rock.do.id.au/", siteLabel: "Play" },
    { name: "Dash", desc: "A digging game: tunnel through dirt, collect gems, and keep out from under the rocks.", lang: "Rust", img: "img/dash.jpg", site: "https://dash.do.id.au/", siteLabel: "Play" }
  ]},
  { id: "engineering", title: "Engineering", repos: [
    { name: "lattice-gas", desc: "A cellular-automaton fluid: the lattice-gas model from Wolfram's A New Kind of Science.", lang: "Rust", img: "img/lattice-gas.png" },
    { name: "mars", desc: "A quadtree fractal image codec in Rust, targeting Apple Silicon.", lang: "Rust", img: "img/mars.svg" },
    { name: "fractal_pie", desc: "Just playing around with image compression: least-squares planes over a recursively split image.", lang: "Rust", stars: 1, img: "img/fractal-pie.svg" },
    { name: "fractal_mars", desc: "A quadtree based fractal image coder/decoder.", lang: "C", stars: 2, img: "img/fractal-mars.svg" }
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
