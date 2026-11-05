/**
 * AgroGrains Wholesale - Pricing & Bulk Calculator Engine
 * Handles interactive bulk volume estimates, sack count conversion, and quotation binding
 */

document.addEventListener('DOMContentLoaded', () => {
  initBulkCalculator();
  checkUrlParamsForQuote();
});

function initBulkCalculator() {
  const calcForm = document.getElementById('bulk-calculator-form');
  if (!calcForm) return;

  const tonnageInput = document.getElementById('calc-tonnage');
  const bagSizeSelect = document.getElementById('calc-bag-size');
  const productSelect = document.getElementById('calc-product');
  
  const displaySacks = document.getElementById('calc-display-sacks');
  const displayTier = document.getElementById('calc-display-tier');
  const displayDiscount = document.getElementById('calc-display-discount');
  const displayLeadTime = document.getElementById('calc-display-leadtime');
  const applyBtn = document.getElementById('calc-apply-quote-btn');

  function calculate() {
    const tons = parseFloat(tonnageInput.value) || 1;
    const bagKg = parseInt(bagSizeSelect.value) || 50;

    // Sacks calculation: 1 MT = 1,000 kg
    const totalKg = tons * 1000;
    const totalSacks = Math.ceil(totalKg / bagKg);

    let tierName = "Tier 1: Commercial Bulk";
    let discountEst = "Standard Wholesale Rate";
    let leadTime = "24 - 48 Hours Dispatch";

    if (tons >= 25) {
      tierName = "Tier 3: Institutional / Container Rake";
      discountEst = "High-Volume Advantage (Est. 8 - 14% vs Base)";
      leadTime = "4 - 7 Business Days (Multi-trailer schedule)";
    } else if (tons >= 5) {
      tierName = "Tier 2: Truckload / Regional Distribution";
      discountEst = "Truckload Advantage (Est. 4 - 7% vs Base)";
      leadTime = "48 - 72 Hours Dispatch";
    }

    if (displaySacks) displaySacks.textContent = totalSacks.toLocaleString() + ` Bags (${bagKg} kg)`;
    if (displayTier) displayTier.textContent = tierName;
    if (displayDiscount) displayDiscount.textContent = discountEst;
    if (displayLeadTime) displayLeadTime.textContent = leadTime;
  }

  [tonnageInput, bagSizeSelect, productSelect].forEach(el => {
    if (el) {
      el.addEventListener('input', calculate);
      el.addEventListener('change', calculate);
    }
  });

  calculate();

  // Apply to quotation form on the same page
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const targetForm = document.getElementById('bulk-quote-form');
      if (!targetForm) return;

      const formProduct = document.getElementById('quote-product');
      const formQty = document.getElementById('quote-quantity');
      const formPackaging = document.getElementById('quote-packaging');

      if (formProduct && productSelect) {
        formProduct.value = productSelect.value;
      }
      if (formQty && tonnageInput) {
        formQty.value = `${tonnageInput.value} Metric Tons (${bagSizeSelect.options[bagSizeSelect.selectedIndex].text})`;
      }
      if (formPackaging && bagSizeSelect) {
        formPackaging.value = bagSizeSelect.options[bagSizeSelect.selectedIndex].text;
      }

      targetForm.scrollIntoView({ behavior: 'smooth' });
      targetForm.classList.add('border-primary');
      setTimeout(() => targetForm.classList.remove('border-primary'), 1500);
    });
  }
}

function checkUrlParamsForQuote() {
  const urlParams = new URLSearchParams(window.location.search);
  const productParam = urlParams.get('product');
  if (productParam) {
    const productField = document.getElementById('quote-product');
    if (productField) {
      productField.value = productParam;
    }
    const modalProductField = document.getElementById('modalQuoteProduct');
    if (modalProductField) {
      modalProductField.value = productParam;
    }
  }
}

