// Global Configuration
const WHATSAPP_NUMBER = "919999999999"; // Replace with your actual business WhatsApp number (with country code)

// 11 Unique Chanting Products Setup Data
const productsData = [
    { id: 1, title: "Ananda 20-in-1 Premium Chanter", basePrice: 1499, discountPercent: 30, trackCount: "20 Meditative Chants" },
    { id: 2, title: "Devi Divine Premium Sound Machine", basePrice: 1999, discountPercent: 35, trackCount: "35 Durga & Lakshmi Chants" },
    { id: 3, title: "Shiva Tandava High-Bass Player", basePrice: 1299, discountPercent: 25, trackCount: "11 Powerful Shiva Mantras" },
    { id: 4, title: "Krishna Leela Pocket Eco-Chanter", basePrice: 899, discountPercent: 20, trackCount: "15 Maha-Mantra Tracks" },
    { id: 5, title: "Ganesha Vignaharta Digital Box", basePrice: 1599, discountPercent: 40, trackCount: "21 Ganpati Chants & Aartis" },
    { id: 6, title: "Hanuman Sankat Mochan Continuous Box", basePrice: 1399, discountPercent: 30, trackCount: "7 Chalisa & Mantra Modes" },
    { id: 7, title: "Gayatri Mantra Solar-Powered Device", basePrice: 2499, discountPercent: 45, trackCount: "Continuous Gayatri Vedic Audio" },
    { id: 8, title: "Vedic Aura All-in-One Audio Machine", basePrice: 2999, discountPercent: 50, trackCount: "108 Ancient Vedic Hymns" },
    { id: 9, title: "Shanti Harmonious Portable Speaker", basePrice: 1199, discountPercent: 15, trackCount: "5 Soothing Ambient Tracks" },
    { id: 10, title: "Rudraksha Designer Special Edition Box", basePrice: 3499, discountPercent: 35, trackCount: "50 Ultimate Divine Meditations" },
    { id: 11, title: "Mini Spiritual Resonance Pocket Plug", basePrice: 699, discountPercent: 10, trackCount: "3 Essential Peace Chants" }
];

let cart = [];

// Initialize and Generate Dynamic Layouts
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUI();
});

// Build 11 product elements completely inside the grid dynamically
function renderProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    productsData.forEach(prod => {
        const currentPrice = Math.round(prod.basePrice * (1 - prod.discountPercent / 100));
        
        // UPDATED: Points to your local 'images' folder for GitHub Pages setup
        const images = [
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
