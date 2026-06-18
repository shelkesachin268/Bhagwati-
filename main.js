// ============================================
// DIVINE CHANTS – MAIN.JS
// ============================================

// ── CART STATE ──
let cart = JSON.parse(localStorage.getItem('divineCart') || '[]');

// ── RENDER PRODUCTS ──
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  products.forEach(p => {
    const discount = Math.round((1 - p.price / p.mrp) * 100);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrap" onclick="openProduct(${p.id})">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <span class="product-discount-badge">-${discount}%</span>
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy"/>
      </div>
      <div class="product-info">
        <div class="product-name" onclick="openProduct(${p.id})">${p.name}</div>
        <div class="product-desc-short">${p.shortDesc}</div>
        <div class="product-pricing">
          <span class="product-price">₹${p.price}</span>
          <span class="product-mrp">₹${p.mrp}</span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart(${p.id}, event)">+ Add to Cart</button>
          <button class="btn-view" onclick="openProduct(${p.id})">View →</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── PRODUCT MODAL ──
function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const discount = Math.round((1 - p.price / p.mrp) * 100);
  const savings = p.mrp - p.price;
  let activeImg = 0;

  const thumbsHtml = p.images.map((img, i) => `
    <img src="${img}" alt="view ${i+1}" class="${i === 0 ? 'active' : ''}" onclick="switchModalImg(${i}, this)"/>
  `).join('');

  const keyPointsHtml = p.keyPoints.map(k => `<li>${k}</li>`).join('');

  const waMsg = encodeURIComponent(
    `Namaste! 🙏\n\nI want to buy from *Bhagwati Enterprises*:\n*${p.name}*\nPrice: ₹${p.price}\n\nPlease confirm availability and delivery details.`
  );

  document.getElementById('modalContent').innerHTML = `
    <button class="modal-close" onclick="closeProduct()">✕</button>
    <div class="modal-body">
      <div class="modal-gallery">
        <div class="modal-gallery-main">
          <img id="modalMainImg" src="${p.images[0]}" alt="${p.name}"/>
        </div>
        <div class="modal-gallery-thumbs" id="modalThumbs">
          ${thumbsHtml}
        </div>
      </div>

      <h1 class="modal-product-name">${p.name}</h1>
      <div class="modal-pricing">
        <span class="modal-price">₹${p.price}</span>
        <span class="modal-mrp">₹${p.mrp}</span>
        <span class="modal-savings">Save ₹${savings} (${discount}% off)</span>
      </div>

      <p class="modal-desc">${p.description}</p>

      <div class="modal-keypoints">
        <h4>Key Features</h4>
        <ul>${keyPointsHtml}</ul>
      </div>

      <div class="modal-ctas">
        <button class="modal-add-cart" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
        <a class="modal-whatsapp" href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}" target="_blank">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Buy on WhatsApp
        </a>
        <a class="modal-meesho" href="${p.meeshoUrl}" target="_blank">
          🛍 View on Meesho
        </a>
      </div>
    </div>
  `;

  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchModalImg(index, el) {
  const mainImg = document.getElementById('modalMainImg');
  const thumbs = document.querySelectorAll('#modalThumbs img');
  thumbs.forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  mainImg.src = el.src;
}

function closeProduct() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── CART ──
function addToCart(id, evt) {
  if (evt) evt.stopPropagation();
  const p = products.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name: p.name, price: p.price, image: p.images[0], qty: 1 });
  }
  saveCart();
  updateCartUI();
  showAddedFeedback(id);
}

function showAddedFeedback(id) {
  const btn = document.querySelector(`.product-card:nth-child(${products.findIndex(p=>p.id===id)+1}) .btn-add-cart`);
  if (!btn) return;
  const orig = btn.textContent;
  btn.textContent = '✓ Added!';
  btn.style.background = 'rgba(74,222,128,0.2)';
  btn.style.borderColor = '#4ade80';
  btn.style.color = '#4ade80';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 1800);
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('divineCart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = count;
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><span>🪷</span><p>Your cart is empty.<br/>Add some divine products!</p></div>`;
    footer.style.display = 'none';
    return;
  }

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = '₹' + total;
  footer.style.display = 'block';

  container.innerHTML = cart.map(c => `
    <div class="cart-item">
      <img class="cart-item-img" src="${c.image}" alt="${c.name}"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-price">₹${c.price} × ${c.qty} = ₹${c.price * c.qty}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${c.id}, -1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="updateQty(${c.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.id})" title="Remove">✕</button>
    </div>
  `).join('');
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
  if (!isOpen) renderCartItems();
}

function orderOnWhatsApp() {
  if (cart.length === 0) return;
  let msg = `Namaste! 🙏 I want to order from *Bhagwati Enterprises*:\n\n`;
  cart.forEach(c => {
    msg += `• *${c.name}*\n  Qty: ${c.qty} × ₹${c.price} = ₹${c.price * c.qty}\n\n`;
  });
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  msg += `*Total: ₹${total}*\n\nPlease share payment and delivery details. 🙏`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── KEYBOARD CLOSE ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeProduct();
    const drawer = document.getElementById('cartDrawer');
    if (drawer.classList.contains('open')) toggleCart();
  }
});

// ── MANDALA CANVAS ──
(function initMandala() {
  const canvas = document.getElementById('mandalaCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, cx, cy, tick = 0;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    cx = W / 2; cy = H / 2;
  }
  window.addEventListener('resize', resize);
  resize();

  function drawMandala() {
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.translate(cx, cy);

    const layers = [
      { petals: 8,  r: 180, size: 18, rot: tick * 0.003 },
      { petals: 12, r: 280, size: 14, rot: -tick * 0.002 },
      { petals: 16, r: 380, size: 10, rot: tick * 0.0015 },
      { petals: 6,  r: 120, size: 22, rot: -tick * 0.004 },
    ];

    layers.forEach(layer => {
      ctx.save();
      ctx.rotate(layer.rot);
      for (let i = 0; i < layer.petals; i++) {
        const angle = (Math.PI * 2 / layer.petals) * i;
        const x = Math.cos(angle) * layer.r;
        const y = Math.sin(angle) * layer.r;
        ctx.beginPath();
        ctx.arc(x, y, layer.size, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(201,168,76,0.6)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
        // Petal shape
        ctx.beginPath();
        ctx.ellipse(x, y, layer.size * 0.5, layer.size * 1.4, angle, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(232,135,26,0.3)';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
      ctx.restore();
    });

    // Center lotus
    for (let i = 0; i < 8; i++) {
      const a = (Math.PI * 2 / 8) * i + tick * 0.005;
      ctx.beginPath();
      ctx.ellipse(Math.cos(a) * 35, Math.sin(a) * 35, 12, 24, a, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(201,168,76,0.7)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    // Outer rings
    [80, 150, 220, 310, 400].forEach((r, i) => {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(201,168,76,${0.15 - i * 0.02})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    });

    ctx.restore();
    tick++;
    requestAnimationFrame(drawMandala);
  }

  drawMandala();
})();

// ── FLOATING PARTICLES ──
(function initParticles() {
  const container = document.getElementById('particles');
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${8 + Math.random() * 15}s;
      animation-delay: ${Math.random() * 15}s;
    `;
    container.appendChild(p);
  }
})();

// ── SCROLL HEADER ──
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  h.style.background = window.scrollY > 50
    ? 'rgba(13, 11, 30, 0.98)'
    : 'rgba(13, 11, 30, 0.92)';
});

// ── INIT ──
renderProducts();
updateCartUI();
