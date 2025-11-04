// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Create additional random steam particles dynamically
function createSteamParticle() {
    const steamContainer = document.querySelector('.steam-container');
    const steam = document.createElement('div');
    steam.className = 'steam';
    
    const size = Math.random() * 50 + 60; // 60-110px
    steam.style.width = `${size}px`;
    steam.style.height = `${size}px`;
    steam.style.left = `${Math.random() * 100}%`;
    steam.style.animationDuration = `${Math.random() * 6 + 10}s`; // 10-16s
    steam.style.animationDelay = `${Math.random() * 5}s`;
    
    steamContainer.appendChild(steam);
    
    // Remove after animation completes
    setTimeout(() => {
        steam.remove();
    }, 20000);
}

// Create additional random ember particles dynamically
function createEmberParticle() {
    const emberContainer = document.querySelector('.ember-container');
    const ember = document.createElement('div');
    ember.className = 'ember';
    
    const size = Math.random() * 4 + 3; // 3-7px
    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;
    ember.style.left = `${Math.random() * 100}%`;
    ember.style.animationDuration = `${Math.random() * 6 + 6}s`; // 6-12s
    ember.style.animationDelay = `${Math.random() * 3}s`;
    
    emberContainer.appendChild(ember);
    
    // Remove after animation completes
    setTimeout(() => {
        ember.remove();
    }, 15000);
}

// Periodically create new particles
setInterval(createSteamParticle, 2000);
setInterval(createEmberParticle, 1500);

// Create initial burst of particles
for (let i = 0; i < 5; i++) {
    setTimeout(createSteamParticle, i * 500);
    setTimeout(createEmberParticle, i * 300);
}

// Mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    // Move heat waves based on mouse position
    const heatWaves = document.querySelectorAll('.heat-wave');
    heatWaves.forEach((wave, index) => {
        const speed = (index + 1) * 15;
        wave.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
    
    // Move brand name slightly for parallax effect
    const brandName = document.querySelector('.brand-name');
    if (brandName) {
        brandName.style.transform = `translate(${mouseX * 15}px, ${mouseY * 15}px)`;
        brandName.style.transition = 'transform 0.3s ease-out';
    }
});
