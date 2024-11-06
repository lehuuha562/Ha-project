// UI Functions
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    return card;
}

function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        productsContainer.appendChild(createProductCard(product));
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-count').textContent = cart.length;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    console.log("main.js loaded");
});

function createProductCard(product, isNew = false) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const badge = isNew ? '<div class="product-badge">New</div>' : '';
    const discount = product.discount ? `<div class="product-badge discount">${product.discount}% OFF</div>` : '';
    
    card.innerHTML = `
        ${badge}
        ${discount}
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-overlay">
                <button class="quick-view-btn">Quick View</button>
                <div class="size-options">
                    ${product.sizes.map(size => `
                        <div class="size-option">${size}</div>
                    `).join('')}
                </div>
                <div class="color-options">
                    ${product.colors.map(color => `
                        <div class="color-option" style="background-color: ${color.toLowerCase()}"></div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="rating">
                ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''}
                ${'☆'.repeat(5 - Math.ceil(product.rating))}
                <span class="rating-count">(${product.rating})</span>
            </div>
            <div class="price">
                ${formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                ${product.discount ? `<span class="original-price">${formatPrice(product.price)}</span>` : ''}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    // Add event listeners for quick view
    card.querySelector('.quick-view-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        showQuickView(product);
    });

    return card;
}

// Quick view function
function showQuickView(product) {
    // Implement quick view modal functionality here
    console.log('Quick view for:', product.name);
}

// Add to main.js
function createProductCard(product) {
    return `
        <div class="product-card">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <div class="size-options">
                        ${product.sizes.map(size => `
                            <span class="size-option">${size}</span>
                        `).join('')}
                    </div>
                    <button class="quick-view-btn">Quick View</button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="rating">
                    <span class="stars">★★★★${product.rating % 1 ? '½' : ''}</span>
                    <span class="rating-number">(${product.rating})</span>
                </div>
                <div class="product-price">
                    <span class="price">${formatPrice(product.price)}</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

function createCategoryCard(category) {
    return `
        <div class="category-card" onclick="filterByCategory('${category.id}')">
            <img src="${category.image}" alt="${category.name}">
            <div class="category-overlay">
                <h3>${category.name}</h3>
                <p>${category.itemCount} Items</p>
                <span class="view-more">Shop Now</span>
            </div>
        </div>
    `;
}

// Initialize sections
document.addEventListener('DOMContentLoaded', () => {
    // Render New Arrivals
    const newArrivalsContainer = document.getElementById('new-arrivals');
    newArrivalsContainer.innerHTML = newArrivals.map(product => 
        createProductCard(product)
    ).join('');

    // Render Seasonal Collection
    const seasonalContainer = document.getElementById('seasonal-products');
    seasonalContainer.innerHTML = seasonalCollection.map(product => 
        createProductCard(product)
    ).join('');

    // Render Categories
    const categoriesContainer = document.querySelector('.category-grid');
    categoriesContainer.innerHTML = categories.map(category => 
        createCategoryCard(category)
    ).join('');

    // Render Best Sellers
    const bestSellersContainer = document.getElementById('best-sellers');
    bestSellersContainer.innerHTML = bestSellers.map(product => 
        createProductCard(product)
    ).join('');

    // Render Recommended Products
    const recommendedContainer = document.getElementById('recommended-products');
    recommendedContainer.innerHTML = recommendedProducts.map(product => 
        createProductCard(product)
    ).join('');
});