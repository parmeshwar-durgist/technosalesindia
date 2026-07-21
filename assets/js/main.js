/**
 * Techno Sales India - Main JavaScript
 * Handles custom animations, sticky headers, overlays, product filter grids, and library initializations.
 */

document.addEventListener('DOMContentLoaded', function () {
  // --- 1. Instant Preloader Fadeout ---
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.visibility = 'hidden';
    }, 150);
  }

  // --- 2. Scroll-based Events ---
  const navbar = document.querySelector('.main-navbar');
  const backToTop = document.querySelector('.btn-back-to-top');
  const scrollProgress = document.querySelector('.scroll-progress');
  const stickyInquiryBar = document.querySelector('.sticky-inquiry-bar');

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Scroll progress bar
    if (scrollProgress && docHeight > 0) {
      const scrolled = (scrollY / docHeight) * 100;
      scrollProgress.style.width = scrolled + '%';
    }

    // Sticky Navbar
    if (navbar) {
      if (scrollY > 150) {
        navbar.classList.add('sticky-nav');
      } else {
        navbar.classList.remove('sticky-nav');
      }
    }

    // Back to top button
    if (backToTop) {
      if (scrollY > 500) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }

    // Sticky Inquiry Bar (for Product Details page)
    if (stickyInquiryBar) {
      if (scrollY > 600) {
        stickyInquiryBar.classList.add('show');
      } else {
        stickyInquiryBar.classList.remove('show');
      }
    }
  });

  // Smooth Scroll back to top
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 3. Search Popup Overlay ---
  const searchTriggers = document.querySelectorAll('.search-trigger');
  const searchPopup = document.querySelector('.search-popup');
  const searchClose = document.querySelector('.search-popup-close');

  if (searchPopup) {
    searchTriggers.forEach(trigger => {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        searchPopup.classList.add('active');
        const input = searchPopup.querySelector('.search-popup-input');
        if (input) setTimeout(() => input.focus(), 300);
      });
    });

    if (searchClose) {
      searchClose.addEventListener('click', function () {
        searchPopup.classList.remove('active');
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && searchPopup.classList.contains('active')) {
        searchPopup.classList.remove('active');
      }
    });
  }

  // --- 4. Interactive Counter Stats ---
  const counters = document.querySelectorAll('.counter-num');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute('data-target');
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          
          let count = 0;
          const duration = 2000; // 2 seconds duration
          const increment = target / (duration / 16); // ~60fps

          const updateCounter = () => {
            count += increment;
            if (count < target) {
              counter.innerText = prefix + Math.ceil(count) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = prefix + target + suffix;
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  // --- 5. Form Validations (Contact, Inquiry, Newsletter) ---
  const validatedForms = document.querySelectorAll('.needs-validation');
  validatedForms.forEach(form => {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        // Custom elegant success display (without reloading)
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
        
        setTimeout(() => {
          submitBtn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Sent Successfully!';
          submitBtn.classList.remove('btn-orange');
          submitBtn.classList.add('btn-success');
          form.reset();
          form.classList.remove('was-validated');
          
          // Revert button after 3 seconds
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-success');
            submitBtn.classList.add('btn-orange');
          }, 3000);
        }, 1500);
      }
      form.classList.add('was-validated');
    }, false);
  });

  // --- 6. Libraries Initialization (AOS, Swiper, Lightbox) ---
  // AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // Swiper Slider: Hero
  if (document.querySelector('.hero-slider-swiper')) {
    new Swiper('.hero-slider-swiper', {
      loop: true,
      speed: 1000,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  // Swiper Slider: Featured Products
  if (document.querySelector('.featured-products-swiper')) {
    new Swiper('.featured-products-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 25 },
        1200: { slidesPerView: 4, spaceBetween: 30 }
      },
      navigation: {
        nextEl: '.featured-next',
        prevEl: '.featured-prev',
      },
    });
  }

  // Swiper Slider: Testimonials
  if (document.querySelector('.testimonials-swiper')) {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 30 }
      },
      pagination: {
        el: '.testimonials-pagination',
        clickable: true,
      },
    });
  }

  // Swiper Slider: Factory/Office Gallery (About Page)
  if (document.querySelector('.infra-swiper')) {
    new Swiper('.infra-swiper', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      autoplay: {
        delay: 3500,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      },
      pagination: {
        el: '.infra-pagination',
        clickable: true,
      }
    });
  }

  // Swiper Slider: Brand Carousel
  if (document.querySelector('.brand-swiper')) {
    new Swiper('.brand-swiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 30 },
        1024: { slidesPerView: 6, spaceBetween: 40 }
      }
    });
  }

  // GLightbox (Gallery & Lightbox)
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox'
    });
  }

  // --- 7. Live Products Filtering (Products & Portfolio) ---
  const gridToggle = document.getElementById('grid-view-btn');
  const listToggle = document.getElementById('list-view-btn');
  const productsContainer = document.getElementById('products-grid-container');

  if (productsContainer) {
    // Grid vs List View toggle
    if (gridToggle && listToggle) {
      gridToggle.addEventListener('click', function () {
        productsContainer.classList.remove('list-view');
        gridToggle.classList.add('active');
        listToggle.classList.remove('active');
      });
      listToggle.addEventListener('click', function () {
        productsContainer.classList.add('list-view');
        listToggle.classList.add('active');
        gridToggle.classList.remove('active');
      });
    }

    // Dynamic B2B Catalogue Loader
    if (typeof PRODUCTS_DB !== 'undefined') {
      const searchInput = document.getElementById('product-search-input');
      const sortSelect = document.getElementById('product-sort-select');
      const noResultsMsg = document.getElementById('no-products-msg');
      const filterLinks = document.querySelectorAll('.filter-sidebar .filter-list a');

      // Parse URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      let activeCategory = urlParams.get('cat') || 'all';
      let searchQuery = (urlParams.get('q') || urlParams.get('search') || '').trim().toLowerCase();

      // Sync active state in sidebar filters
      filterLinks.forEach(link => {
        const filterVal = link.getAttribute('data-filter');
        if (filterVal === activeCategory) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // Update sidebar counts
      const updateSidebarCounts = () => {
        filterLinks.forEach(link => {
          const cat = link.getAttribute('data-filter');
          const span = link.querySelector('span');
          if (!span) return;
          if (cat === 'all') {
            span.textContent = PRODUCTS_DB.length;
          } else {
            const count = PRODUCTS_DB.filter(p => p.category === cat).length;
            span.textContent = count;
          }
        });
      };
      updateSidebarCounts();

      // Pre-fill search input if query parameter exists
      if (searchQuery && searchInput) {
        searchInput.value = searchQuery;
      }

      // Dynamic Render Function
      const renderProducts = () => {
        productsContainer.innerHTML = '';
        
        let filtered = PRODUCTS_DB.filter(product => {
          const matchesCategory = (activeCategory === 'all' || product.category === activeCategory);
          const matchesSearch = (!searchQuery || 
            product.name.toLowerCase().includes(searchQuery) ||
            product.desc.toLowerCase().includes(searchQuery) ||
            product.categoryName.toLowerCase().includes(searchQuery) ||
            product.features.some(f => f.toLowerCase().includes(searchQuery)) ||
            product.applications.some(a => a.toLowerCase().includes(searchQuery))
          );
          return matchesCategory && matchesSearch;
        });

        const sortBy = sortSelect ? sortSelect.value : 'default';
        if (sortBy === 'name-asc') {
          filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'name-desc') {
          filtered.sort((a, b) => b.name.localeCompare(a.name));
        }

        if (filtered.length === 0) {
          if (noResultsMsg) noResultsMsg.style.display = 'block';
        } else {
          if (noResultsMsg) noResultsMsg.style.display = 'none';
          
          filtered.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4 product-card-wrapper';
            col.setAttribute('data-category', product.category);
            col.setAttribute('data-name', product.name);

            const featuresStr = product.features.slice(0, 2).join(' | ');
            const appsStr = product.applications.slice(0, 2).join(', ');

            col.innerHTML = `
              <div class="product-item-card" data-aos="fade-up">
                <a href="product-details.html?p=${product.slug}" class="product-item-img-link">
                  <div class="product-item-img">
                    <img src="${product.image}" alt="${product.name}">
                  </div>
                </a>
                <div class="product-item-content">
                  <div class="product-item-cat">${product.categoryName}</div>
                  <h4 class="product-item-title"><a href="product-details.html?p=${product.slug}">${product.name}</a></h4>
                  <p class="product-item-desc">${product.desc}</p>
                  <div class="small mb-3 text-muted">
                    <strong>Applications:</strong> ${appsStr}<br>
                    <strong>Features:</strong> ${featuresStr}
                  </div>
                  <div class="product-item-actions">
                    <a href="product-details.html?p=${product.slug}" class="btn btn-outline-dark btn-sm">Details</a>
                    <button class="btn btn-orange btn-sm" data-bs-toggle="modal" data-bs-target="#quoteModal">Inquire</button>
                  </div>
                </div>
              </div>
            `;
            productsContainer.appendChild(col);
          });
        }

        if (window.AOS) {
          AOS.refresh();
        }
      };

      // Search input binding
      if (searchInput) {
        searchInput.addEventListener('input', function () {
          searchQuery = this.value.toLowerCase().trim();
          renderProducts();
        });
      }

      // Sort select binding
      if (sortSelect) {
        sortSelect.addEventListener('change', renderProducts);
      }

      // Sidebar filter links binding
      filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          filterLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
          activeCategory = this.getAttribute('data-filter');
          
          // Update URL without refresh
          const newUrl = new URL(window.location);
          if (activeCategory === 'all') {
            newUrl.searchParams.delete('cat');
          } else {
            newUrl.searchParams.set('cat', activeCategory);
          }
          window.history.pushState({}, '', newUrl);

          renderProducts();
        });
      });

      // Initial call
      renderProducts();
    }
  }

  // --- 8. Portfolio Filtering & Pagination ---
  const portfolioGrid = document.getElementById('portfolio-grid');
  const portfolioFilters = document.querySelectorAll('.portfolio-filter-btn');
  const paginationUl = document.querySelector('.pagination');

  if (portfolioGrid && portfolioFilters.length > 0) {
    const itemsPerPage = 2;
    let currentPage = 1;
    let currentFilter = 'all';

    function updatePortfolio() {
      const items = portfolioGrid.querySelectorAll('.portfolio-item-col');
      
      // 1. Filter items by category
      const filteredItems = [];
      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (currentFilter === 'all' || cat === currentFilter) {
          filteredItems.push(item);
        } else {
          item.style.display = 'none';
        }
      });

      // 2. Calculate pagination
      const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      // 3. Show items for current page, hide others
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      filteredItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // 4. Render Pagination Controls
      if (paginationUl) {
        paginationUl.innerHTML = '';

        // Previous button
        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        prevLi.innerHTML = `<a class="page-link" href="#" ${currentPage === 1 ? 'tabindex="-1" aria-disabled="true"' : ''}>Previous</a>`;
        prevLi.addEventListener('click', function (e) {
          e.preventDefault();
          if (currentPage > 1) {
            currentPage--;
            updatePortfolio();
            scrollToGrid();
          }
        });
        paginationUl.appendChild(prevLi);

        // Page number buttons
        for (let i = 1; i <= totalPages; i++) {
          const pageLi = document.createElement('li');
          pageLi.className = `page-item ${currentPage === i ? 'active' : ''}`;
          if (currentPage === i) {
            pageLi.setAttribute('aria-current', 'page');
          }
          pageLi.innerHTML = `<a class="page-link" href="#">${i}</a>`;
          pageLi.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = i;
            updatePortfolio();
            scrollToGrid();
          });
          paginationUl.appendChild(pageLi);
        }

        // Next button
        const nextLi = document.createElement('li');
        nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        nextLi.innerHTML = `<a class="page-link" href="#" ${currentPage === totalPages ? 'tabindex="-1" aria-disabled="true"' : ''}>Next</a>`;
        nextLi.addEventListener('click', function (e) {
          e.preventDefault();
          if (currentPage < totalPages) {
            currentPage++;
            updatePortfolio();
            scrollToGrid();
          }
        });
        paginationUl.appendChild(nextLi);
      }
    }

    function scrollToGrid() {
      const rect = portfolioGrid.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - 100,
        behavior: 'smooth'
      });
    }

    // Filter Buttons Listeners
    portfolioFilters.forEach(button => {
      button.addEventListener('click', function () {
        portfolioFilters.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        currentFilter = this.getAttribute('data-filter');
        currentPage = 1; // Reset to page 1 on filter change
        updatePortfolio();
      });
    });

    // Initial load
    updatePortfolio();
  }

  // --- 9. Image Zoom & Thumbnails (Product Details Page) ---
  const mainImage = document.getElementById('product-main-image');
  const thumbItems = document.querySelectorAll('.thumb-item');

  if (thumbItems.length > 0 && mainImage) {
    thumbItems.forEach(thumb => {
      thumb.addEventListener('click', function () {
        thumbItems.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const newSrc = this.getAttribute('data-large');
        mainImage.setAttribute('src', newSrc);
        
        // Also update parent link if glightbox is enabled
        const parentLink = mainImage.parentElement;
        if (parentLink && parentLink.classList.contains('glightbox')) {
          parentLink.setAttribute('href', newSrc);
          // Re-init GLightbox to pick up change
          GLightbox({ selector: '.glightbox' });
        }
      });
    });
  }

  // --- 10. Navbar Dropdown Click Override (Navigate directly on desktop / second click on mobile) ---
  const dropdownToggleLinks = document.querySelectorAll('.main-navbar .nav-item.dropdown > .dropdown-toggle');
  dropdownToggleLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && href !== 'javascript:void(0);') {
        if (window.innerWidth >= 992) {
          // On desktop, navigate directly on first click
          e.preventDefault();
          window.location.href = href;
        } else {
          // On mobile, if dropdown is already open, navigate on next click
          const parent = this.parentElement;
          if (parent && parent.classList.contains('show')) {
            e.preventDefault();
            window.location.href = href;
          }
        }
      }
    });
  });
});
