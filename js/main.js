(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var wa = function (msg) { return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg); };

  /* Liens WhatsApp : tout élément avec data-wa */
  function bindWhatsApp(root) {
    $$("[data-wa]", root).forEach(function (el) {
      el.setAttribute("href", wa(el.getAttribute("data-wa")));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
  }

  /* Catalogue */
  function photoBlock(src, alt, cls, art) {
    return '<figure class="photo ' + cls + '"><img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" onerror="this.remove()">' +
      '<svg class="ph-art"><use href="#' + art + '"/></svg></figure>';
  }

  function renderFiche(b, cat) {
    var details = (b.details || []).map(function (d) { return "<dt>" + esc(d[0]) + "</dt><dd>" + esc(d[1]) + "</dd>"; }).join("");
    if (b.localisation) details = "<dt>Localisation</dt><dd>" + esc(b.localisation) + "</dd>" + details;
    var ref = b.reference || b.titre;
    var msg = "Bonjour CHANJE SA, je suis intéressé(e) par l'offre " + ref + (b.titre ? " (" + b.titre + ")" : "") + ".";
    var swap = "Bonjour CHANJE SA, je souhaite proposer un échange pour l'offre " + ref + (b.titre ? " (" + b.titre + ")" : "") + ". Voici ce que je propose : ";
    var cond = b.conditions || "";
    var canSwap = /chang/i.test(cond);
    var media = '<figure class="photo ' + cat.ph + '">' +
      (b.photo || b.web ? '<img src="' + esc(b.photo || b.web) + '" alt="' + esc(b.titre) + '" loading="lazy"' + (b.photo && b.web ? ' data-web="' + esc(b.web) + '"' : "") + ' onerror="if(this.dataset.web){var w=this.dataset.web;this.removeAttribute(\'data-web\');this.src=w}else{this.remove()}">' : "") +
      '<svg class="ph-art"><use href="#' + (b.art || cat.art) + '"/></svg>' +
      (cond ? '<span class="fiche-cond">' + esc(cond) + "</span>" : "") +
      (b.reference ? '<span class="fiche-ref">' + esc(b.reference) + "</span>" : "") + "</figure>";
    return '<article class="fiche" data-cat="' + esc(b.categorie) + '" data-cond="' + esc(cond.toLowerCase()) + '">' + media +
      '<div class="fiche-body"><h3>' + esc(b.titre) + "</h3>" +
      (b.valeur ? '<p class="fiche-prix">' + esc(b.valeur) + "</p>" : "") +
      "<dl>" + details + "</dl>" +
      '<div class="fiche-actions"><a class="btn btn-red" data-wa="' + esc(msg) + '">Demander des infos</a>' +
      (canSwap ? '<a class="btn btn-line" data-wa="' + esc(swap) + '">Proposer un échange</a>' : "") + "</div></div></article>";
  }

  function renderModel(key, cat) {
    var msg = "Bonjour CHANJE SA, je souhaite proposer un bien (" + cat.titre.toLowerCase() + ") à vendre ou à échanger.";
    return '<div class="model"><figure class="photo ' + cat.ph + '"><svg class="ph-art"><use href="#' + cat.art + '"/></svg></figure>' +
      '<div class="model-info"><h3>' + esc(cat.titre) + "</h3><p>" + esc(cat.texte) + "</p>" +
      '<ul class="model-fields">' + cat.champs.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>" +
      '<div class="model-actions"><a class="btn btn-red" data-wa="' + esc(msg) + '">Proposer un bien</a>' +
      '<a class="btn btn-line" data-wa="Bonjour CHANJE SA, quelles offres sont actuellement disponibles pour : ' + esc(cat.titre.toLowerCase()) + ' ?">Demander les offres disponibles</a></div></div></div>';
  }

  function renderTabs() {
    $("#tabs").innerHTML = Object.keys(CATEGORIES).map(function (key, i) {
      var n = BIENS.filter(function (b) { return b.categorie === key; }).length;
      return '<button role="tab" id="tab-' + key + '" aria-controls="panel-' + key + '" aria-selected="' + (i === 0) + '"' + (i ? ' tabindex="-1"' : "") + ">" +
        esc(CATEGORIES[key].court || CATEGORIES[key].titre) + (n ? ' <span class="tab-n">' + n + "</span>" : "") + "</button>";
    }).join("");
  }

  function renderPanels() {
    var holder = $("#panels");
    holder.innerHTML = Object.keys(CATEGORIES).map(function (key, i) {
      var cat = CATEGORIES[key];
      var items = BIENS.filter(function (b) { return b.categorie === key; });
      var inner = items.length
        ? '<h3 class="panel-title">' + esc(cat.titre) + '</h3><div class="fiches' + (items.length === 1 ? ' fiches-solo' : '') + '">' + items.map(function (b) { return renderFiche(b, cat); }).join("") +
          '</div><p class="fiches-empty" hidden>Aucune offre avec ce filtre pour le moment. Écrivez-nous : une offre correspondante peut être disponible.</p>'
        : renderModel(key, cat);
      return '<div class="panel" role="tabpanel" id="panel-' + key + '" aria-labelledby="tab-' + key + '"' + (i ? " hidden" : "") + ">" + inner + "</div>";
    }).join("");
    bindWhatsApp(holder);
  }

  /* Filtre Toutes / Vente / Échange */
  function applyFilter(mode) {
    $$(".filters button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-f") === mode); });
    $$(".panel").forEach(function (panel) {
      var cards = $$(".fiche", panel), shown = 0;
      cards.forEach(function (c) {
        var ok = mode === "all" || c.getAttribute("data-cond").indexOf(mode) !== -1;
        c.hidden = !ok;
        if (ok) shown++;
      });
      var empty = $(".fiches-empty", panel);
      if (empty) empty.hidden = shown > 0;
    });
  }

  function initFilters() {
    $$(".filters button").forEach(function (b) {
      b.addEventListener("click", function () { applyFilter(b.getAttribute("data-f")); });
    });
  }

  function initTabs() {
    var tabs = $$('[role="tab"]');
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        $("#" + t.getAttribute("aria-controls")).hidden = !on;
      });
      if (tab.scrollIntoView) tab.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t); });
      t.addEventListener("keydown", function (e) {
        var n = null;
        if (e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (n) { e.preventDefault(); select(n); n.focus(); }
      });
    });
  }

  /* Catalogue automobile : lien en ligne si renseigné */
  function initAutoCatalogue() {
    var a = $("#catalogue-auto");
    if (CONFIG.catalogueAutoUrl) {
      a.removeAttribute("data-wa");
      a.setAttribute("href", CONFIG.catalogueAutoUrl);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    }
  }

  /* Menu mobile */
  function initMenu() {
    var btn = $(".nav-toggle"), nav = $("#nav");
    function close() { nav.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Ouvrir le menu"); document.body.style.overflow = ""; }
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 980) close(); });
  }

  /* Formulaire : prépare le message WhatsApp */
  function initForm() {
    var form = $("#contact-form"), err = $("#form-error");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nom = form.nom.value.trim(), type = form.type.value, bien = form.bien.value.trim(), msg = form.msg.value.trim();
      var ok = true;
      [["nom", nom], ["type", type], ["bien", bien]].forEach(function (p) {
        var field = form[p[0]].closest(".field");
        field.classList.toggle("invalid", !p[1]);
        if (!p[1]) ok = false;
      });
      err.hidden = ok;
      if (!ok) return;
      var text = "Bonjour CHANJE SA,\nNom : " + nom + "\nDemande : " + type + "\nBien concerné : " + bien + (msg ? "\nProjet : " + msg : "");
      window.open(wa(text), "_blank", "noopener");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderTabs();
    renderPanels();
    initTabs();
    initFilters();
    initAutoCatalogue();
    initMenu();
    initForm();
    bindWhatsApp(document);
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  });
})();
