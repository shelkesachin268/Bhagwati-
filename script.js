// Global Configuration
const WHATSAPP_NUMBER = "919999999999"; // Replace with your actual business WhatsApp number

// 11 Unique Chanting Products Setup Data with Added Description Fields
const productsData = [
    { id: 1, title: "Ananda 20-in-1 Premium Chanter", basePrice: 1499, discountPercent: 30, trackCount: "20 Meditative Chants", desc: "A beautiful, portable chanter pre-loaded with over 20 authentic Vedic mantras. Features crystal clear sound quality, easy navigation controls, long battery life, and high-quality gold metallic housing." },
    { id: 2, title: "Devi Divine Premium Sound Machine", basePrice: 1999, discountPercent: 35, trackCount: "35 Durga & Lakshmi Chants", desc: "Invoke peace and wealth with this special edition audio box completely dedicated to Maha Lakshmi and Divine Maa Durga. Perfect for daily morning prayers and festive environments." },
    { id: 3, title: "Shiva Tandava High-Bass Player", basePrice: 1299, discountPercent: 25, trackCount: "11 Powerful Shiva Mantras", desc: "Experience powerful, high-resonance sounds featuring Mahamrityunjaya Mantra and Shiva Tandava Stotram. Equipped with custom acoustic subwoofers for home temple settings." },
    { id: 4, title: "Krishna Leela Pocket Eco-Chanter", basePrice: 899, discountPercent: 20, trackCount: "15 Maha-Mantra Tracks", desc: "Take divine frequencies anywhere. This ultra-slim, compact player can slip right into your pocket or travel bags. Pre-loaded with peaceful flute melodies and Hare Krishna chants." },
    { id: 5, title: "Ganesha Vignaharta Digital Box", basePrice: 1599, discountPercent: 40, trackCount: "21 Ganpati Chants & Aartis", desc: "Clear out negative energies with the voice of Lord Ganesha. Includes complete aartis and high-frequency continuous loops designed for home entrances and offices." },
    { id: 6, title: "Hanuman Sankat Mochan Continuous Box", basePrice: 1399, discountPercent: 30, trackCount: "7 Chalisa & Mantra Modes", desc: "Includes multiple variations of the powerful Hanuman Chalisa sung by classical spiritual artists. Designed with a continuous playback toggle loop that never stops." },
    { id: 7, title: "Gayatri Mantra Solar-Powered Device", basePrice: 2499, discountPercent: 45, trackCount: "Continuous Gayatri Vedic Audio", desc: "An eco-friendly, premium solar-assisted chanting box intended for your garden, balcony, or well-lit indoor spaces. Loops the sacred Gayatri hymn endlessly." },
    { id: 8, title: "Vedic Aura All-in-One Audio Machine", basePrice: 2999, discountPercent: 50, trackCount: "108 Ancient Vedic Hymns", desc: "The ultimate spiritual package. Contains 108 unique tracks covering Upanishads, Shlokas, Suktams, and peaceful meditation background soundtracks." },
    { id: 9, title: "Shanti Harmonious Portable Speaker", basePrice: 1199, discountPercent: 15, trackCount: "5 Soothing Ambient Tracks", desc: "A sleek, minimalist wooden finish box that blends right into any modern interior design. Emits peaceful low-frequency hums and ambient OM resonances." },
    { id: 10, title: "Rudraksha Designer Special Edition Box", basePrice: 3499, discountPercent: 35, trackCount: "50 Ultimate Divine Meditations", desc: "Encased in premium wood carved with traditional Indian mandalas. Comes packaged in a premium gift box including an auxiliary wall adapter and user manuals." },
    { id: 11, title: "Mini Spiritual Resonance Pocket Plug", basePrice: 699, discountPercent: 10, trackCount: "3 Essential Peace Chants", desc: "A simple wall plug-and-play device. No cables required, just plug it directly into any wall switchboard to instantly flood your room with holy vibrations." }
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUI();
});

