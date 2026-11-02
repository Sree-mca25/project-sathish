/* ============================================================
   SATHISH MEDIA — GLOBAL JS (main.js)
   Premium Multimedia Production House — All Animations
   ============================================================ */

// ─── HEADER SCROLL EFFECT ────────────────────────────────────────
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ─── HAMBURGER / MOBILE MENU ─────────────────────────────────────
(function () {
  const btn  = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    })
  );
})();

// ─── SAFE CART FALLBACKS & DEFINITIONS ────────────────────────────
if (typeof Cart === 'undefined') {
  window.Cart = {
    STORAGE_KEY: 'sathish_media_cart',
    get() {
      try {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
      } catch (e) { return []; }
    },
    save(items) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
      window.dispatchEvent(new CustomEvent('cart-updated'));
    },
    count() {
      return this.get().reduce((sum, item) => sum + (item.quantity || 1), 0);
    },
    total() {
      return this.get().reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    },
    add(product, qty = 1) {
      const items = this.get();
      const existing = items.find(i => i.id === product.id);
      if (existing) {
        existing.quantity += qty;
      } else {
        items.push({ ...product, quantity: qty });
      }
      this.save(items);
    },
    remove(productId) {
      const items = this.get().filter(i => i.id !== productId);
      this.save(items);
    },
    updateQty(productId, qty) {
      const items = this.get();
      const item = items.find(i => i.id === productId);
      if (item) {
        if (qty <= 0) return this.remove(productId);
        item.quantity = qty;
      }
      this.save(items);
    },
    clear() {
      localStorage.removeItem(this.STORAGE_KEY);
      window.dispatchEvent(new CustomEvent('cart-updated'));
    }
  };
}

if (typeof ServiceCart === 'undefined') {
  window.ServiceCart = {
    KEY: 'sathish_service_cart',
    
    get() {
      try {
        return JSON.parse(localStorage.getItem(this.KEY) || '[]');
      } catch (e) {
        return [];
      }
    },
    
    save(cart) {
      localStorage.setItem(this.KEY, JSON.stringify(cart));
      window.dispatchEvent(new CustomEvent('service-cart-updated'));
    },
    
    add(id, title, category, subcategory) {
      let cart = this.get();
      let item = cart.find(x => x.id === id);
      if (item) {
        item.quantity += 1;
      } else {
        cart.push({
          id: id,
          title: title,
          category: category,
          subcategory: subcategory || title,
          requirement: '',
          quantity: 1
        });
      }
      this.save(cart);
      if (window.showToast) {
        window.showToast('Requirement added to Service Cart! 📋', 'success');
      } else {
        alert('Requirement added to Service Cart! 📋');
      }
    },
    
    remove(id) {
      let cart = this.get();
      cart = cart.filter(x => x.id !== id);
      this.save(cart);
    },
    
    updateQuantity(id, qty) {
      let cart = this.get();
      let item = cart.find(x => x.id === id);
      if (item) {
        item.quantity = Math.max(1, parseInt(qty) || 1);
        this.save(cart);
      }
    },
    
    updateRequirement(id, text) {
      let cart = this.get();
      let item = cart.find(x => x.id === id);
      if (item) {
        item.requirement = text;
        this.save(cart);
      }
    },
    
    count() {
      return this.get().reduce((sum, x) => sum + x.quantity, 0);
    },
    
    clear() {
      this.save([]);
    }
  };
}

// ─── CART BADGE & TEXT UPDATE ────────────────────────────────────
function updateCartBadge() {
  const count = Cart.count();
  
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(b => {
    b.textContent = count > 99 ? '99+' : count;
    b.classList.toggle('visible', count > 0);
  });

  const bubbles = document.querySelectorAll('.cart-badge-bubble');
  bubbles.forEach(b => {
    b.textContent = count > 99 ? '99+' : count;
    b.classList.toggle('visible', count > 0);
  });
  
  const cartTexts = document.querySelectorAll('.cart-text-count');
  cartTexts.forEach(el => {
    el.textContent = `Cart (${count})`;
  });

  const drawerCount = document.getElementById('drawer-count');
  if (drawerCount) {
    drawerCount.textContent = count + (count === 1 ? ' Item' : ' Items');
  }

  // Update Products Cart count in mobile menu
  const mobileCount = document.querySelector('.cart-text-count-val');
  if (mobileCount) {
    mobileCount.textContent = count;
  }
}

window.addEventListener('cart-updated', updateCartBadge);

