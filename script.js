// Email signup form handling
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const successMessage = document.getElementById('successMessage');
    const email = emailInput.value.trim();
    
    // Basic email validation
    if (email && validateEmail(email)) {
        // Show success message
        successMessage.classList.add('show');
        
        // Clear the input
        emailInput.value = '';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);
        
        // Example: Send to backend
        // fetch('/api/subscribe', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: email })
        // });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add parallax effect to heat waves on mouse move
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const waves = document.querySelectorAll('.heat-wave');
    waves.forEach((wave, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX * speed) - (speed / 2);
        const y = (mouseY * speed) - (speed / 2);
        
        wave.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Create additional dynamic heat particles
function createHeatParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    document.querySelector('.particles').appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Add new particles periodically
setInterval(createHeatParticle, 3000);

// Add hover effect to info cards
const infoCards = document.querySelectorAll('.info-card');
infoCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// Add input focus effects
const emailInput = document.getElementById('emailInput');
emailInput.addEventListener('focus', () => {
    emailInput.parentElement.style.transform = 'scale(1.02)';
});

emailInput.addEventListener('blur', () => {
    emailInput.parentElement.style.transform = 'scale(1)';
});