// Build 11 product cards in a clean, square image layout
function renderProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    productsData.forEach(prod => {
        const currentPrice = Math.round(prod.basePrice * (1 - prod.discountPercent / 100));
        const mainImage = `images/prod${prod.id}-1.jpg`; // Default view image

        const card = document.createElement("div");
        card.className = "product-card";
        // Clicking anywhere on the card opens the full screen item details page
        card.setAttribute("onclick", `openProductModal(${prod.id})`);
        
        card.innerHTML = `
            <div class="image-square-container">
                <span class="discount-badge">${prod.discountPercent}% OFF</span>
                <img src="${mainImage}" alt="${prod.title}" onerror="this.src='https://picsum.photos/400/400?random=${prod.id}'">
            </div>
            <div class="product-details">
                <h3>${prod.title}</h3>
                <span class="mantra-count"><i class="fas fa-music"></i> ${prod.trackCount}</span>
                <div class="price-box">
                    <span class="current-price">₹${currentPrice}</span>
                    <span class="original-price">₹${prod.basePrice}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Open Full-Screen Modal and Generate Product Details Content
function openProductModal(productId) {
    // Prevent background scrolling while checking details
    document.body.style.overflow = "hidden";
    
    const product = productsData.find(p => p.id === productId);
    const currentPrice = Math.round(product.basePrice * (1 - product.discountPercent / 100));
    
    const modal = document.getElementById("product-detail-modal");
    const modalBody = document.getElementById("modal-content-body");
    
    // Setup array containing paths for all 4 product images
    const images = [
        `images/prod${product.id}-1.jpg`,
        `images/prod${product.id}-2.jpg`,
        `images/prod${product.id}-3.jpg`,
        `images/prod${product.id}-4.jpg`
    ];

    modalBody.innerHTML = `
        <div class="modal-gallery">
            <div class="main-modal-img-wrap">
                <img id="extended-main-img" src="${images[0]}" onerror="this.src='https://picsum.photos/400/400?random=${product.id}1'">
            </div>
            <div class="modal-thumbnails">
                <div class="thumb-img active" onclick="changeModalDisplayImage(this, '${images[0]}', ${product.id}1)"><img src="${images[0]}" onerror="this.src='https://picsum.photos/100/100?random=${product.id}1'"></div>
                <div class="thumb-img" onclick="changeModalDisplayImage(this, '${images[1]}', ${product.id}2)"><img src="${images[1]}" onerror="this.src='https://picsum.photos/100/100?random=${product.id}2'"></div>
                <div class="thumb-img" onclick="changeModalDisplayImage(this, '${images[2]}', ${product.id}3)"><img src="${images[2]}" onerror="this.src='https://picsum.photos/100/100?random=${product.id}3'"></div>
                <div class="thumb-img" onclick="changeModalDisplayImage(this, '${images[3]}', ${product.id}4)"><img src="${images[3]}" onerror="this.src='https://picsum.photos/100/100?random=${product.id}4'"></div>
            </div>
        </div>
        
        <div class="modal-info">
            <h2>${product.title}</h2>
            <span class="mantra-count"><i class="fas fa-music"></i> ${product.trackCount}</span>
            
            <div class="price-box" style="margin-top: 10px;">
                <span class="current-price" style="font-size: 2rem; color: var(--primary-gold);">₹${currentPrice}</span>
                <span class="original-price" style="font-size: 1.2rem;">₹${product.basePrice}</span>
                <span style="color: #cc0000; font-weight: bold; font-size: 1rem;">(${product.discountPercent}% OFF)</span>
            </div>
            
            <p class="modal-desc">${product.desc}</p>
            
            <button class="action-btn" onclick="addModalItemToCart(event, ${product.id})">
                <i class="fas fa-shopping-basket"></i> ADD TO CART
            </button>
        </div>
    `;
    
    modal.classList.add("open");
}

// Controller to toggle active main view image inside modal window
function changeModalDisplayImage(thumbnailElement, newSrc, fallbackId) {
    const mainImg = document.getElementById("extended-main-img");
    mainImg.src = newSrc;
    // Set fallback source in case user image paths do not load
    mainImg.onerror = function() { this.src = `https://picsum.photos/400/400?random=${fallbackId}`; };

    // Remove active style ring border from all thumbnails
    const siblings = thumbnailElement.parentElement.querySelectorAll(".thumb-img");
    siblings.forEach(el => el.classList.remove("active"));
    
    // Add active styling back to clicked image box
    thumbnailElement.classList.add("active");
}

function closeProductModal() {
    document.body.style.overflow = "auto"; // Re-enable background scrolling
    document.getElementById("product-detail-modal").classList.remove("open");
}

// Dynamic cart addition specifically configured for product modal context
function addModalItemToCart(event, productId) {
    event.stopPropagation(); // Stop window collision events
    addToCart(productId);
    closeProductModal(); // Closes screen popup and slides open cart drawer
}

/* --- Shopping Cart Core Logic Engine --- */
function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("open");
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const calculatedPrice = Math.round(product.basePrice * (1 - product.discountPercent / 100));
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: product.id, title: product.title, price: calculatedPrice, quantity: 1 });
    }
    updateCartUI();
    document.getElementById("cart-sidebar").classList.add("open");
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartCountEl = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");
    
    let totalItemsCount = 0;
    let totalPrice = 0;
    
    cartItemsContainer.innerHTML = "";
    
    cart.forEach(item => {
        totalItemsCount += item.quantity;
        totalPrice += (item.price * item.quantity);
        
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="item-details">
                <h4>${item.title}</h4>
                <p>₹${item.price} x ${item.quantity}</p>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        cartItemsContainer.appendChild(div);
    });
    
    cartCountEl.innerText = totalItemsCount;
    cartTotalEl.innerText = `₹${totalPrice}`;
}