// ─── SERVICE CART BADGE & TEXT UPDATE ──────────────────────────────
function updateServiceCartBadge() {
  const count = ServiceCart.count();
  
  const badges = document.querySelectorAll('.service-cart-badge');
  badges.forEach(b => {
    b.textContent = count > 99 ? '99+' : count;
    b.classList.toggle('visible', count > 0);
  });

  const bubbles = document.querySelectorAll('.service-cart-badge-bubble');
  bubbles.forEach(b => {
    b.textContent = count > 99 ? '99+' : count;
    b.classList.toggle('visible', count > 0);
  });
  
  const mobileCount = document.querySelector('.service-cart-text-count-val');
  if (mobileCount) {
    mobileCount.textContent = count;
  }
}

window.addEventListener('service-cart-updated', updateServiceCartBadge);

// Synchronize via storage events (sync between multiple tabs/windows)
window.addEventListener('storage', (e) => {
  if (e.key === 'sathish_media_cart') {
    updateCartBadge();
  }
  if (e.key === 'sathish_service_cart') {
    updateServiceCartBadge();
  }
});

// ─── TOAST NOTIFICATIONS ─────────────────────────────────────────
let toastContainer = null;
function getToastContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}

window.showToast = function (msg, type = 'success', duration = 2800) {
  const tc   = getToastContainer();
  const icon = type === 'success' ? '✓' : '✗';
  const el   = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span style="color:${type==='success'?'#25D366':'#FF4E00'};font-weight:800;">${icon}</span> ${msg}`;
  tc.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    el.style.transition = 'all 0.3s ease';
    setTimeout(() => el.remove(), 300);
  }, duration);
};

// ─── DYNAMIC INJECTION OF HEADER CART & MINI DRAWER ───────────────
(function () {
  function injectComponents() {
    const actions = document.querySelector('.header-actions');
    
    // Inject Products Cart header button
    if (actions && !actions.querySelector('.cart-header-btn')) {
      const cartBtn = document.createElement('a');
      cartBtn.href = 'cart.html';
      cartBtn.className = 'cart-header-btn';
      cartBtn.setAttribute('aria-label', 'Shopping Cart');
      cartBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cart-svg-icon" style="display: block;">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span class="cart-badge-bubble">0</span>
      `;
      
      const waBtn = actions.querySelector('.wa-header-btn');
      if (waBtn) {
        actions.insertBefore(cartBtn, waBtn);
      } else {
        actions.appendChild(cartBtn);
      }
    }

    // Inject Service Cart header button
    if (actions && !actions.querySelector('.service-cart-header-btn')) {
      const sCartBtn = document.createElement('a');
      sCartBtn.href = 'service-cart.html';
      sCartBtn.className = 'service-cart-header-btn';
      sCartBtn.setAttribute('aria-label', 'Service Requirements Cart');
      sCartBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="service-cart-svg-icon" style="display: block;">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
        <span class="service-cart-badge-bubble">0</span>
      `;
      
      const pCart = actions.querySelector('.cart-header-btn');
      if (pCart) {
        actions.insertBefore(sCartBtn, pCart);
      } else {
        const waBtn = actions.querySelector('.wa-header-btn');
        if (waBtn) {
          actions.insertBefore(sCartBtn, waBtn);
        } else {
          actions.appendChild(sCartBtn);
        }
      }
    }

    // Inject mobile menu navigation links for both carts dynamically
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.querySelector('.mobile-cart-link')) {
      const pCartLink = document.createElement('a');
      pCartLink.href = 'cart.html';
      pCartLink.className = 'mobile-nav-link mobile-cart-link';
      pCartLink.innerHTML = '🛒 Products Cart (<span class="cart-text-count-val">0</span>)';
      mobileMenu.appendChild(pCartLink);
      
      const sCartLink = document.createElement('a');
      sCartLink.href = 'service-cart.html';
      sCartLink.className = 'mobile-nav-link mobile-service-cart-link';
      sCartLink.innerHTML = '📋 Service Cart (<span class="service-cart-text-count-val">0</span>)';
      mobileMenu.appendChild(sCartLink);
    }

    // Inject mini cart drawer (for product cart only)
    if (!document.getElementById('cart-drawer')) {
      const drawerDiv = document.createElement('div');
      drawerDiv.id = 'dynamic-cart-drawer-container';
      drawerDiv.innerHTML = `
        <div class="cart-drawer-overlay" id="cart-drawer-overlay"></div>
        <aside class="cart-drawer" id="cart-drawer">
          <div class="drawer-header">
            <div class="drawer-title">🛍️ Mini Cart <span class="drawer-count" id="drawer-count">0 Items</span></div>
            <button class="drawer-close" id="drawer-close-btn">✕</button>
          </div>
          <div class="drawer-body" id="drawer-body"></div>
          <div class="drawer-footer" id="drawer-footer" style="display:none;">
            <div class="drawer-total-row">
              <span class="drawer-total-label">Total</span>
              <span class="drawer-total-val" id="drawer-total">₹0</span>
            </div>
            <div class="drawer-actions">
              <button class="btn-outline continue-shopping-btn" id="drawer-continue-btn">Continue Shopping</button>
              <a href="cart.html" class="btn-primary view-cart-btn">View Cart</a>
            </div>
          </div>
        </aside>
      `;
      document.body.appendChild(drawerDiv);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectComponents();
      initCartDrawer();
      updateCartBadge();
      updateServiceCartBadge();
    });
  } else {
    injectComponents();
    initCartDrawer();
    updateCartBadge();
    updateServiceCartBadge();
  }

  function initCartDrawer() {
    const overlay = document.getElementById('cart-drawer-overlay');
    const drawer  = document.getElementById('cart-drawer');
    const closeBtn = document.getElementById('drawer-close-btn');
    const continueBtn = document.getElementById('drawer-continue-btn');
    
    if (!overlay || !drawer) return;

    function openDrawer() {
      overlay.classList.add('open');
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      renderDrawer();
    }

    function closeDrawer() {
      overlay.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }

    overlay.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (continueBtn) continueBtn.addEventListener('click', closeDrawer);

    window.openCartDrawer  = openDrawer;
    window.closeCartDrawer = closeDrawer;

    function renderDrawer() {
      const body  = document.getElementById('drawer-body');
      const foot  = document.getElementById('drawer-footer');
      if (!body) return;

      const items = Cart.get();
      updateCartBadge();

      if (items.length === 0) {
        body.innerHTML = `
          <div class="drawer-empty">
            <div class="drawer-empty-icon">🛒</div>
            <p>Your cart is empty</p>
            <button class="btn-outline" onclick="closeCartDrawer()" style="font-size:12px;padding:.6rem 1.2rem; cursor:pointer;">Browse Products</button>
          </div>`;
        if (foot) foot.style.display = 'none';
        return;
      }

      if (foot) foot.style.display = 'block';

      body.innerHTML = items.map(item => `
        <div class="drawer-item" data-id="${item.id}">
          <div class="drawer-item-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=150&q=80'">
          </div>
          <div class="drawer-item-info">
            <div class="drawer-item-name">${item.name}</div>
            <div class="drawer-item-price">${formatINR(item.price)}</div>
            <div class="drawer-item-controls">
              <div class="drawer-qty">
                <button onclick="cartQtyChange('${item.id}',${item.quantity - 1})" aria-label="Decrease">−</button>
                <span>${item.quantity}</span>
                <button onclick="cartQtyChange('${item.id}',${item.quantity + 1})" aria-label="Increase">+</button>
              </div>
              <button class="drawer-remove" onclick="cartRemove('${item.id}')" aria-label="Remove">✕</button>
            </div>
          </div>
        </div>`).join('');

      const totalEl = document.getElementById('drawer-total');
      if (totalEl) totalEl.textContent = formatINR(Cart.total());
    }

    window.cartQtyChange = function (id, qty) {
      Cart.updateQty(id, qty);
      renderDrawer();
      updateCartBadge();
    };
    
    window.cartRemove = function (id) {
      Cart.remove(id);
      renderDrawer();
      updateCartBadge();
      showToast('Item removed from cart');
    };

    window.addEventListener('cart-updated', renderDrawer);
  }
})();

// ─── ADD-TO-CART HELPER ───────────────────────────────────────────
window.addToCart = function (productId, qty = 1) {
  const product = getProductById(productId);
  if (!product) return;
  Cart.add(product, qty);
  updateCartBadge();
  showToast(`"${product.name}" added to cart ✦`);
  
  if (typeof openCartDrawer === 'function') {
    setTimeout(openCartDrawer, 250);
  }
};

// ─── ACTIVE NAV LINK ──────────────────────────────────────────────
(function () {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ─── DYNAMIC CONTACT SYNC FROM SETTINGS ───────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  try {
    const settings = JSON.parse(localStorage.getItem('sathish_settings') || '{}');
    if (!settings.whatsapp) return;

    const rawNum = settings.whatsapp.replace(/[^0-9]/g, '');

    const links = document.querySelectorAll('a[href*="wa.me"]');
    links.forEach(link => {
      const urlStr = link.href;
      if (urlStr.includes('918762097098')) {
        link.href = urlStr.replace('918762097098', rawNum);
      }
    });

    const textEls = document.querySelectorAll('.footer-wa-btn, .footer-link, .wa-header-btn span');
    textEls.forEach(el => {
      if (el.textContent.includes('87620 97098') || el.textContent.includes('8762097098')) {
        el.textContent = el.textContent
          .replace('+91 87620 97098', settings.whatsapp)
          .replace('87620 97098', settings.whatsapp);
      }
    });

    // Dynamic Sync of new configuration details
    if (settings.email) {
      document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.href = `mailto:${settings.email}`;
      });
      document.querySelectorAll('.footer-link, .contact-email, .header-email').forEach(el => {
        if (el.textContent.includes('sathishmedia4u@gmail.com') || el.textContent.toLowerCase().includes('email')) {
          el.textContent = el.textContent.replace(/sathishmedia4u@gmail.com/i, settings.email);
        }
      });
    }

    if (settings.phone) {
      document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        const rawPhone = settings.phone.replace(/[^0-9+]/g, '');
        link.href = `tel:${rawPhone}`;
      });
      document.querySelectorAll('.footer-link, .contact-phone, .company-phone').forEach(el => {
        if (el.textContent.includes('87620 97098') || el.textContent.includes('8762097098')) {
          el.textContent = el.textContent
            .replace('+91 87620 97098', settings.phone)
            .replace('87620 97098', settings.phone);
        }
      });
    }

    if (settings.address) {
      document.querySelectorAll('.footer-address, .contact-address, .company-address').forEach(el => {
        el.textContent = settings.address;
      });
    }

    if (settings.hours) {
      document.querySelectorAll('.footer-hours, .contact-hours, .business-hours').forEach(el => {
        el.textContent = settings.hours;
      });
    }

    // Sync Social Media Links
    if (settings.facebook) {
      document.querySelectorAll('a[href*="facebook.com"]').forEach(link => {
        link.href = settings.facebook;
      });
    }
    if (settings.instagram) {
      document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
        link.href = settings.instagram;
      });
    }
    if (settings.youtube) {
      document.querySelectorAll('a[href*="youtube.com"]').forEach(link => {
        link.href = settings.youtube;
      });
    }
    if (settings.twitter) {
      document.querySelectorAll('a[href*="twitter.com"]').forEach(link => {
        link.href = settings.twitter;
      });
    }

    // Sync SEO metadata
    if (settings.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = settings.keywords;
    }
    if (settings.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = settings.description;
    }
  } catch (e) {
    console.error('Failed to sync contact, social, and SEO details dynamically:', e);
  }
});

// ═══════════════════════════════════════════════════════════════════
//  PREMIUM AGENCY ANIMATIONS & INTERACTIONS
// ═══════════════════════════════════════════════════════════════════

// ─── 1. CUSTOM CURSOR ─────────────────────────────────────────────
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = document.createElement('div');
  dot.className = 'agency-cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'agency-cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = -200, my = -200;
  let rx = -200, ry = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverEls = 'a, button, .service-card, .product-card, .portfolio-item, .stat-card, .category-card, .filter-btn, .rv-arrow, [onclick]';
  document.querySelectorAll(hoverEls).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
  });
  
  document.addEventListener('mouseleave', () => { mx = -500; my = -500; });
})();

// ─── 2. CANVAS PARTICLE NETWORK (Hero - Premium Vanta 3D NET Style) ──
(function () {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'net-particle-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  hero.insertBefore(canvas, hero.firstChild);

  const ctx = canvas.getContext('2d');
  let W, H, animId;

  // 3D Point Setup
  const PARTICLE_COUNT = 65;
  const FOV = 450;
  const DEPTH = 350;
  const MAX_DIST = 140; // Max connection distance in 2D projected space
  const COLORS = ['#FF6B00', '#FF3D81', '#8B5CF6', '#00D4FF', '#00FFA3'];

  let particles = [];
  let rotX = 0, rotY = 0;
  let targetRotX = 0, targetRotY = 0;
  let scrollOffset = 0;

  // Track mouse coordinates for interactive shifts
  let mx = -1000, my = -1000;

  function resize() {
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  // Mouse move inside hero captures relative position
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mx = e.clientX - rect.left;
    my = e.clientY - rect.top;

    // Target rotation based on cursor offset from center
    const cx = W / 2;
    const cy = H / 2;
    targetRotY = (mx - cx) * 0.00035;
    targetRotX = (my - cy) * -0.00035;
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    mx = -1000;
    my = -1000;
    targetRotX = 0;
    targetRotY = 0;
  }, { passive: true });

  // Scroll parallax listener
  window.addEventListener('scroll', () => {
    scrollOffset = window.scrollY;
  }, { passive: true });

  // 3D Node Class
  function Particle3D() {
    this.x = (Math.random() - 0.5) * W * 1.5;
    this.y = (Math.random() - 0.5) * H * 1.5;
    this.z = (Math.random() - 0.5) * DEPTH * 2;

    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.vz = (Math.random() - 0.5) * 0.5;

    this.r = Math.random() * 2.2 + 1.2;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.alpha = Math.random() * 0.45 + 0.45;
  }

  Particle3D.prototype.update = function () {
    // Standard 3D drift
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;

    // Bound check (keep in 3D box)
    const boundX = W * 0.85;
    const boundY = H * 0.85;
    const boundZ = DEPTH;

    if (Math.abs(this.x) > boundX) this.vx *= -1;
    if (Math.abs(this.y) > boundY) this.vy *= -1;
    if (Math.abs(this.z) > boundZ) this.vz *= -1;
  };

  // Generate particles
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle3D());
  }

  // Floating media icons inside 3D space
  const mediaIcons = [
    { char: '📷', fx: -0.4, fy: -0.3, z: 100, rot: 0, speed: 0.005 },
    { char: '🎥', fx: 0.3, fy: 0.2, z: -150, rot: 0, speed: -0.003 },
    { char: '🎨', fx: -0.2, fy: 0.35, z: -50, rot: 0, speed: 0.004 },
    { char: '✨', fx: 0.45, fy: -0.2, z: 200, rot: 0, speed: -0.006 },
    { char: '🎬', fx: -0.1, fy: -0.4, z: -250, rot: 0, speed: 0.002 },
    { char: '✒️', fx: 0.15, fy: -0.3, z: 50, rot: 0, speed: 0.003 }
  ];

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Eased 3D Rotations (Tactile Parallax)
    rotX += (targetRotX - rotX) * 0.06;
    rotY += (targetRotY - rotY) * 0.06;

    // Apply scroll parallax influence (pitch slightly on scroll)
    const scrollRot = scrollOffset * 0.00008;
    const activeRotX = rotX + scrollRot;

    const cosX = Math.cos(activeRotX);
    const sinX = Math.sin(activeRotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);

    const cx = W / 2;
    const cy = H / 2;

    // Project all points into temporary array
    const projected = [];

    particles.forEach(p => {
      p.update();

      // Rotate around X-axis
      let y1 = p.y * cosX - p.z * sinX;
      let z1 = p.y * sinX + p.z * cosX;

      // Rotate around Y-axis
      let x2 = p.x * cosY - z1 * sinY;
      let z2 = p.x * sinY + z1 * cosY;

      // Perspective scale factor
      let scale = FOV / (FOV + z2);
      let sx = x2 * scale + cx;
      let sy = y1 * scale + cy;

      // Mouse displacement interaction (push effect)
      if (mx > 0 && my > 0) {
        const dx = sx - mx;
        const dy = sy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) * 0.14;
          sx += (dx / dist) * force;
          sy += (dy / dist) * force;
        }
      }

      projected.push({
        x: sx,
        y: sy,
        z: z2,
        r: p.r * scale,
        color: p.color,
        alpha: p.alpha * (1 - (z2 + DEPTH) / (DEPTH * 2)) // Depth cueing fade
      });
    });

    // Draw Triangulated Face Mesh (Vanta NET polygon meshes)
    for (let i = 0; i < projected.length; i++) {
      const neighbors = [];
      const a = projected[i];

      // Find close nodes in 2D projected space
      for (let j = 0; j < projected.length; j++) {
        if (i === j) continue;
        const b = projected[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX_DIST) {
          neighbors.push({ idx: j, dist: d, node: b });
        }
      }

      // If we have close nodes, check if they are mutually close to form triangles
      for (let n = 0; n < neighbors.length; n++) {
        for (let m = n + 1; m < neighbors.length; m++) {
          const b = neighbors[n].node;
          const c = neighbors[m].node;
          const dx = b.x - c.x;
          const dy = b.y - c.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.lineTo(c.x, c.y);
            ctx.closePath();

            // Very soft, premium geometric glass tint
            const midZ = (a.z + b.z + c.z) / 3;
            const depthFactor = 1 - (midZ + DEPTH) / (DEPTH * 2);
            ctx.fillStyle = `rgba(255, 61, 129, ${0.012 * depthFactor})`;
            ctx.fill();
          }
        }
      }
    }

    // Draw Connecting Lines
    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const a = projected[i];
        const b = projected[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < MAX_DIST) {
          // Dynamic Multi-color Gradient lines
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, a.color);
          grad.addColorStop(1, b.color);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);

          // Combined distance fade + depth cueing fade
          const alphaFade = (1 - d / MAX_DIST) * 0.28;
          ctx.globalAlpha = alphaFade * Math.min(a.alpha, b.alpha);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    // Draw Concentric Neon Glow Particles
    projected.forEach(p => {
      if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) return;

      // 1. Outer Neon Glow Halo
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha * 0.08;
      ctx.fill();

      // 2. Bright Concentric Core
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF'; // White center core for authentic glow
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha * 0.85;
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Draw Floating Media Icons inside 3D space
    mediaIcons.forEach(icon => {
      icon.rot += icon.speed;
      
      const activeX = W * icon.fx;
      const activeY = H * icon.fy;

      // Calculate slow orbital offset
      const cxOffset = Math.sin(icon.rot) * 40;
      const cyOffset = Math.cos(icon.rot) * 40;

      // Pitch (X-rotation)
      let y1 = (activeY + cyOffset) * cosX - icon.z * sinX;
      let z1 = (activeY + cyOffset) * sinX + icon.z * cosX;

      // Yaw (Y-rotation)
      let x2 = (activeX + cxOffset) * cosY - z1 * sinY;
      let z2 = (activeX + cxOffset) * sinY + z1 * cosY;

      let scale = FOV / (FOV + z2);
      let sx = x2 * scale + cx;
      let sy = y1 * scale + cy;

      // Render micro glass icons
      if (sx > 0 && sx < W && sy > 0 && sy < H) {
        ctx.save();
        ctx.font = `${Math.round(20 * scale)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 0.16 * (1 - (z2 + DEPTH) / (DEPTH * 2));
        ctx.fillText(icon.char, sx, sy);
        ctx.restore();
      }
    });

    animId = requestAnimationFrame(draw);
  }

  // Throttled Observer to pause animation when hero offscreen
  const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      if (!animId) draw();
    } else {
      cancelAnimationFrame(animId);
      animId = null;
    }
  }, { threshold: 0.05 });

  heroObs.observe(hero);
})();

