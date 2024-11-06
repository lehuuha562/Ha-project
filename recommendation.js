// Recommendation System Configuration
const RECOMMENDATION_CONFIG = {
    weights: {
        ram: 0.3,
        storage: 0.25,
        screen: 0.25,
        camera: 0.2
    },
    similarityThreshold: 0.7,
    maxRecommendations: 4,
    popularityBonus: 0.2,
    categoryBoostFactor: 1.2,
    priceRangeThreshold: 0.3
};

// Enhanced KNN algorithm with weighted features
function calculateDistance(features1, features2) {
    const weights = Object.values(RECOMMENDATION_CONFIG.weights);
    return Math.sqrt(
        features1.reduce((sum, feature, index) => {
            return sum + weights[index] * Math.pow(feature - features2[index], 2);
        }, 0)
    );
}

// Get recommendations using enhanced collaborative filtering
function getRecommendations(userPrefs, k = 4) {
    // Calculate base distances
    const distances = products.map(product => ({
        ...product,
        distance: calculateDistance(userPrefs, product.features)
    }));
    
    // Add popularity bonus
    distances.forEach(product => {
        product.score = product.distance - (product.popularity / 100) * RECOMMENDATION_CONFIG.popularityBonus;
    });
    
    // Filter out items already in cart
    const cartIds = cart.map(item => item.id);
    const filteredDistances = distances.filter(product => !cartIds.includes(product.id));
    
    // Sort by score and select top k items
    return filteredDistances
        .sort((a, b) => a.score - b.score)
        .slice(0, k);
}

// Render recommendations
function renderRecommendations() {
    const recommendedContainer = document.getElementById('recommended-products');
    recommendedContainer.innerHTML = '';
    
    const recommendations = getRecommendations(userPreferences);
    recommendations.forEach(product => {
        recommendedContainer.appendChild(createProductCard(product));
    });
}