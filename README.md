# Kuuma - Coming Soon Page

Premium Sauna Wear brand landing page with heat-themed design.

## 🔥 Features

- Animated heat waves and particle effects
- Email signup form for launch notifications
- Fully responsive design
- Modern UI with smooth animations
- Social media integration

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
Edit the CSS variables in `styles.css`:
```css
:root {
    --flame-orange: #FF6B35;
    --hot-red: #E63946;
    --deep-red: #A4161A;
    --warm-yellow: #FFB703;
    --ember-glow: #FB8500;
}
```

### Email Integration
To connect the email form to a real backend, update the form submission in `script.js`:
```javascript
fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
});
```

### Social Media Links
Update the social media links in `index.html` by replacing the `#` in the `href` attributes with your actual social media URLs.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2025 Kuuma. All rights reserved.

