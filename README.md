# Kuuma - Coming Soon Page

Premium Sauna Wear brand landing page with intense heat and sauna-themed animations.

## 🔥 Features

- **Animated gradient background** - Continuously shifting heat colors (red, orange, yellow)
- **Rising steam particles** - 20+ floating steam clouds mimicking sauna steam
- **Glowing ember particles** - Hot glowing particles floating upward
- **Floating flame emojis** - Animated fire emojis with rotation
- **Heat distortion waves** - Layered heat wave effects
- **Mouse parallax effects** - Interactive elements that respond to mouse movement
- **Dynamic particle generation** - Continuous creation of new particles via JavaScript
- **Pulsing text effects** - "Things Are Warming Up..." with glowing animation
- Fully responsive design for all devices

## 🚀 Deploy to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Deploy from this directory:
```bash
vercel
```

3. Follow the prompts and your site will be live!

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub, GitLab, or Bitbucket
3. Click "Add New Project"
4. Import this repository
5. Click "Deploy"

### Option 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop this entire folder onto the dashboard
3. Your site will be deployed instantly!

## 📁 Project Structure

```
kuuma/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── vercel.json         # Vercel configuration
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit the gradient colors in `styles.css` in the body section:
```css
background: linear-gradient(45deg, 
    #FF0000,    /* Red */
    #FF4500,    /* Orange-red */
    #FF6B00,    /* Orange */
    #FF8C00,    /* Dark orange */
    #FFA500,    /* Orange */
    #FFB700,    /* Amber */
    #FFC300,    /* Gold */
    #FFD700     /* Golden yellow */
);
```

### Text Content
Change the main heading text in `index.html`:
```html
<h1 class="main-heading">Things Are Warming Up...</h1>
```

### Animation Speed
Adjust animation durations in `styles.css`:
- Background gradient: `animation: heatGradient 15s ease infinite;` (line 30)
- Steam particles: `animation: steamRise 12s ease-in-out infinite;` (line 146)
- Ember particles: `animation: emberFloat 8s ease-in-out infinite;` (line 207)
- Flame emojis: `animation: flameFloat 15s ease-in-out infinite;` (line 255)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2025 Kuuma. All rights reserved.