// ─── 3. TYPEWRITER EFFECT (Hero subtitle) ────────────────────────
(function () {
  const el = document.getElementById('hero-typewriter');
  if (!el) return;

  const lines = [
    'Cinematic Photography & Visuals ✦',
    'Premium Brand Identity Design ✦',
    '4K Video Production & Editing ✦',
    'Creative Advertising Campaigns ✦',
    'Art Supplies & Stationery ✦',
  ];
  let li = 0, ci = 0, deleting = false, pause = 0;

  function tick() {
    const line = lines[li];
    if (!deleting) {
      if (ci < line.length) {
        el.textContent = line.slice(0, ++ci);
        setTimeout(tick, 45);
      } else {
        pause++;
        if (pause < 45) { setTimeout(tick, 50); } else { pause = 0; deleting = true; setTimeout(tick, 80); }
      }
    } else {
      if (ci > 0) {
        el.textContent = line.slice(0, --ci);
        setTimeout(tick, 28);
      } else {
        deleting = false;
        li = (li + 1) % lines.length;
        setTimeout(tick, 400);
      }
    }
  }
  tick();
})();

// ─── 4. ADVANCED SCROLL REVEAL SYSTEM ────────────────────────────
(function () {
  if (!('IntersectionObserver' in window)) return;

  const revealClasses = [
    { selector: '[data-reveal]',       cls: 'fade-up' },
    { selector: '.reveal-fade-up',     cls: 'active-reveal' },
    { selector: '.reveal-fade-left',   cls: 'active-reveal' },
    { selector: '.reveal-fade-right',  cls: 'active-reveal' },
    { selector: '.reveal-scale',       cls: 'active-reveal' },
    { selector: '.reveal-stagger',     cls: 'active-reveal' },
  ];

  revealClasses.forEach(({ selector, cls }) => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    if (selector === '[data-reveal]') {
      els.forEach(el => { el.style.opacity = '0'; });
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add(cls);
          if (selector === '[data-reveal]') e.target.style.opacity = '';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    els.forEach(el => observer.observe(el));
  });
})();

