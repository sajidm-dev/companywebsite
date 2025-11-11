# Quick Start Guide - CompanyApp

## 🚀 What's Included

Your professional company website now includes:

### Pages
1. **Home** - Hero section, features, team, partners, testimonials
2. **Products** - Complete product catalog with category filtering
3. **About** - Company story, mission, values, team, partners
4. **Contact** - Contact form, business information, social links

### Components
- Header with responsive navigation
- Footer with company info and social links
- Team member profiles
- Testimonials section
- Trusted partners showcase

### Data Files
All content is managed through JSON files:
- `src/data/products.json` - Products and pricing
- `src/data/categories.json` - Product categories
- `src/data/team.json` - Team member information
- `src/data/partners.json` - Partner companies
- `src/data/testimonials.json` - Customer reviews

## 📝 How to Customize

### 1. Update Company Information

Edit these files to change your company details:

**Header Logo** - `src/components/Header.jsx`
```jsx
<h1>Your Company Name</h1>
```

**Footer Information** - `src/components/Footer.jsx`
```jsx
<p>Email: your-email@company.com</p>
<p>Phone: (555) 123-4567</p>
<p>Address: Your Address</p>
```

### 2. Add Your Products

Edit `src/data/products.json`:
```json
{
  "products": [
    {
      "id": 1,
      "name": "Your Product",
      "categoryId": 1,
      "price": 99.99,
      "description": "Product description",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "image": "https://your-image-url.com/image.jpg"
    }
  ]
}
```

### 3. Update Categories

Edit `src/data/categories.json`:
```json
{
  "categories": [
    {
      "id": 1,
      "name": "Your Category",
      "description": "Category description",
      "icon": "🎯"
    }
  ]
}
```

### 4. Add Team Members

Edit `src/data/team.json`:
```json
{
  "team": [
    {
      "id": 1,
      "name": "John Doe",
      "position": "CEO",
      "bio": "Experience and bio",
      "image": "https://image-url.com/photo.jpg",
      "social": {
        "linkedin": "https://linkedin.com/in/johndoe",
        "twitter": "https://twitter.com/johndoe",
        "email": "john@company.com"
      }
    }
  ]
}
```

### 5. Add Partners

Edit `src/data/partners.json`:
```json
{
  "partners": [
    {
      "id": 1,
      "name": "Partner Company",
      "logo": "https://logo-url.com/logo.png",
      "description": "Partner description"
    }
  ]
}
```

### 6. Add Testimonials

Edit `src/data/testimonials.json`:
```json
{
  "testimonials": [
    {
      "id": 1,
      "name": "Customer Name",
      "position": "Job Title",
      "company": "Company Name",
      "rating": 5,
      "message": "What they said about your service",
      "image": "https://image-url.com/photo.jpg"
    }
  ]
}
```

## 🎨 Styling

### Colors
The website uses a professional color scheme:
- Primary Blue: `#667eea`
- Deep Purple: `#764ba2`
- Light Background: `#f8f9fa`
- Dark Text: `#2c3e50`

### Fonts
Currently using system fonts. To change fonts, edit `src/index.css`:
```css
:root {
  font-family: 'Your Font Name', system-ui, ...;
}
```

### CSS Files
Each component has its own CSS file:
- `src/components/Header.css`
- `src/components/Footer.css`
- `src/components/Team.css`
- `src/pages/Home.css`
- `src/pages/Products.css`
- `src/pages/About.css`
- `src/pages/Contact.css`

## 🔄 Running the App

### Development Mode
```bash
npm run dev
```
The app will run at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Creates optimized files in the `dist/` folder

### Preview Build
```bash
npm run preview
```

## 📸 Using Images

### Free Image Sources
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://www.pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images and videos
- [Lorem Picsum](https://picsum.photos) - Placeholder images

### How to Add Images

1. Get your image URL from an image service
2. Update the `image` field in your JSON data files:
```json
"image": "https://your-image-url.com/image.jpg"
```

3. For local images, place them in `src/assets/` and reference them:
```json
"image": "/src/assets/your-image.jpg"
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Deploy with one click!

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Done!

### Other Options
- GitHub Pages
- Heroku
- AWS S3 + CloudFront
- Your own server with Nginx/Apache

## 🔗 Features You Can Add

- Blog section
- Search functionality
- Shopping cart (with backend)
- User authentication
- Newsletter signup
- Live chat
- Booking system
- Payment integration

## 📚 Project Structure

```
companyapp/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── data/           # JSON data files
│   ├── App.jsx         # Main app
│   ├── main.jsx        # Entry point
│   ├── index.css       # Global styles
│   └── assets/         # Images and files
├── public/             # Static files
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── eslint.config.js    # Linting rules
└── index.html          # HTML entry point
```

## ✅ Checklist for Launch

- [ ] Update company name and logo
- [ ] Add your products and categories
- [ ] Add team member information
- [ ] Add trusted partners
- [ ] Add customer testimonials
- [ ] Update contact information
- [ ] Update social media links
- [ ] Review all pages for accuracy
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Set up hosting
- [ ] Deploy!

## 🆘 Need Help?

### Common Issues

**Images not showing?**
- Check the image URL is correct
- Make sure the domain allows hotlinking
- Try a different image source

**Styling looks wrong?**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Check CSS file paths

**Mobile menu not working?**
- Clear cache and refresh
- Check if JavaScript is enabled
- Test in different browser

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev)
- [CSS Tricks](https://css-tricks.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Happy building! 🚀**

If you have any questions or need more features, feel free to explore the source code and customize it to your needs!
