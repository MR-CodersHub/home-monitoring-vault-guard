(function () {
  "use strict";

  function block(b, i) {
    if (b.type === "lead") return '<p class="lede">' + VG.esc(b.text) + "</p>";
    if (b.type === "h2") return '<h2 id="sec-' + (i + 1) + '">' + VG.esc(b.text) + "</h2>";
    if (b.type === "p") return "<p>" + VG.esc(b.text) + "</p>";
    if (b.type === "list") {
      return '<ul class="art-list">' + b.items.map(function (it) {
        return "<li>" + VG.icon("checkCircle", "w-4 h-4") + "<span>" + VG.esc(it) + "</span></li>";
      }).join("") + "</ul>";
    }
    if (b.type === "quote") return '<blockquote class="art-quote">' + VG.esc(b.text) + "</blockquote>";
    if (b.type === "callout") {
      return '<aside class="art-callout"><span class="co-ico">' + VG.icon("lightbulb", "w-5 h-5") + "</span>" +
        "<div><strong>" + VG.esc(b.title) + "</strong><p>" + VG.esc(b.text) + "</p></div></aside>";
    }
    if (b.type === "table") {
      return '<div class="table-scroll"><table class="vtable"><thead><tr>' +
        b.head.map(function (h) { return "<th>" + VG.esc(h) + "</th>"; }).join("") +
        "</tr></thead><tbody>" + b.rows.map(function (r) {
          return "<tr>" + r.map(function (c, ci) {
            return ci === 0 ? "<th scope=\"row\">" + VG.esc(c) + "</th>" : "<td>" + VG.esc(c) + "</td>";
          }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
    }
    return "";
  }

  function toc(p) {
    var heads = p.body.filter(function (b) { return b.type === "h2"; });
    if (!heads.length) return "";
    return '<nav class="toc" aria-label="On this page"><h4>On this page</h4><ol>' +
      p.body.map(function (b, i) {
        return b.type === "h2" ? '<li><a href="#sec-' + (i + 1) + '">' + VG.esc(b.text) + "</a></li>" : "";
      }).join("") + "</ol></nav>";
  }


  function postMini(p) {
    return '<a class="mini-post" href="' + VG.url("public/pages/blog-details.html?id=" + p.id) + '">' +
      '<span class="mini-thumb"><img src="' + VG.esc(p.image) + '" alt="" loading="lazy" data-fb="' + VG.url("assets/img/ph-dashboard.svg") + '" /></span>' +
      "<span><strong>" + VG.esc(p.title) + "</strong><small>" + VG.data.formattedDate(p.date) + " \u00b7 " + p.read + " min</small></span></a>";
  }

  function render() {
    var host = VG.q("[data-post-detail]");
    if (!host) return;
    var id = VG.param("id");
    var p = VG.data.postById(id) || VG.data.posts[0];
    document.title = p.title + " | " + VG.site.name + " Journal";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.excerpt);

    var crumbs = VG.q("[data-breadcrumb]");
    if (crumbs) {
      crumbs.innerHTML = '<a href="' + VG.url("index.html") + '">Home</a><span class="sep">/</span>' +
        '<a href="' + VG.url("public/pages/blog.html") + '">Blog</a><span class="sep">/</span>' +
        '<span>' + VG.esc(p.category) + "</span>";
    }

    var head = VG.q("[data-post-head]");
    if (head) {
      head.innerHTML = '<div class="post-head" data-reveal="up">' +
        '<span class="post-cat-lg">' + VG.esc(p.category) + "</span>" +
        '<h1 class="art-title">' + VG.esc(p.title) + "</h1>" +
        '<div class="post-byline"><span class="avatar">' + VG.icon("user", "w-4 h-4") + "</span>" +
          "<div><strong>" + VG.esc(p.author) + "</strong><small>" + VG.esc(p.role) + "</small></div>" +
          '<span class="dot" aria-hidden="true"></span><span>' + VG.icon("calendar", "w-4 h-4") + VG.data.formattedDate(p.date) + "</span>" +
          "<span>" + VG.icon("clock", "w-4 h-4") + p.read + " min read</span>" +
          "<span>" + VG.icon("eye", "w-4 h-4") + VG.num(p.views) + " views</span></div></div>" +
        '<figure class="art-cover"><img src="' + VG.esc(p.image) + '" alt="" data-fb="' + VG.url("assets/img/ph-dashboard.svg") + '" />' +
        "<figcaption>Illustration for \u201c" + VG.esc(p.title) + "\u201d</figcaption></figure>";
    }

    var body = VG.q("[data-post-body]");
    if (body) body.innerHTML = p.body.map(block).join("");

    var side = VG.q("[data-post-side]");
    if (side) {
      var others = VG.data.posts.filter(function (x) { return x.id !== p.id; });
      var cats = VG.data.postCategories();
      side.innerHTML = toc(p) +
        '<div class="side-card vg-card"><h4>Search the journal</h4>' +
        '<div class="search-inline">' + VG.icon("search", "w-4 h-4") +
        '<input type="search" placeholder="Search articles" data-side-search /></div>' +
        '<div data-side-results class="side-results"></div></div>' +
        '<div class="side-card vg-card"><h4>Recent articles</h4><div class="mini-list">' +
        others.slice(0, 4).map(postMini).join("") + "</div></div>" +
        '<div class="side-card vg-card"><h4>Categories</h4><ul class="side-cats">' +
        cats.map(function (c) {
          var n = VG.data.posts.filter(function (x) { return x.category === c; }).length;
          return '<li><a href="' + VG.url("public/pages/blog.html") + '">' + VG.esc(c) + "<span>" + n + "</span></a>";
        }).join("") + "</ul></div>" +
        '<div class="side-card vg-card side-cta"><h4>Monthly security briefing</h4>' +
        "<p>One email a month: new hardware, real incidents, and what we changed on the desk.</p>" +
        '<form data-form="newsletter" novalidate><div class="field"><input class="input" type="email" name="email" ' +
        'placeholder="you@email.com" data-label="Email" required /></div>' +
        '<button class="btn-primary btn-compact" type="submit">Subscribe</button>' +
        '<p class="form-msg" data-form-msg role="status"></p></form></div>';
    }


    var foot = VG.q("[data-post-foot]");
    if (foot) {
      var idx = VG.data.posts.indexOf(p);
      var prev = VG.data.posts[idx + 1];
      var next = VG.data.posts[idx - 1];
      foot.innerHTML = '<div class="art-foot">' +
        '<div class="tag-row">' + p.tags.map(function (t) { return '<span class="tag">#' + VG.esc(t) + "</span>"; }).join("") + "</div>" +
        '<div class="share-row"><span>Share</span>' +
        '<a class="social-icon" href="#" aria-label="Share on X">' + VG.icon("message", "w-4 h-4") + "</a>" +
        '<a class="social-icon" href="#" aria-label="Share by email">' + VG.icon("mail", "w-4 h-4") + "</a>" +
        '<button type="button" class="social-icon" data-copy-link aria-label="Copy link">' + VG.icon("file", "w-4 h-4") + "</button>" +
        "</div></div>" +
        '<div class="author-card vg-card"><span class="avatar avatar-lg">' + VG.icon("user", "w-5 h-5") + "</span>" +
        "<div><strong>" + VG.esc(p.author) + "</strong><small>" + VG.esc(p.role) + "</small>" +
        "<p>Part of the VaultGuard team writing about the hardware we build and the alerts we verify every night.</p></div></div>" +
        '<nav class="pager">' +
          (prev ? '<a class="pager-link" href="' + VG.url("public/pages/blog-details.html?id=" + prev.id) + '">' +
            '<span>Previous</span><strong>' + VG.esc(prev.title) + "</strong></a>" : '<span class="pager-link is-empty"></span>') +
          (next ? '<a class="pager-link next" href="' + VG.url("public/pages/blog-details.html?id=" + next.id) + '">' +
            "<span>Next</span><strong>" + VG.esc(next.title) + "</strong></a>" : '<span class="pager-link next is-empty"></span>') +
        "</nav>" +
        '<div class="related"><h3>Keep reading</h3><div class="rel-grid">' +
        VG.data.posts.filter(function (x) { return x.id !== p.id; }).slice(0, 3).map(function (x) {
          return '<a class="rel-post vg-card" href="' + VG.url("public/pages/blog-details.html?id=" + x.id) + '">' +
            '<img src="' + VG.esc(x.image) + '" alt="" loading="lazy" data-fb="' + VG.url("assets/img/ph-dashboard.svg") + '" />' +
            "<span><small>" + VG.esc(x.category) + "</small><strong>" + VG.esc(x.title) + "</strong>" +
            "<em>" + x.read + " min read</em></span></a>";
        }).join("") + "</div></div>";
    }

    var sideSearch = VG.q("[data-side-search]");
    if (sideSearch) {
      var results = VG.q("[data-side-results]");
      sideSearch.addEventListener("input", function () {
        var term = sideSearch.value.trim().toLowerCase();
        if (!term) { results.innerHTML = ""; return; }
        var found = VG.data.posts.filter(function (x) {
          return (x.title + " " + x.excerpt).toLowerCase().indexOf(term) !== -1;
        }).slice(0, 4);
        results.innerHTML = found.length ? found.map(function (x) {
          return '<a class="mini-post" href="' + VG.url("public/pages/blog-details.html?id=" + x.id) + '">' +
            "<span><strong>" + VG.esc(x.title) + "</strong><small>" + VG.esc(x.category) + "</small></span></a>";
        }).join("") : '<p class="muted-note">No match in the journal.</p>';
      });
    }

    var copy = VG.q("[data-copy-link]");
    if (copy) {
      copy.addEventListener("click", function () {
        var url = window.location.href;
        if (navigator.clipboard) navigator.clipboard.writeText(url);
        VG.toast("Article link copied to your clipboard.", "success");
      });
    }

    VG.qa(".side-card form[data-form]", side || document).forEach(function (f) {
      if (window.VGForm) window.VGForm.init(f.parentNode);
    });

    host.setAttribute("data-post-id", p.id);
    VG.reveal(host);
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