// ─── 5. STATS COUNTER ANIMATION ──────────────────────────────────
(function () {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  let done = false;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !done) {
      done = true;
      obs.disconnect();
      document.querySelectorAll('.stat-card-num').forEach(el => {
        const target = parseInt(el.getAttribute('data-target') || '0');
        if (!target) return;
        let cur = 0;
        const steps = 80;
        const inc = target / steps;
        const iv = setInterval(() => {
          cur += inc;
          if (cur >= target) {
            el.textContent = target.toLocaleString('en-IN');
            clearInterval(iv);
          } else {
            el.textContent = Math.floor(cur).toLocaleString('en-IN');
          }
        }, 22);
      });
    }
  }, { threshold: 0.2 });
  obs.observe(statsSection);
})();

// ─── 6. PORTFOLIO LIGHTBOX ────────────────────────────────────────
(function () {
  // Inject lightbox modal into DOM
  if (!document.getElementById('agency-lightbox')) {
    const lb = document.createElement('div');
    lb.id = 'agency-lightbox';
    lb.className = 'lightbox-modal';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Portfolio image viewer');
    lb.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" id="lb-close" aria-label="Close lightbox">✕</button>
        <img class="lightbox-media" id="lb-img" src="" alt="" />
        <div class="lightbox-caption" id="lb-caption"></div>
      </div>`;
    document.body.appendChild(lb);

    const close = () => lb.classList.remove('active');
    document.getElementById('lb-close').addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  function openLightbox(src, caption) {
    const lb  = document.getElementById('agency-lightbox');
    const img = document.getElementById('lb-img');
    const cap = document.getElementById('lb-caption');
    if (!lb || !img) return;
    img.src = src;
    img.alt = caption || '';
    if (cap) cap.textContent = caption || '';
    lb.classList.add('active');
  }
  window.openLightbox = openLightbox;

  // Attach lightbox to portfolio items
  function attachPortfolioLightbox() {
    document.querySelectorAll('.portfolio-item').forEach(item => {
      if (item.dataset.lbAttached) return;
      item.dataset.lbAttached = '1';
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const cap = item.querySelector('.category-name');
        if (img) openLightbox(img.src, cap ? cap.textContent : '');
      });
      item.style.cursor = 'pointer';
    });
  }
  document.addEventListener('DOMContentLoaded', attachPortfolioLightbox);
  // Re-attach if portfolio items added dynamically
  const portfolioGrid = document.querySelector('.portfolio-grid');
  if (portfolioGrid) {
    new MutationObserver(attachPortfolioLightbox).observe(portfolioGrid, { childList: true });
  }
  attachPortfolioLightbox();
})();

// ─── 7. FLOATING HERO ELEMENTS PARALLAX ──────────────────────────
(function () {
  const floatingEls = document.querySelectorAll('.float-icon');
  if (!floatingEls.length) return;

  let ticking = false;
  window.addEventListener('mousemove', e => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      floatingEls.forEach((el, i) => {
        const depth = (i + 1) * 8;
        el.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
      });
      ticking = false;
    });
  });
})();

// ─── 8. SERVICE CARD TILT EFFECT ─────────────────────────────────
(function () {
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r   = card.getBoundingClientRect();
      const x   = e.clientX - r.left - r.width  / 2;
      const y   = e.clientY - r.top  - r.height / 2;
      const rx  = -(y / r.height) * 8;
      const ry  =  (x / r.width)  * 8;
      card.style.transform = `translateY(-8px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.transition = 'none';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = '';
    });
  });
})();

