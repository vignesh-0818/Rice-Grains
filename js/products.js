/**
 * AgroGrains Wholesale - Products Catalog Engine
 * Comprehensive product data, multi-criteria filtering, search & modal viewer
 * Every product is assigned its own dedicated, unique image asset.
 */

const wholesaleProducts = [
  // --- Rice Varieties ---
  {
    id: "rice-basmati-1121",
    name: "1121 Steam Basmati Rice",
    category: "basmati",
    categoryLabel: "Basmati Rice",
    image: "assets/images/prod-basmati-1121.jpg",
    shortDesc: "Extra-long grain Basmati (8.35mm+) with exceptional elongation (up to 20mm cooked) and delicate sweet aroma.",
    grade: "Grade A Export / Sortex 100%",
    grainLength: "8.35 mm (Average)",
    moisture: "Max 12.5%",
    brokenPct: "Under 1.0%",
    purity: "95% Pure Basmati",
    packaging: "25kg / 50kg BOPP & Woven PP Bags, 1 MT FIBC",
    moq: "5 Metric Tons",
    samplePriceNote: "Sample Benchmark: $920 - $1,050 / MT (Indicative FOB / Ex-Mill)"
  },
  {
    id: "rice-basmati-traditional",
    name: "Traditional Aged Basmati Rice",
    category: "basmati",
    categoryLabel: "Basmati Rice",
    image: "assets/images/prod-basmati-aged.jpg",
    shortDesc: "Naturally aged for 18-24 months in temperature-controlled warehouses for fluffy separation and rich aroma.",
    grade: "Premium Royal Aged / Raw Milled",
    grainLength: "7.40 mm",
    moisture: "Max 11.8%",
    brokenPct: "Under 0.5%",
    purity: "98% Purity",
    packaging: "25kg / 50kg Woven Bags, Jute Sacks Available",
    moq: "3 Metric Tons",
    samplePriceNote: "Sample Benchmark: $1,150 - $1,320 / MT (Indicative FOB / Ex-Mill)"
  },
  {
    id: "rice-sona-masoori",
    name: "Sona Masoori Rice (Raw & Steam)",
    category: "non-basmati",
    categoryLabel: "Non-Basmati Rice",
    image: "assets/images/prod-sona-masoori.jpg",
    shortDesc: "Lightweight, aromatic medium-grain rice favored for daily consumer cooking and regional supermarket private label.",
    grade: "Sortex Clean / Silky Polish",
    grainLength: "5.10 mm",
    moisture: "Max 13.0%",
    brokenPct: "Under 2.0%",
    purity: "100% Sortexed",
    packaging: "25kg / 50kg Polypropylene & Non-Woven Bags",
    moq: "5 Metric Tons",
    samplePriceNote: "Sample Benchmark: $580 - $650 / MT (Indicative Ex-Mill)"
  },
  {
    id: "rice-ponni-boiled",
    name: "Ponni Boiled / Parboiled Rice",
    category: "non-basmati",
    categoryLabel: "Non-Basmati Rice",
    image: "assets/images/prod-ponni-boiled.jpg",
    shortDesc: "Nutrient-dense parboiled grain, high in dietary fiber with excellent volume expansion when steamed.",
    grade: "Double Boiled / Sortexed",
    grainLength: "5.40 mm",
    moisture: "Max 13.5%",
    brokenPct: "Under 2.5%",
    purity: "100% Cleaned",
    packaging: "25kg / 50kg Heavy-Duty Sacks",
    moq: "10 Metric Tons",
    samplePriceNote: "Sample Benchmark: $510 - $575 / MT (Indicative Ex-Mill)"
  },
  {
    id: "rice-idli",
    name: "South Indian Idli Rice (Short Grain)",
    category: "non-basmati",
    categoryLabel: "Non-Basmati Rice",
    image: "assets/images/prod-idli-rice.jpg",
    shortDesc: "Short, stout parboiled grain specifically processed for high-starch batter fermentation, softness, and sponge texture.",
    grade: "Batter Grade / Commercial Parboiled",
    grainLength: "4.80 mm",
    moisture: "Max 14.0%",
    brokenPct: "Under 3.0%",
    purity: "Foreign matter < 0.1%",
    packaging: "50kg Woven PP Sacks",
    moq: "5 Metric Tons",
    samplePriceNote: "Sample Benchmark: $470 - $530 / MT (Indicative Ex-Mill)"
  },
  {
    id: "rice-brown",
    name: "Premium Whole Grain Brown Rice",
    category: "specialty",
    categoryLabel: "Specialty Rice",
    image: "assets/images/prod-brown-rice.jpg",
    shortDesc: "Unpolished whole grain retaining bran layer and germ, offering nutty flavor and maximum mineral retention.",
    grade: "De-husked Sortex Cleaned",
    grainLength: "7.10 mm",
    moisture: "Max 12.0%",
    brokenPct: "Under 1.5%",
    purity: "99.5% Clean",
    packaging: "25kg Vacuum & Nitrogen Flush Bags",
    moq: "2 Metric Tons",
    samplePriceNote: "Sample Benchmark: $760 - $890 / MT (Indicative Ex-Mill)"
  },
  {
    id: "rice-raw-white",
    name: "Raw White Rice (IR64 / PR11)",
    category: "non-basmati",
    categoryLabel: "Non-Basmati Rice",
    image: "assets/images/prod-raw-white.jpg",
    shortDesc: "Economical high-volume staple rice for institutional canteens, catering companies, and bulk export markets.",
    grade: "5% Broken / 100% Sortexed",
    grainLength: "6.00 mm",
    moisture: "Max 13.5%",
    brokenPct: "5.0% Max",
    purity: "Foreign matter < 0.2%",
    packaging: "50kg Standard Woven Sacks",
    moq: "20 Metric Tons (Full Truckload)",
    samplePriceNote: "Sample Benchmark: $440 - $490 / MT (Indicative Ex-Mill)"
  },
  {
    id: "rice-boiled-single",
    name: "Single Boiled Golden Rice",
    category: "non-basmati",
    categoryLabel: "Non-Basmati Rice",
    image: "assets/images/prod-single-boiled.jpg",
    shortDesc: "Light yellow parboiled grain with quick cooking time and firm non-sticky texture, ideal for large-scale institutional foodservice.",
    grade: "Single Steamed / Color Sorter Cleaned",
    grainLength: "5.80 mm",
    moisture: "Max 13.0%",
    brokenPct: "Under 2.0%",
    purity: "99% Purity",
    packaging: "25kg / 50kg Bags",
    moq: "10 Metric Tons",
    samplePriceNote: "Sample Benchmark: $480 - $540 / MT (Indicative Ex-Mill)"
  },

  // --- Other Grains ---
  {
    id: "grain-wheat",
    name: "Milling Wheat (Sharbati & Durum)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    image: "assets/images/prod-wheat-milling.jpg",
    shortDesc: "High gluten wheat grains with optimal falling number, ideal for commercial flour mills and bakeries.",
    grade: "Milling Grade / Moisture Tested",
    grainLength: "Bold Kernel",
    moisture: "Max 11.5%",
    brokenPct: "Foreign matter < 0.5%",
    purity: "Gluten: 28% - 31%",
    packaging: "50kg Woven Sacks & Loose Hopper Bulks",
    moq: "25 Metric Tons",
    samplePriceNote: "Sample Benchmark: $310 - $360 / MT (Indicative Ex-Mill)"
  },
  {
    id: "grain-maize",
    name: "Yellow Grain Maize (Feed & Starch)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    image: "assets/images/prod-yellow-maize.jpg",
    shortDesc: "Machine-cleaned yellow corn kernels for animal feed manufacturers, corn starch refiners, and bulk exports.",
    grade: "Aflatoxin < 20 ppb / Moisture Tested",
    grainLength: "Standard Seed",
    moisture: "Max 13.0%",
    brokenPct: "Under 2.0%",
    purity: "Foreign matter < 1.0%",
    packaging: "50kg Sacks / Bulk Container Liner",
    moq: "25 Metric Tons",
    samplePriceNote: "Sample Benchmark: $260 - $295 / MT (Indicative Ex-Mill)"
  },
  {
    id: "grain-millet",
    name: "Pearl Millet (Bajra) & Finger Millet (Ragi)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    image: "assets/images/prod-millet-grains.jpg",
    shortDesc: "Drought-resilient supergrains rich in iron, calcium, and dietary fiber, clean-graded for health food producers.",
    grade: "Unpolished Machine Cleaned",
    grainLength: "Small Grain",
    moisture: "Max 11.0%",
    brokenPct: "Minimal",
    purity: "99% Sortex Purity",
    packaging: "25kg / 50kg Bags",
    moq: "5 Metric Tons",
    samplePriceNote: "Sample Benchmark: $380 - $440 / MT (Indicative Ex-Mill)"
  },

  // --- Pulses & Dals ---
  {
    id: "pulse-toor-dal",
    name: "Premium Toor Dal (Yellow Split Pigeon Peas)",
    category: "pulses",
    categoryLabel: "Pulses & Dals",
    image: "assets/images/prod-toor-dal.jpg",
    shortDesc: "Fat-free, unpolished toor dal split using modern multi-stage sortex lines for high protein retention and bright color.",
    grade: "Fatka Unpolished / Sortex Clean",
    grainLength: "Medium-Bold Split",
    moisture: "Max 10.5%",
    brokenPct: "Under 1.0%",
    purity: "Foreign matter < 0.1%",
    packaging: "25kg / 50kg BOPP Laminated Bags",
    moq: "3 Metric Tons",
    samplePriceNote: "Sample Benchmark: $1,180 - $1,340 / MT (Indicative Ex-Mill)"
  },
  {
    id: "pulse-urad-dal",
    name: "Urad Dal (Split & Whole Black Gram)",
    category: "pulses",
    categoryLabel: "Pulses & Dals",
    image: "assets/images/prod-urad-dal.jpg",
    shortDesc: "High-protein black gram and polished white split urad dal, essential for batter fermentation and industrial food products.",
    grade: "Gota / Chilka / Mogar Grade",
    grainLength: "Bold Grain",
    moisture: "Max 11.0%",
    brokenPct: "Under 1.5%",
    purity: "Sortex 99.8%",
    packaging: "25kg / 50kg Bags",
    moq: "3 Metric Tons",
    samplePriceNote: "Sample Benchmark: $1,050 - $1,210 / MT (Indicative Ex-Mill)"
  },
  {
    id: "pulse-moong-dal",
    name: "Moong Dal (Yellow Split & Whole Green)",
    category: "pulses",
    categoryLabel: "Pulses & Dals",
    image: "assets/images/prod-moong-dal.jpg",
    shortDesc: "Easily digestible green gram and washed yellow moong split, de-stoned and sorted for high-purity commercial packaging.",
    grade: "Washed Mogar / Whole Green Mung",
    grainLength: "Uniform Size",
    moisture: "Max 10.0%",
    brokenPct: "Under 1.0%",
    purity: "99.9% Cleaned",
    packaging: "25kg / 50kg Bags",
    moq: "3 Metric Tons",
    samplePriceNote: "Sample Benchmark: $980 - $1,120 / MT (Indicative Ex-Mill)"
  },
  {
    id: "pulse-chana-dal",
    name: "Chana Dal & Bold Kabuli Chickpeas",
    category: "pulses",
    categoryLabel: "Pulses & Dals",
    image: "assets/images/prod-chana-dal.jpg",
    shortDesc: "Premium golden split Bengal gram and large 75/80 count Kabuli chickpeas for snack manufacturing and packaging brands.",
    grade: "Sortex Cleaned / Bold 8mm+",
    grainLength: "Bold 75-80 Count",
    moisture: "Max 10.0%",
    brokenPct: "Under 0.8%",
    purity: "Sortex 100%",
    packaging: "25kg / 50kg Jute & Woven Bags",
    moq: "5 Metric Tons",
    samplePriceNote: "Sample Benchmark: $840 - $970 / MT (Indicative Ex-Mill)"
  }
];

