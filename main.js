(function () {
  var GH = "https://github.com/daleobrien/";
  // A repo's own cover: docs/cover.png on its default branch.
  var RAW = "https://raw.githubusercontent.com/daleobrien/";

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function card(r) {
    var href = r.url || GH + r.name;
    var art = el("article", "card");

    var imgLink = el("a", r.cover ? "card-img cover" : "card-img");
    imgLink.href = href;
    imgLink.tabIndex = -1;
    imgLink.setAttribute("aria-hidden", "true");
    var img = el("img");
    if (r.cover) {
      // Until the cover is on GitHub (or while the repo is private), the old thumbnail.
      img.onerror = function () {
        img.onerror = null;
        imgLink.className = "card-img";
        img.src = r.img;
      };
      img.src = RAW + r.name + "/HEAD/docs/cover.png";
    } else {
      img.src = r.img;
    }
    img.alt = r.name + " preview";
    img.loading = "lazy";
    imgLink.appendChild(img);
    art.appendChild(imgLink);

    var h = el("h3", "card-name");
    var a = el("a", null, r.name);
    a.href = href;
    h.appendChild(a);
    art.appendChild(h);

    art.appendChild(el("p", "card-desc", r.desc));

    var meta = el("div", "meta");
    if (r.lang) meta.appendChild(el("span", null, r.lang));
    if (r.stars != null) meta.appendChild(el("span", null, "★ " + r.stars));
    if (r.site) {
      var s = el("a", "live", r.siteLabel || "Live site");
      s.href = r.site;
      meta.appendChild(s);
    }
    if (meta.childNodes.length) art.appendChild(meta);
    return art;
  }

  function render() {
    var data = window.SECTIONS || [];
    var main = document.getElementById("sections");
    var nav = document.getElementById("nav");
    var gh = nav.lastElementChild;

    data.forEach(function (sec) {
      var n = sec.repos.length;
      var link = el("a", null, sec.title);
      link.href = "#" + sec.id;
      nav.insertBefore(link, gh);

      var s = el("section", "section");
      s.id = sec.id;
      s.setAttribute("aria-labelledby", sec.id + "-h");

      var head = el("div", "section-head");
      var h2 = el("h2", null, sec.title);
      h2.id = sec.id + "-h";
      head.appendChild(h2);
      head.appendChild(el("div", "meta", n + (n === 1 ? " repo" : " repos")));
      s.appendChild(head);

      var grid = el("div", "grid");
      sec.repos.forEach(function (r) { grid.appendChild(card(r)); });
      s.appendChild(grid);
      main.appendChild(s);
    });
  }

  render();
})();