// ─── 9. SMOOTH SCROLL FOR ANCHOR LINKS ───────────────────────────
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();

// ─── 10. GLOWING BACKGROUND ORBS ─────────────────────────────────
(function () {
  if (document.getElementById('bg-orbs')) return;
  const orbs = document.createElement('div');
  orbs.id = 'bg-orbs';
  orbs.setAttribute('aria-hidden', 'true');
  orbs.innerHTML = `
    <div class="bg-orb orb-1"></div>
    <div class="bg-orb orb-2"></div>
    <div class="bg-orb orb-3"></div>
  `;
  document.body.insertBefore(orbs, document.body.firstChild);
})();

// ─── 11. SERVICE CARD CURSOR HOVER RE-ATTACH (for dynamic content) ──
document.addEventListener('DOMContentLoaded', () => {
  // Re-attach cursor hover for dynamically added cards
  setTimeout(() => {
    const hoverEls = document.querySelectorAll('a, button, .service-card, .product-card, .portfolio-item, .stat-card, .category-card, .filter-btn, .rv-arrow, [onclick]');
    hoverEls.forEach(el => {
      if (!el.dataset.cursorAttached) {
        el.dataset.cursorAttached = '1';
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
      }
    });
  }, 800);
});

// ─── 12. FAQ ACCORDION INTERACTIVITY ───────────────────────────────
(function () {
  const initFaqAccordion = () => {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
      q.addEventListener('click', () => {
        const isExpanded = q.getAttribute('aria-expanded') === 'true';
        const targetId = q.getAttribute('aria-controls');
        const answer = document.getElementById(targetId);

        if (!answer) return;

        // Toggle aria-expanded
        q.setAttribute('aria-expanded', !isExpanded);

        if (isExpanded) {
          // Collapse
          answer.style.maxHeight = answer.scrollHeight + 'px';
          // Force reflow
          answer.offsetHeight;
          answer.style.maxHeight = '0px';
          answer.classList.remove('open');

          setTimeout(() => {
            if (q.getAttribute('aria-expanded') === 'false') {
              answer.setAttribute('hidden', '');
            }
          }, 400);
        } else {
          // Expand
          answer.removeAttribute('hidden');
          answer.classList.add('open');
          answer.style.maxHeight = '0px';
          // Force reflow
          answer.offsetHeight;
          answer.style.maxHeight = answer.scrollHeight + 'px';

          setTimeout(() => {
            if (q.getAttribute('aria-expanded') === 'true') {
              answer.style.maxHeight = 'none';
            }
          }, 400);
        }
      });

      // Bind cursor effects for questions
      if (!q.dataset.cursorAttached) {
        q.dataset.cursorAttached = '1';
        q.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
        q.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaqAccordion);
  } else {
    initFaqAccordion();
  }
})();

