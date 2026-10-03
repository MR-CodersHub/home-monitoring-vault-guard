(function () {
  "use strict";

  function postCard(p) {
    return '<article class="post-card vg-card" data-cat="' + VG.esc(p.category) + '" data-id="' + VG.esc(p.id) + '">' +
      '<a class="post-media" href="' + VG.url("public/pages/blog-details.html?id=" + p.id) + '" aria-label="' + VG.esc(p.title) + '">' +
        '<img src="' + VG.esc(p.image) + '" alt="" loading="lazy" data-fb="' + VG.url("assets/img/ph-dashboard.svg") + '" />' +
        '<span class="post-cat">' + VG.esc(p.category) + "</span></a>" +
      '<div class="post-body">' +
        '<div class="post-meta"><span>' + VG.icon("calendar", "w-3.5 h-3.5") + VG.data.formattedDate(p.date) + "</span>" +
          "<span>" + VG.icon("clock", "w-3.5 h-3.5") + p.read + " min read</span></div>" +
        '<h3><a href="' + VG.url("public/pages/blog-details.html?id=" + p.id) + '">' + VG.esc(p.title) + "</a></h3>" +
        '<p>' + VG.esc(p.excerpt) + "</p>" +
        '<div class="post-foot"><span class="post-author"><span class="avatar-mini">' +
          VG.icon("user", "w-3.5 h-3.5") + "</span>" + VG.esc(p.author) + "</span>" +
          '<a class="post-link" href="' + VG.url("public/pages/blog-details.html?id=" + p.id) + '">Read' +
          VG.icon("arrowRight", "w-4 h-4") + "</a></div>" +
      "</div></article>";
  }

  function featuredCard(p) {
    return '<a class="feat-post vg-card" href="' + VG.url("public/pages/blog-details.html?id=" + p.id) + '">' +
      '<span class="feat-post-media"><img src="' + VG.esc(p.image) + '" alt="" data-fb="' + VG.url("assets/img/ph-dashboard.svg") + '" />' +
        '<span class="feat-flag">' + VG.icon("star", "w-4 h-4") + "Featured</span></span>" +
      '<span class="feat-post-body">' +
        '<span class="post-meta"><span>' + VG.icon("calendar", "w-3.5 h-3.5") + VG.data.formattedDate(p.date) + "</span>" +
        "<span>" + VG.icon("clock", "w-3.5 h-3.5") + p.read + " min read</span></span>" +
        "<strong>" + VG.esc(p.title) + "</strong>" +
        "<span class=\"feat-excerpt\">" + VG.esc(p.excerpt) + "</span>" +
        '<span class="post-link">Read the article' + VG.icon("arrowRight", "w-4 h-4") + "</span>" +
      "</span></a>";
  }


  function render() {
    var grid = VG.q("[data-blog-grid]");
    var chips = VG.q("[data-blog-filters]");
    var search = VG.q("[data-blog-search]");
    var count = VG.q("[data-blog-count]");
    var empty = VG.q("[data-blog-empty]");
    var sort = VG.q("[data-blog-sort]");
    var more = VG.q("[data-blog-more]");
    if (!grid) return;

    var all = VG.data.posts.slice();
    var featured = all.filter(function (p) { return p.featured; })[0] || all[0];
    var fh = VG.q("[data-blog-featured]");
    if (fh) fh.innerHTML = featuredCard(featured);

    var cats = VG.data.postCategories();
    if (chips) {
      chips.innerHTML = '<button class="chip is-active" data-filter="all">All <span>' + all.length + "</span></button>" +
        cats.map(function (c) {
          var n = all.filter(function (p) { return p.category === c; }).length;
          return '<button class="chip" data-filter="' + VG.esc(c) + '">' + VG.esc(c) + " <span>" + n + "</span></button>";
        }).join("");
    }

    var active = "all", term = "", order = "new", limit = 6;
    grid.innerHTML = all.map(postCard).join("");

    function pool() {
      var list = all.filter(function (p) {
        var okCat = active === "all" || p.category === active;
        var hay = (p.title + " " + p.excerpt + " " + p.tags.join(" ") + " " + p.author + " " + p.category).toLowerCase();
        var okTerm = !term || hay.indexOf(term) !== -1;
        return okCat && okTerm;
      });
      list.sort(function (a, b) {
        if (order === "old") return a.date < b.date ? 1 : -1;
        if (order === "read") return b.views - a.views;
        return a.date < b.date ? 1 : -1;
      });
      return list;
    }

    function apply() {
      var list = pool();
      var slice = list.slice(0, limit);
      VG.qa(".post-card", grid).forEach(function (el) {
        var show = slice.some(function (p) { return p.id === el.getAttribute("data-id"); });
        el.classList.toggle("is-hidden", !show);
      });
      if (count) count.textContent = list.length + (list.length === 1 ? " article" : " articles");
      if (empty) empty.classList.toggle("is-hidden", list.length !== 0);
      if (more) more.classList.toggle("is-hidden", list.length <= limit);
      if (chips) VG.qa(".chip", chips).forEach(function (c) {
        c.classList.toggle("is-active", c.getAttribute("data-filter") === active);
      });
      if (list.length) {
        var msg = list.length ? "" : "";
        if (empty && list.length === 0) {
          empty.innerHTML = VG.icon("search", "w-8 h-8") +
            "<h3>No articles match that search</h3>" +
            "<p>Try a broader term, or browse every category. Our monitoring desk can also answer directly.</p>" +
            '<a class="btn-outline btn-compact" href="' + VG.url("public/pages/contact.html") + '">Ask the desk</a>';
        }
      }
    }

    if (chips) {
      chips.addEventListener("click", function (e) {
        var b = e.target.closest(".chip");
        if (!b) return;
        active = b.getAttribute("data-filter");
        limit = 6;
        apply();
      });
    }
    if (search) {
      search.addEventListener("input", function () {
        term = search.value.trim().toLowerCase();
        limit = 6;
        apply();
      });
    }
    if (sort) {
      sort.addEventListener("change", function () { order = sort.value; apply(); });
    }
    if (more) {
      more.addEventListener("click", function () {
        limit += 4;
        apply();
        VG.q("[data-blog-grid]").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    apply();
    VG.reveal(grid);
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