// Initialize Product Catalog on pages that contain #product-grid
document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('product-grid');
  if (!productGrid) return;

  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('product-search');
  const clearBtn = document.getElementById('product-search-clear');

  let activeCategory = 'all';
  let searchTerm = '';
  let sortBy = 'featured';

  // Read URL query parameters for direct category or search links
  const urlParams = new URLSearchParams(window.location.search);
  const paramCategory = urlParams.get('category');
  const paramSearch = urlParams.get('search');

  if (paramCategory) {
    activeCategory = paramCategory;
    filterButtons.forEach(b => {
      if (b.getAttribute('data-category') === paramCategory) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  if (paramSearch) {
    searchTerm = paramSearch.toLowerCase().trim();
    if (searchInput) {
      searchInput.value = paramSearch;
      if (clearBtn) clearBtn.classList.remove('d-none');
    }
  }
  renderProducts();

  // Smooth scroll to catalog section if category or search query parameter is present on load
  if (paramCategory || paramSearch) {
    setTimeout(() => {
      const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
      if (catalogTarget) {
        catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 180);
  }

  // Handle footer commodity links seamlessly when already on products.html
  document.querySelectorAll('.footer-links a[href*="products.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      try {
        const url = new URL(link.href, window.location.href);
        const cat = url.searchParams.get('category');
        const search = url.searchParams.get('search');

        if (cat || search) {
          e.preventDefault();
          if (cat) {
            activeCategory = cat;
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === cat) {
                b.classList.add('active');
              } else {
                b.classList.remove('active');
              }
            });
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            if (clearBtn) clearBtn.classList.add('d-none');
          } else if (search) {
            searchTerm = search.toLowerCase().trim();
            if (searchInput) searchInput.value = search;
            if (clearBtn) clearBtn.classList.remove('d-none');
            activeCategory = 'all';
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === 'all') b.classList.add('active');
              else b.classList.remove('active');
            });
          }

          renderProducts();
          window.history.pushState({}, '', link.href);

          const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
          if (catalogTarget) {
            catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } catch (err) {
        // Fallback to standard link navigation
      }
    });
  });

  // Category filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'all';
      renderProducts();

  // Smooth scroll to catalog section if category or search query parameter is present on load
  if (paramCategory || paramSearch) {
    setTimeout(() => {
      const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
      if (catalogTarget) {
        catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 180);
  }

  // Handle footer commodity links seamlessly when already on products.html
  document.querySelectorAll('.footer-links a[href*="products.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      try {
        const url = new URL(link.href, window.location.href);
        const cat = url.searchParams.get('category');
        const search = url.searchParams.get('search');

        if (cat || search) {
          e.preventDefault();
          if (cat) {
            activeCategory = cat;
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === cat) {
                b.classList.add('active');
              } else {
                b.classList.remove('active');
              }
            });
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            if (clearBtn) clearBtn.classList.add('d-none');
          } else if (search) {
            searchTerm = search.toLowerCase().trim();
            if (searchInput) searchInput.value = search;
            if (clearBtn) clearBtn.classList.remove('d-none');
            activeCategory = 'all';
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === 'all') b.classList.add('active');
              else b.classList.remove('active');
            });
          }

          renderProducts();
          window.history.pushState({}, '', link.href);

          const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
          if (catalogTarget) {
            catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } catch (err) {
        // Fallback to standard link navigation
      }
    });
  });
    });
  });

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      if (clearBtn) {
        clearBtn.classList.toggle('d-none', !searchTerm);
      }
      renderProducts();

  // Smooth scroll to catalog section if category or search query parameter is present on load
  if (paramCategory || paramSearch) {
    setTimeout(() => {
      const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
      if (catalogTarget) {
        catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 180);
  }

  // Handle footer commodity links seamlessly when already on products.html
  document.querySelectorAll('.footer-links a[href*="products.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      try {
        const url = new URL(link.href, window.location.href);
        const cat = url.searchParams.get('category');
        const search = url.searchParams.get('search');

        if (cat || search) {
          e.preventDefault();
          if (cat) {
            activeCategory = cat;
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === cat) {
                b.classList.add('active');
              } else {
                b.classList.remove('active');
              }
            });
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            if (clearBtn) clearBtn.classList.add('d-none');
          } else if (search) {
            searchTerm = search.toLowerCase().trim();
            if (searchInput) searchInput.value = search;
            if (clearBtn) clearBtn.classList.remove('d-none');
            activeCategory = 'all';
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === 'all') b.classList.add('active');
              else b.classList.remove('active');
            });
          }

          renderProducts();
          window.history.pushState({}, '', link.href);

          const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
          if (catalogTarget) {
            catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } catch (err) {
        // Fallback to standard link navigation
      }
    });
  });
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchTerm = '';
      clearBtn.classList.add('d-none');
      renderProducts();

  // Smooth scroll to catalog section if category or search query parameter is present on load
  if (paramCategory || paramSearch) {
    setTimeout(() => {
      const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
      if (catalogTarget) {
        catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 180);
  }

  // Handle footer commodity links seamlessly when already on products.html
  document.querySelectorAll('.footer-links a[href*="products.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      try {
        const url = new URL(link.href, window.location.href);
        const cat = url.searchParams.get('category');
        const search = url.searchParams.get('search');

        if (cat || search) {
          e.preventDefault();
          if (cat) {
            activeCategory = cat;
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === cat) {
                b.classList.add('active');
              } else {
                b.classList.remove('active');
              }
            });
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            if (clearBtn) clearBtn.classList.add('d-none');
          } else if (search) {
            searchTerm = search.toLowerCase().trim();
            if (searchInput) searchInput.value = search;
            if (clearBtn) clearBtn.classList.remove('d-none');
            activeCategory = 'all';
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === 'all') b.classList.add('active');
              else b.classList.remove('active');
            });
          }

          renderProducts();
          window.history.pushState({}, '', link.href);

          const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
          if (catalogTarget) {
            catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } catch (err) {
        // Fallback to standard link navigation
      }
    });
  });
      searchInput.focus();
    });
  }

  window.resetProductSearch = function() {
    activeCategory = 'all';
    searchTerm = '';
    sortBy = 'featured';
    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.classList.add('d-none');
    const sortSelect = document.getElementById('product-sort');
    if (sortSelect) sortSelect.value = 'featured';
    filterButtons.forEach(b => {
      if (b.getAttribute('data-category') === 'all') b.classList.add('active');
      else b.classList.remove('active');
    });
    renderProducts();

  // Smooth scroll to catalog section if category or search query parameter is present on load
  if (paramCategory || paramSearch) {
    setTimeout(() => {
      const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
      if (catalogTarget) {
        catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 180);
  }

  // Handle footer commodity links seamlessly when already on products.html
  document.querySelectorAll('.footer-links a[href*="products.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      try {
        const url = new URL(link.href, window.location.href);
        const cat = url.searchParams.get('category');
        const search = url.searchParams.get('search');

        if (cat || search) {
          e.preventDefault();
          if (cat) {
            activeCategory = cat;
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === cat) {
                b.classList.add('active');
              } else {
                b.classList.remove('active');
              }
            });
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            if (clearBtn) clearBtn.classList.add('d-none');
          } else if (search) {
            searchTerm = search.toLowerCase().trim();
            if (searchInput) searchInput.value = search;
            if (clearBtn) clearBtn.classList.remove('d-none');
            activeCategory = 'all';
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === 'all') b.classList.add('active');
              else b.classList.remove('active');
            });
          }

          renderProducts();
          window.history.pushState({}, '', link.href);

          const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
          if (catalogTarget) {
            catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } catch (err) {
        // Fallback to standard link navigation
      }
    });
  });
  };

  // Sort select
  const sortSelect = document.getElementById('product-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderProducts();

  // Smooth scroll to catalog section if category or search query parameter is present on load
  if (paramCategory || paramSearch) {
    setTimeout(() => {
      const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
      if (catalogTarget) {
        catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 180);
  }

  // Handle footer commodity links seamlessly when already on products.html
  document.querySelectorAll('.footer-links a[href*="products.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      try {
        const url = new URL(link.href, window.location.href);
        const cat = url.searchParams.get('category');
        const search = url.searchParams.get('search');

        if (cat || search) {
          e.preventDefault();
          if (cat) {
            activeCategory = cat;
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === cat) {
                b.classList.add('active');
              } else {
                b.classList.remove('active');
              }
            });
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            if (clearBtn) clearBtn.classList.add('d-none');
          } else if (search) {
            searchTerm = search.toLowerCase().trim();
            if (searchInput) searchInput.value = search;
            if (clearBtn) clearBtn.classList.remove('d-none');
            activeCategory = 'all';
            filterButtons.forEach(b => {
              if (b.getAttribute('data-category') === 'all') b.classList.add('active');
              else b.classList.remove('active');
            });
          }

          renderProducts();
          window.history.pushState({}, '', link.href);

          const catalogTarget = document.getElementById('products-catalog-section') || productGrid;
          if (catalogTarget) {
            catalogTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } catch (err) {
        // Fallback to standard link navigation
      }
    });
  });
    });
  }
  function renderProducts() {
    let filtered = wholesaleProducts.filter(item => {
      const matchSearch = !searchTerm ||
                          item.name.toLowerCase().includes(searchTerm) ||
                          item.shortDesc.toLowerCase().includes(searchTerm) ||
                          item.grade.toLowerCase().includes(searchTerm) ||
                          item.categoryLabel.toLowerCase().includes(searchTerm) ||
                          (item.packaging && item.packaging.toLowerCase().includes(searchTerm)) ||
                          (item.grainLength && item.grainLength.toLowerCase().includes(searchTerm));

      const matchCategory = (activeCategory === 'all') || (item.category === activeCategory);
      return matchCategory && matchSearch;
    });

    // Smart search fallback: If active category filtered out results, search across all products
    if (filtered.length === 0 && searchTerm && activeCategory !== 'all') {
      const globalMatches = wholesaleProducts.filter(item => {
        return item.name.toLowerCase().includes(searchTerm) ||
               item.shortDesc.toLowerCase().includes(searchTerm) ||
               item.grade.toLowerCase().includes(searchTerm) ||
               item.categoryLabel.toLowerCase().includes(searchTerm) ||
               (item.packaging && item.packaging.toLowerCase().includes(searchTerm));
      });
      if (globalMatches.length > 0) {
        activeCategory = 'all';
        filterButtons.forEach(b => {
          if (b.getAttribute('data-category') === 'all') b.classList.add('active');
          else b.classList.remove('active');
        });
        filtered = globalMatches;
      }
    }

    // Sorting
    if (sortBy === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Update count indicator
    const countDisplay = document.getElementById('product-count-display');
    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} wholesale product${filtered.length !== 1 ? 's' : ''}`;
    }

    if (filtered.length === 0) {
      productGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="p-4 rounded-4 bg-surface border">
            <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
            <h4 class="mt-3">No matching wholesale grains found</h4>
            <p class="text-muted">Try adjusting your search keywords or clear the filter. Contact our commercial desk for custom contract milling.</p>
            <button class="btn btn-wholesale-secondary mt-2" onclick="resetProductSearch()">
              Reset Search &amp; Filters
            </button>
          </div>
        </div>
      `;
      return;
    }

    productGrid.innerHTML = filtered.map(item => `
      <div class="col-xl-4 col-md-6 mb-4">
        <div class="wholesale-product-card">
          <div class="product-card-img-wrapper">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <span class="product-category-badge">${item.categoryLabel}</span>
            <span class="product-moq-badge"><i class="bi bi-box-seam me-1"></i>MOQ: ${item.moq}</span>
          </div>
          <div class="product-card-body">
            <h3 class="product-card-title">${item.name}</h3>
            <p class="product-card-desc">${item.shortDesc}</p>
            
            <div class="product-specs-list">
              <div class="product-spec-row">
                <span class="product-spec-label">Grade Standard:</span>
                <span class="product-spec-value">${item.grade}</span>
              </div>
              <div class="product-spec-row">
                <span class="product-spec-label">Moisture / Broken:</span>
                <span class="product-spec-value">${item.moisture} | ${item.brokenPct}</span>
              </div>
              <div class="product-spec-row">
                <span class="product-spec-label">Packaging:</span>
                <span class="product-spec-value text-truncate" style="max-width: 170px;" title="${item.packaging}">${item.packaging}</span>
              </div>
            </div>

            <div class="product-card-footer">
              <button class="btn btn-wholesale-primary flex-grow-1" onclick="openQuoteModal('${item.name.replace(/'/g, "\\'")}')">
                <i class="bi bi-file-earmark-text"></i> Request Quote
              </button>
              <button class="btn btn-wholesale-secondary" onclick="viewProductSpecs('${item.id}')" title="Technical Specs Sheet">
                <i class="bi bi-info-circle"></i> Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Global handler for Specs Modal
  window.viewProductSpecs = function(id) {
    const item = wholesaleProducts.find(p => p.id === id);
    if (!item) return;

    const modalTitle = document.getElementById('specsModalTitle');
    const modalBody = document.getElementById('specsModalBody');
    const quoteBtn = document.getElementById('specsModalQuoteBtn');

    if (modalTitle) modalTitle.textContent = `${item.name} – Technical Specifications`;
    if (quoteBtn) {
      quoteBtn.onclick = () => {
        const specsModalEl = document.getElementById('specsModal');
        const specsModal = bootstrap.Modal.getInstance(specsModalEl);
        if (specsModal) specsModal.hide();
        openQuoteModal(item.name);
      };
    }

    if (modalBody) {
      modalBody.innerHTML = `
        <div class="row align-items-center mb-4">
          <div class="col-md-5">
            <img src="${item.image}" alt="${item.name}" class="rounded-3 w-100 shadow-sm" style="height: 180px; object-fit: cover;">
          </div>
          <div class="col-md-7">
            <div class="badge bg-primary-subtle text-primary mb-2">${item.categoryLabel}</div>
            <h5 class="fw-bold mb-2">${item.name}</h5>
            <p class="text-muted small mb-0">${item.shortDesc}</p>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table table-bordered table-striped small align-middle">
            <thead class="table-light">
              <tr>
                <th style="width: 40%;">Parameter</th>
                <th>Wholesale Export Standard / Guarantee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">Milling & Quality Grade</td>
                <td>${item.grade}</td>
              </tr>
              <tr>
                <td class="fw-bold">Average Grain Length (AGL)</td>
                <td>${item.grainLength}</td>
              </tr>
              <tr>
                <td class="fw-bold">Moisture Content</td>
                <td>${item.moisture} (Tested via digital moisture meter)</td>
              </tr>
              <tr>
                <td class="fw-bold">Broken Grain Tolerance</td>
                <td>${item.brokenPct}</td>
              </tr>
              <tr>
                <td class="fw-bold">Purity / Foreign Matter</td>
                <td>${item.purity}</td>
              </tr>
              <tr>
                <td class="fw-bold">Available Packaging</td>
                <td>${item.packaging}</td>
              </tr>
              <tr>
                <td class="fw-bold">Minimum Order Quantity (MOQ)</td>
                <td>${item.moq} (Sample courier available for verified trade buyers)</td>
              </tr>
              <tr>
                <td class="fw-bold">Indicative Benchmark Note</td>
                <td class="text-primary fw-bold">${item.samplePriceNote}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="small text-muted fst-italic mb-0">
          * Note: Actual prices fluctuate based on daily agricultural market arrivals, crop season, port handling, and contracted volume. Request official mill-gate quote for firm pricing.
        </p>
      `;
    }

    const modalEl = document.getElementById('specsModal');
    if (modalEl) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  };
});
