/**
 * AgroGrains Wholesale - Core JavaScript
 * Handles Theme (Light/Dark), Layout Direction (RTL/LTR), Sticky Nav, Modals, and Active Navigation Links
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirection();
  initNavbar();
  initActiveNavLink();
  initGlobalQuoteModal();
});

/* --- Theme Management (Light / Dark) --- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeBtn = document.getElementById('theme-toggle-btn-mobile');
  const storedTheme = localStorage.getItem('agrograins_theme') || 'light';
  
  applyTheme(storedTheme);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('agrograins_theme', newTheme);
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', toggleTheme);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeBtn = document.getElementById('theme-toggle-btn-mobile');
  
  const iconHtml = theme === 'dark' 
    ? '<i class="bi bi-sun-fill text-warning fs-5"></i>' 
    : '<i class="bi bi-moon-stars-fill fs-5"></i>';

  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = iconHtml;
    themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }
  if (mobileThemeBtn) {
    mobileThemeBtn.innerHTML = iconHtml;
    mobileThemeBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }
}

/* --- RTL / LTR Direction Management --- */
function initDirection() {
  const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
  const mobileRtlBtn = document.getElementById('rtl-toggle-btn-mobile');
  const urlDir = new URLSearchParams(window.location.search).get('dir');
  const storedDir = (urlDir === 'rtl' || urlDir === 'ltr') ? urlDir : (localStorage.getItem('agrograins_dir') || 'ltr');

  applyDirection(storedDir);

  const toggleDirection = () => {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(newDir);
    localStorage.setItem('agrograins_dir', newDir);
  };

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', toggleDirection);
  }
  if (mobileRtlBtn) {
    mobileRtlBtn.addEventListener('click', toggleDirection);
  }
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
  
  const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
  const mobileRtlBtn = document.getElementById('rtl-toggle-btn-mobile');
  const bootstrapCss = document.getElementById('bootstrap-css');

  // Toggle bootstrap RTL stylesheet if available
  if (bootstrapCss) {
    if (dir === 'rtl') {
      bootstrapCss.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css');
    } else {
      bootstrapCss.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
    }
  }

  // Set explicit dir on all form controls for full user-agent placeholder compatibility
  document.querySelectorAll('input, textarea, select').forEach(el => {
    if (dir === 'rtl') {
      el.setAttribute('dir', 'rtl');
    } else {
      el.removeAttribute('dir');
    }
  });

  // RTL/LTR toggle: show only text name (no 3-line icon)
  const dirHtml = dir === 'rtl' ? '<span class="fw-bold">LTR</span>' : '<span class="fw-bold">RTL</span>';

  if (rtlToggleBtn) {
    rtlToggleBtn.innerHTML = dirHtml;
    rtlToggleBtn.setAttribute('title', dir === 'rtl' ? 'Switch to Left-to-Right' : 'Switch to Right-to-Left');
  }
  if (mobileRtlBtn) {
    mobileRtlBtn.innerHTML = dirHtml;
    mobileRtlBtn.setAttribute('title', dir === 'rtl' ? 'Switch to Left-to-Right' : 'Switch to Right-to-Left');
  }
}

/* --- Sticky Navbar & Scroll Effects --- */
function initNavbar() {
  const navbar = document.querySelector('.wholesale-navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Auto-close mobile navbar drawer when clicking a navigation link or quote button
  const navCollapse = document.getElementById('wholesaleNavDropdown');
  if (navCollapse) {
    const clickableLinks = navCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item, .nav-quote-btn');
    clickableLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse, { toggle: false });
          bsCollapse.hide();
        }
      });
    });
  }
}

/* --- Auto Active Nav Link Detection with Home Dropdown --- */
function initActiveNavLink() {
  let currentPath = window.location.pathname.split('/').pop();
  if (!currentPath || currentPath === '') {
    currentPath = 'index.html';
  }

  const homeDropdown = document.getElementById('homeDropdown');
  const homeItem1 = document.getElementById('nav-home-1');
  const homeItem2 = document.getElementById('nav-home-2');

  // Reset dropdown active states
  if (homeDropdown) homeDropdown.classList.remove('active');
  if (homeItem1) homeItem1.classList.remove('active');
  if (homeItem2) homeItem2.classList.remove('active');

  if (currentPath === 'index.html') {
    if (homeDropdown) homeDropdown.classList.add('active');
    if (homeItem1) homeItem1.classList.add('active');
  } else if (currentPath === 'home-2.html') {
    if (homeDropdown) homeDropdown.classList.add('active');
    if (homeItem2) homeItem2.classList.add('active');
  } else {
    // Normal links
    const directLinks = document.querySelectorAll('.navbar-nav > .nav-item > .nav-link:not(.dropdown-toggle)');
    directLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }
}

/* --- Global Quote Modal Helpers --- */
function initGlobalQuoteModal() {
  window.openQuoteModal = function(productName = '') {
    const quoteModalEl = document.getElementById('globalQuoteModal');
    if (!quoteModalEl) {
      window.location.href = `bulk-pricing.html${productName ? '?product=' + encodeURIComponent(productName) : ''}#quote-form`;
      return;
    }

    if (productName) {
      const productSelect = quoteModalEl.querySelector('#modalQuoteProduct');
      if (productSelect) {
        productSelect.value = productName;
      }
    }

    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    quoteModalEl.querySelectorAll('input, textarea, select').forEach(el => {
      if (currentDir === 'rtl') {
        el.setAttribute('dir', 'rtl');
      } else {
        el.removeAttribute('dir');
      }
    });

    const modal = bootstrap.Modal.getOrCreateInstance(quoteModalEl);
    modal.show();
  };
}