function checkoutToWhatsApp() {
    if (cart.length === 0) {
        alert("Your sacred cart is empty. Please add items to order.");
        return;
    }
    
    let message = `*✨ New Order from Bhagwati Divine Website ✨*\n\n`;
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. *${item.title}*\n   Qty: ${item.quantity} | Price: ₹${itemTotal}\n\n`;
    });
    
    message += `-------------------------\n`;
    message += `*Grand Total: ₹${total}*\n-------------------------\n\n`;
    message += `Please confirm my order and send over details for delivery and payment! 🙏`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}
            `images/prod${prod.id}-1.jpg`,
            `images/prod${prod.id}-2.jpg`,
            `images/prod${prod.id}-3.jpg`,
            `images/prod${prod.id}-4.jpg`
        ];

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="image-slider-container">
                <span class="discount-badge">${prod.discountPercent}% OFF</span>
                <button class="slider-arrow prev-arrow" onclick="moveSlider(${prod.id}, -1)">&lt;</button>
                <div class="slider-track" id="slider-track-${prod.id}" data-active-index="0">
                    <img src="${images[0]}" alt="${prod.title} View 1">
                    <img src="${images[1]}" alt="${prod.title} View 2">
                    <img src="${images[2]}" alt="${prod.title} View 3">
                    <img src="${images[3]}" alt="${prod.title} View 4">
                </div>
                <button class="slider-arrow next-arrow" onclick="moveSlider(${prod.id}, 1)">&gt;</button>
                <div class="slider-dots">
                    <span class="dot active" onclick="jumpToSlide(${prod.id}, 0)"></span>
                    <span class="dot" onclick="jumpToSlide(${prod.id}, 1)"></span>
                    <span class="dot" onclick="jumpToSlide(${prod.id}, 2)"></span>
                    <span class="dot" onclick="jumpToSlide(${prod.id}, 3)"></span>
                </div>
            </div>
            <div class="product-details">
                <h3>${prod.title}</h3>
                <span class="mantra-count"><i class="fas fa-music"></i> ${prod.trackCount}</span>
                <div class="price-box">
                    <span class="current-price">₹${currentPrice}</span>
                    <span class="original-price">₹${prod.basePrice}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${prod.id})">
                    <i class="fas fa-shopping-basket"></i> Add To Cart
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// 4-Image Slider Navigation Controller
function moveSlider(productId, direction) {
    const track = document.getElementById(`slider-track-${productId}`);
    let currentIndex = parseInt(track.getAttribute("data-active-index"));
    
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 3;
    if (currentIndex > 3) currentIndex = 0;
    
    jumpToSlide(productId, currentIndex);
}

function jumpToSlide(productId, slideIndex) {
    const track = document.getElementById(`slider-track-${productId}`);
    const card = track.closest(".product-card");
    const dots = card.querySelectorAll(".dot");
    
    track.setAttribute("data-active-index", slideIndex);
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        if (index === slideIndex) dot.classList.add("active");
        else dot.classList.remove("active");
    });
}

// Shopping Cart Core Functions
function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("open");
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const calculatedPrice = Math.round(product.basePrice * (1 - product.discountPercent / 100));
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: calculatedPrice,
            quantity: 1
        });
    }
    updateCartUI();
    // Auto-open cart sidebar to notify user item was added
    document.getElementById("cart-sidebar").classList.add("open");
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartCountEl = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");
    
    let totalItemsCount = 0;
    let totalPrice = 0;
    
    cartItemsContainer.innerHTML = "";
    
    cart.forEach(item => {
        totalItemsCount += item.quantity;
        totalPrice += (item.price * item.quantity);
        
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="item-details">
                <h4>${item.title}</h4>
                <p>₹${item.price} x ${item.quantity}</p>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        cartItemsContainer.appendChild(div);
    });
    
    cartCountEl.innerText = totalItemsCount;
    cartTotalEl.innerText = `₹${totalPrice}`;
}

// WhatsApp Integration Engine
function checkoutToWhatsApp() {
    if (cart.length === 0) {
        alert("Your sacred cart is empty. Please add items to order.");
        return;
    }
    
    let message = `*✨ New Order from Bhagwati Divine Website ✨*\n\n`;
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. *${item.title}*\n   Qty: ${item.quantity} | Price: ₹${itemTotal}\n\n`;
    });
    
    message += `-------------------------\n`;
    message += `*Grand Total: ₹${total}*\n-------------------------\n\n`;
    message += `Please confirm my order and send over details for delivery and payment! 🙏`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}
