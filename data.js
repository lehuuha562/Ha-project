// Main Products Data
const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        price: 299000,
        category: "t-shirts",
        rating: 4.8,
        specs: "100% Cotton",
        description: "Essential basic white tee",
        popularity: 98,
        discount: 0,
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Grey"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Essentials"
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        price: 899000,
        category: "pants",
        rating: 4.7,
        specs: "Stretch Denim",
        description: "Modern slim fit design",
        popularity: 95,
        discount: 10,
        sizes: ["28", "30", "32", "34"],
        colors: ["Blue", "Black"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Denim"
    },
    {
        id: 3,
        name: "Oversized Hoodie",
        price: 599000,
        category: "hoodies",
        rating: 4.9,
        specs: "Cotton Blend",
        description: "Comfortable street style",
        popularity: 96,
        discount: 0,
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Grey", "Navy"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Street"
    },
    {
        id: 4,
        name: "Summer Dress",
        price: 799000,
        category: "dresses",
        rating: 4.6,
        specs: "Light fabric",
        description: "Perfect for summer",
        popularity: 94,
        discount: 15,
        sizes: ["S", "M", "L"],
        colors: ["Floral", "Blue", "Pink"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Fashion"
    }
];

// New Arrivals Collection
const newArrivals = [
    {
        id: 101,
        name: "Summer Collection Floral Dress",
        price: 899000,
        category: "dresses",
        rating: 4.9,
        specs: "Light Chiffon",
        description: "New Summer Collection",
        badge: "New",
        sizes: ["S", "M", "L"],
        colors: ["Floral Blue", "Floral Pink"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Fashion"
    },
    {
        id: 102,
        name: "Urban Street Jacket",
        price: 1499000,
        category: "jackets",
        rating: 4.8,
        specs: "Waterproof",
        description: "Limited Edition",
        badge: "New",
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Navy"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Street"
    },
    {
        id: 103,
        name: "Premium Denim Collection",
        price: 1299000,
        category: "pants",
        rating: 4.9,
        specs: "Raw Denim",
        description: "Exclusive Release",
        badge: "New",
        sizes: ["30", "32", "34"],
        colors: ["Indigo", "Black"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Denim"
    }
];

// Seasonal Collection
const seasonalCollection = [
    {
        id: 201,
        name: "Summer Beach Maxi Dress",
        price: 1299000,
        category: "dresses",
        rating: 4.8,
        specs: "Lightweight fabric",
        description: "Perfect for beach vacations",
        badge: "Summer'24",
        sizes: ["S", "M", "L"],
        colors: ["Ocean Blue", "Coral"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Fashion"
    },
    {
        id: 202,
        name: "Linen Blend Shirt",
        price: 799000,
        category: "shirts",
        rating: 4.7,
        specs: "100% Linen",
        description: "Breathable summer shirt",
        badge: "Summer'24",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Beige"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Essentials"
    }
];

// Best Sellers Collection
const bestSellers = [
    {
        id: 301,
        name: "Classic Fit Blazer",
        price: 2499000,
        category: "jackets",
        rating: 4.9,
        specs: "Premium Wool Blend",
        description: "Timeless business essential",
        badge: "Best Seller",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Formal"
    },
    {
        id: 302,
        name: "High-Waist Pants",
        price: 899000,
        category: "pants",
        rating: 4.8,
        specs: "Stretch Fabric",
        description: "Comfortable office wear",
        badge: "Best Seller",
        sizes: ["S", "M", "L"],
        colors: ["Black", "Beige"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Formal"
    }
];

// Recommended Products
const recommendedProducts = [
    {
        id: 401,
        name: "Casual Weekend Shirt",
        price: 699000,
        category: "shirts",
        rating: 4.7,
        specs: "Cotton Oxford",
        description: "Perfect for casual outings",
        sizes: ["S", "M", "L"],
        colors: ["Blue Stripe", "White"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Essentials"
    },
    {
        id: 402,
        name: "Slim Fit Chinos",
        price: 799000,
        category: "pants",
        rating: 4.6,
        specs: "Cotton Twill",
        description: "Versatile everyday pants",
        sizes: ["30", "32", "34"],
        colors: ["Khaki", "Navy"],
        image: "/api/placeholder/300/400",
        brand: "Ha's Essentials"
    }
];

// Categories
const categories = [
    {
        id: "t-shirts",
        name: "T-Shirts",
        description: "Essential everyday wear",
        image: "/api/placeholder/300/400",
        itemCount: 45
    },
    {
        id: "dresses",
        name: "Dresses",
        description: "For every occasion",
        image: "/api/placeholder/300/400",
        itemCount: 32
    },
    {
        id: "pants",
        name: "Pants",
        description: "Comfortable bottoms",
        image: "/api/placeholder/300/400",
        itemCount: 28
    },
    {
        id: "jackets",
        name: "Jackets",
        description: "Stay stylish & warm",
        image: "/api/placeholder/300/400",
        itemCount: 23
    }
];

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function getCategories() {
    return [...new Set(products.map(p => p.category))];
}

function getBrands() {
    return [...new Set(products.map(p => p.brand))];
}

function calculateDiscountedPrice(price, discount) {
    return price - (price * (discount || 0) / 100);
}

// Rendering Functions
function renderProducts(containerId, products) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        products.forEach(product => {
            container.appendChild(createProductCard(product));
        });
    }
}

function renderAllSections() {
    renderProducts('new-arrivals', newArrivals);
    renderProducts('seasonal-products', seasonalCollection);
    renderProducts('best-sellers', bestSellers);
    renderProducts('recommended-products', recommendedProducts);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderAllSections();
});