/* --- Global Privacy Policy & Terms of Service Modals --- */
window.openPrivacyModal = function() {
  let modalEl = document.getElementById('globalPrivacyModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'globalPrivacyModal';
    modalEl.className = 'modal fade';
    modalEl.tabIndex = -1;
    modalEl.setAttribute('aria-labelledby', 'privacyModalTitle');
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="privacyModalTitle"><i class="bi bi-shield-check text-success me-2"></i>AgroGrains Wholesale – Privacy Policy</h5>
            <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 small" style="line-height: 1.7;">
            <p class="text-muted"><strong>Effective Date:</strong> January 1, 2026 | B2B Commercial Compliance</p>
            <h6 class="fw-bold mt-3">1. Information We Collect</h6>
            <p>AgroGrains Wholesale Merchant collects corporate, representative, and commercial trading information necessary to process wholesale procurement orders, issue commercial proforma invoices, coordinate phytosanitary inspections, and generate bill-of-lading documents. This includes registered company name, corporate tax IDs (GST/VAT/EORI), representative contact details, billing/delivery port addresses, and banking Letter of Credit coordinates.</p>
            <h6 class="fw-bold mt-3">2. Use of Commercial Data</h6>
            <p>Data provided through quotation forms or commercial desks is strictly utilized for: (a) formulating firm mill-gate quotations; (b) scheduling multi-axle freight truck dispatch and maritime container booking; (c) compliance with mandatory export customs and phytosanitary registries; (d) transactional client communication regarding daily mandi rate fluctuations.</p>
            <h6 class="fw-bold mt-3">3. Data Protection & Confidentiality</h6>
            <p>We treat all pricing contracts, forward price locks, and annual allocation agreements as confidential commercial assets. We never sell, lease, or distribute wholesale buyer coordinates to retail marketers or third-party brokers.</p>
            <h6 class="fw-bold mt-3">4. Cookies & Analytical Metrics</h6>
            <p>Our website utilizes essential session cookies and local storage tokens solely to maintain user interface preferences such as Dark Mode, Right-to-Left (RTL) reading view, and wholesale metric calculator states.</p>
            <h6 class="fw-bold mt-3">5. Inquiries & Contact</h6>
            <p>For data inquiries or to update registered company procurement contacts, email our compliance officer at <a href="mailto:trade@agrograins-wholesale.com" class="text-primary fw-bold">trade@agrograins-wholesale.com</a>.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary rounded-pill px-4" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalEl);
  }
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
};

window.openTermsModal = function() {
  let modalEl = document.getElementById('globalTermsModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'globalTermsModal';
    modalEl.className = 'modal fade';
    modalEl.tabIndex = -1;
    modalEl.setAttribute('aria-labelledby', 'termsModalTitle');
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="termsModalTitle"><i class="bi bi-file-text text-primary me-2"></i>AgroGrains Wholesale – Commercial Terms of Service</h5>
            <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 small" style="line-height: 1.7;">
            <p class="text-muted"><strong>Last Updated:</strong> January 2026 | Commercial Grain Trading Code</p>
            <h6 class="fw-bold mt-3">1. Scope of Commercial Trading</h6>
            <p>AgroGrains operates exclusively as an institutional B2B wholesale grain merchant and direct mill processor. We do not provide retail counter sales, individual grocery shopping, or sub-commercial pack dispatches. All orders are subject to a strict Minimum Order Quantity (MOQ) of 1 Metric Ton (20 bags of 50kg or 40 bags of 25kg).</p>
            <h6 class="fw-bold mt-3">2. Indicative Benchmarks & Firm Price Confirmation</h6>
            <p>Published benchmark figures on this website are sample market indicators reflecting recent mandi and mill arrivals. Actual firm contracts are executed strictly via official proforma invoice indicating current moisture content, Sortex purity standard, and delivery Incoterms (Ex-Mill, FOB Port Mundra/JNPT, or CIF destination port).</p>
            <h6 class="fw-bold mt-3">3. Quality Inspection & Pre-Shipment Clearance</h6>
            <p>All grain shipments are accompanied by official batch quality certificates verifying moisture percentage, broken kernel allowance, and optical color sorting. Buyers may designate independent accredited testing agencies (SGS, Bureau Veritas, Cotecna) for terminal pre-shipment sampling prior to final container sealing.</p>
            <h6 class="fw-bold mt-3">4. Commercial Payment Terms</h6>
            <p>Accepted commercial payment instruments comprise: (a) 100% Irrevocable Documentary Letter of Credit (L/C at Sight) issued by a prime international commercial bank; (b) Advance RTGS/SWIFT wire transfer; (c) Structured 30/60-day usance agreements for verified long-standing institutional partners.</p>
            <h6 class="fw-bold mt-3">5. Force Majeure & Agricultural Market Volatility</h6>
            <p>Fulfillment schedules are subject to standard international Grain and Feed Trade Association (GAFTA) force majeure clauses concerning extreme climatic events, export embargoes, and maritime port strikes.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-wholesale-primary px-4" data-bs-dismiss="modal">Acknowledge Terms</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalEl);
  }
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
};