// ─── 14. DYNAMIC BUTTON SWAPPER (WHATSAPP TO ADD REQUIREMENT) ─────
function replaceWhatsAppButtonsWithServiceCart() {
  const buttons = document.querySelectorAll(
    'a[href*="wa.me"], button[onclick*="wa.me"], .btn-photo-wa, .btn-wa-booking, .btn-prt-wa, #hero-wa-btn, #overview-wa-btn, #cta-whatsapp-btn'
  );
  
  buttons.forEach(btn => {
    // Skip general footer, site-header or contact-section links
    if (btn.closest('.site-header') || btn.closest('.site-footer') || btn.closest('.contact-section') || btn.closest('.srv-contact')) {
      return;
    }
    
    // Skip already swapped buttons
    if (btn.dataset.cartListenerAttached) {
      return;
    }
    
    // Determine the service ID from button ID or enclosing card container
    let srvId = null;
    let srvTitle = "";
    let parentCategory = "";
    
    const match = btn.id && btn.id.match(/(enquire|book|learn|detail)-btn-(SUB-\d+|SRV-\d+)/);
    if (match) {
      srvId = match[2];
    } else {
      const card = btn.closest('[id*="card-"]');
      if (card) {
        const idMatch = card.id.match(/(SUB-\d+|SRV-\d+)/);
        if (idMatch) {
          srvId = idMatch[1];
        }
      }
    }
    
    // Resolve for service-details.html page using URL
    if (!srvId && window.location.pathname.includes('service-details.html')) {
      const params = new URLSearchParams(window.location.search);
      srvId = params.get('id') || 'SUB-101';
    }
    
    if (srvId) {
      const s = srvId.startsWith('SUB-') ? smhGetSubcategoryById(srvId) : smhGetServiceById(srvId);
      if (s) {
        srvTitle = s.title;
        parentCategory = s.category || s.title;
      }
    }
    
    if (srvId && srvTitle) {
      // Modify link properties to cancel standard WhatsApp redirect
      btn.removeAttribute('target');
      btn.removeAttribute('rel');
      btn.href = 'javascript:void(0)';
      
      // Update visual icons
      const svg = btn.querySelector('svg');
      if (svg) {
        svg.outerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.35rem; vertical-align: middle;">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        `;
      }
      
      const span = btn.querySelector('span');
      if (span) {
        span.textContent = 'Add Requirement';
      } else {
        btn.textContent = 'Add Requirement';
      }
      
      btn.dataset.cartListenerAttached = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        ServiceCart.add(srvId, srvTitle, parentCategory, srvTitle);
      });
    }
  });

  // Re-route details buttons to service-details.html
  const detailsBtns = document.querySelectorAll(
    'a[id*="detail-btn-"], a[id*="learn-btn-"]'
  );
  detailsBtns.forEach(btn => {
    if (btn.dataset.rerouted) return;
    const match = btn.id.match(/(detail|learn)-btn-(SUB-\d+|SRV-\d+)/);
    if (match) {
      const srvId = match[2];
      btn.href = `service-details.html?id=${srvId}`;
      btn.removeAttribute('target');
      btn.removeAttribute('rel');
      if (btn.textContent.includes('Get Quote') || btn.textContent.includes('Details')) {
        btn.innerHTML = 'Details ↗';
      }
      btn.dataset.rerouted = '1';
    }
  });
}

// ─── 15. DYNAMIC MUTATION OBSERVER FOR SWAPPING LINKS ──────────────
(function () {
  const observeServiceContent = () => {
    replaceWhatsAppButtonsWithServiceCart();
    const observer = new MutationObserver(() => {
      replaceWhatsAppButtonsWithServiceCart();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeServiceContent);
  } else {
    observeServiceContent();
  }
})();


