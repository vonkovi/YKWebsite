/* Yvon Kim — site interactions: post expand/collapse + active nav */
(function () {
  "use strict";

  // Whole-card click → open the project's case study in a new tab.
  // Ignores clicks on real links (let them do their own thing) and on the
  // image-slot (so dropping / replacing an image never navigates away).
  document.querySelectorAll(".proj[data-href]").forEach(function (card) {
    card.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      if (e.target.closest("image-slot")) return;
      var href = card.getAttribute("data-href");
      if (href) window.location.assign(href);
    });
  });

  // Tab switching (Projects / Writing) with hash routing
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  var views = {};
  document.querySelectorAll(".view").forEach(function (v) {
    views[v.getAttribute("data-view")] = v;
  });

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal-on-enter (staggered via CSS) — viewport-based, no IO dependency
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".proj, .post"));
  function revealInView() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    revealEls.forEach(function (el) {
      if (el.classList.contains("in")) return;
      if (el.offsetParent === null) return; // inside a hidden view
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
    });
  }
  if (reduce) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView);
    // reveal above-the-fold after first paint so the transition plays
    requestAnimationFrame(function () { requestAnimationFrame(revealInView); });
    // re-runs in case layout/fonts settle late (only reveals what's in view)
    setTimeout(revealInView, 300);
    setTimeout(revealInView, 900);
  }

  function show(name) {
    if (!views[name]) name = "projects";
    tabs.forEach(function (t) {
      t.setAttribute("aria-selected", t.getAttribute("data-tab") === name ? "true" : "false");
    });
    Object.keys(views).forEach(function (k) {
      views[k].hidden = k !== name;
    });
    if (history.replaceState) {
      history.replaceState(null, "", name === "projects" ? "#" : "#" + name);
    }
    window.scrollTo(0, 0);
    if (!reduce) {
      var v = views[name];
      v.classList.remove("view-anim");
      void v.offsetWidth;
      v.classList.add("view-anim");
      requestAnimationFrame(revealInView);
    }
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () { show(t.getAttribute("data-tab")); });
  });

  show((location.hash || "").replace("#", "") || "projects");
})();
