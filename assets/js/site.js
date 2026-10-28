(function () {
  const root = document.body.getAttribute("data-root") || "";
  const page = document.body.getAttribute("data-page") || "";
  const active = page === "betano" || page === "ejjabet" ? "reviews" : page;

  const nav = [
    ["home", "index.html", "home"],
    ["reviews", "reviews.html", "reviews"],
    ["about", "about.html", "about"],
    ["faq", "faq.html", "faq"],
    ["safer", "responsible-gaming.html", "safer-gambling"],
    ["contact", "contact.html", "contact"],
  ];

  const href = (path) => root + path;

  const navLinks = nav
    .map(([id, path, label]) => {
      const current = id === active ? ' aria-current="page"' : "";
      return `<li><a href="${href(path)}"${current}>${label}</a></li>`;
    })
    .join("");

  const top = document.getElementById("chrome-top");
  const bottom = document.getElementById("chrome-bottom");

  if (top) {
    top.innerHTML = `
      <a class="skip" href="#main">Skip to content</a>
      <div class="disclose">
        <div class="disclose-inner">
          <span class="pill">AFFILIATE DISCLOSURE</span>
          <p>Some "Visit" buttons are commercial links. If you join through one, UK Review Desk may earn a commission at no extra cost to you. That never changes a score. <a href="${href("disclosure.html")}">Read the disclosure</a>.</p>
        </div>
      </div>
      <div class="agebar">
        <div class="age-inner">
          <span class="age-badge">18+</span>
          <p>Strictly 18+. Gambling can mean losing money. Never stake cash you cannot afford to lose. Free, confidential help: <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">BeGambleAware.org</a> · 0808 8020 133.</p>
        </div>
      </div>
      <header class="site-header">
        <div class="header-inner">
          <a class="logo" href="${href("index.html")}">
            <span class="logo-name">ukreviewdesk<span>.co.uk</span></span>
            <span class="logo-sub">Independent casino reviews · est. 2026</span>
          </a>
          <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
        </div>
        <nav id="site-nav" class="nav-panel">
          <ul>${navLinks}</ul>
        </nav>
      </header>`;
  }

  if (bottom) {
    bottom.innerHTML = `
      <footer class="site-footer">
        <div class="wrap foot-grid">
          <div>
            <a class="logo" href="${href("index.html")}">
              <span class="logo-name">ukreviewdesk<span>.co.uk</span></span>
              <span class="logo-sub">Independent casino reviews · est. 2026</span>
            </a>
            <p class="addr">Independent editorial notes on two Great Britain-facing casino brands. UK Review Desk is not an operator, takes no deposits and offers nothing to wager.</p>
            <p class="addr">18+ · Adults only · Written for readers in Great Britain.</p>
          </div>
          <div>
            <h2>Reviews</h2>
            <ul>
              <li><a href="${href("reviews.html")}">All reviews</a></li>
              <li><a href="${href("reviews/betano.html")}">Betano review</a></li>
              <li><a href="${href("reviews/ejjabet.html")}">Ejjabet review</a></li>
            </ul>
          </div>
          <div>
            <h2>Desk</h2>
            <ul>
              <li><a href="${href("about.html")}">About</a></li>
              <li><a href="${href("contact.html")}">Contact</a></li>
              <li><a href="${href("faq.html")}">FAQ</a></li>
              <li><a href="${href("responsible-gaming.html")}">Safer gambling</a></li>
            </ul>
          </div>
          <div>
            <h2>Legal</h2>
            <ul>
              <li><a href="${href("terms.html")}">Terms of use</a></li>
              <li><a href="${href("privacy.html")}">Privacy</a></li>
              <li><a href="${href("cookie-policy.html")}">Cookie policy</a></li>
              <li><a href="${href("disclosure.html")}">Disclosure</a></li>
              <li><button type="button" class="btn-link" id="cookie-reopen">Cookie preferences</button></li>
            </ul>
            <p class="addr"><a href="mailto:hello@ukreviewdesk.co.uk">hello@ukreviewdesk.co.uk</a><br>Mon–Fri, 09:00–17:30 UK</p>
          </div>
        </div>
        <div class="wrap legal">
          <nav aria-label="Legal">
            <a href="${href("terms.html")}">Terms</a>
            <a href="${href("privacy.html")}">Privacy</a>
            <a href="${href("cookie-policy.html")}">Cookies</a>
            <a href="${href("disclosure.html")}">Disclosure</a>
            <a href="${href("responsible-gaming.html")}">Safer gambling</a>
          </nav>
          <p><strong>Gambling can become hard to stop. Please keep it in bounds.</strong> You must be 18 or over to gamble in Great Britain. Only stake money set aside for entertainment, and never chase a loss. Both brands covered here appear on the UK Gambling Commission public register. If gambling has stopped feeling optional, call <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">BeGambleAware on 0808 8020 133</a> — free, confidential, 24 hours — or register with <a href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer">GamStop</a>.</p>
          <p>Advertising: some outbound links are commercial affiliate links. A commission may be paid if you register. It does not change a score or a ranking. Brand names are used for identification and belong to their owners. Register facts were read from the public register on 27 October 2026 and can change — confirm them yourself before you deposit.</p>
          <p>© 2026 UK Review Desk. Editorial desk · United Kingdom.</p>
        </div>
      </footer>
      <aside class="cookie" id="cookie-bar" hidden>
        <div class="cookie-inner">
          <h2>Cookie choices</h2>
          <p>This preview stores a single preference in your browser so the banner can stay dismissed. No advertising profile is built, and no analytics tag is loaded.</p>
          <p>Reject leaves every page usable. You can reopen this from the footer.</p>
          <div class="actions">
            <button class="btn btn-primary" type="button" id="cookie-accept">Accept</button>
            <button class="btn btn-ghost" type="button" id="cookie-reject">Reject optional</button>
            <button class="btn btn-ghost" type="button" id="cookie-manage">Manage</button>
          </div>
          <div class="manage" id="cookie-manage-panel">
            <p><b>Necessary.</b> A local preference flag so we do not repeat this question.</p>
            <p><b>Optional analytics.</b> Not installed on this build. Accepting does not add a tracker.</p>
            <p>See the <a href="${href("cookie-policy.html")}">cookie policy</a> and <a href="${href("privacy.html")}">privacy note</a>.</p>
          </div>
        </div>
      </aside>`;
  }

  const menuBtn = document.querySelector(".menu-btn");
  const navPanel = document.getElementById("site-nav");
  const header = document.querySelector(".site-header");
  if (menuBtn && navPanel && header) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", open ? "false" : "true");
      header.classList.toggle("is-open", !open);
    });
  }

  document.querySelectorAll(".faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      const mark = btn.querySelector(".mark");
      if (mark) mark.textContent = open ? "–" : "+";
    });
  });

  const bar = document.getElementById("cookie-bar");
  const key = "ukreviewdesk-consent";
  const showBar = () => {
    if (bar) bar.hidden = false;
  };
  if (bar && !localStorage.getItem(key)) showBar();

  const save = (value) => {
    localStorage.setItem(key, value);
    if (bar) bar.hidden = true;
  };
  document.getElementById("cookie-accept")?.addEventListener("click", () => save("accept"));
  document.getElementById("cookie-reject")?.addEventListener("click", () => save("reject"));
  document.getElementById("cookie-manage")?.addEventListener("click", () => {
    bar?.classList.toggle("manage-open");
  });
  document.getElementById("cookie-reopen")?.addEventListener("click", () => {
    localStorage.removeItem(key);
    showBar();
    bar?.scrollIntoView({ block: "end" });
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const email = String(data.get("email") || "");
      const message = String(data.get("message") || "").trim();
      if (!email.includes("@") || message.length < 8) {
        const err = document.getElementById("form-error");
        if (err) err.hidden = false;
        return;
      }
      form.hidden = true;
      const ok = document.getElementById("form-ok");
      if (ok) ok.hidden = false;
    });
  }
})();
