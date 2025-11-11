# CompanyApp - Professional Company Website

A modern, fully-featured React company website with product catalogs, team profiles, testimonials, and more.

## 🌟 Features

### ✅ Complete Feature Set

- **🏠 Home Page**
  - Hero section with call-to-action
  - Features showcase section
  - Team members display
  - Trusted partners section
  - Client testimonials

- **📦 Products & Services**
  - Product catalog with multiple categories
  - Category filtering system
  - Detailed product cards with features
  - Responsive grid layout
  - Price display

- **👥 Team Section**
  - Team member profiles with images
  - Social media links (LinkedIn, Twitter, Email)
  - Team member bio and position information
  - Hover effects and animations

- **🤝 Partners Section**
  - Showcase of trusted partners
  - Partner logos and descriptions
  - Professional grid layout
  - Interactive hover effects

- **💬 Testimonials**
  - Customer testimonials with ratings
  - Profile images and company information
  - Star ratings display
  - Responsive testimonial cards

- **📄 About Page**
  - Company story and mission
  - Core values section
  - Benefits list
  - Team and partners integration

- **📧 Contact Page**
  - Contact form with validation
  - Company contact information
  - Business hours
  - Social media links
  - Success message on form submission
  - Two-column responsive layout

- **🧭 Navigation**
  - Sticky header with navigation menu
  - Mobile-responsive hamburger menu
  - Page routing without page reload
  - Active page highlighting

- **🎨 Professional Footer**
  - Company information
  - Quick links
  - Contact details
  - Social media links
  - Copyright information

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header with menu
│   ├── Header.css
│   ├── Footer.jsx      # Footer with company info
│   ├── Footer.css
│   ├── Team.jsx        # Team members display
│   ├── Team.css
│   ├── Partners.jsx    # Partners showcase
│   ├── Partners.css
│   ├── Testimonials.jsx # Client testimonials
│   └── Testimonials.css
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Home.css
│   ├── Products.jsx    # Products with filtering
│   ├── Products.css
│   ├── About.jsx       # About page
│   ├── About.css
│   ├── Contact.jsx     # Contact form page
│   └── Contact.css
├── data/               # JSON data files
│   ├── products.json   # Product listings
│   ├── categories.json # Product categories
│   ├── team.json       # Team member information
│   ├── partners.json   # Partner companies
│   └── testimonials.json # Customer testimonials
├── App.jsx             # Main app component with routing
├── App.css             # App styles
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## 📊 Data Structure

### Products (products.json)
```json
{
  "id": 1,
  "name": "Product Name",
  "categoryId": 1,
  "price": 99.99,
  "description": "Description",
  "features": ["Feature 1", "Feature 2"],
  "image": "image-url"
}
```

### Categories (categories.json)
```json
{
  "id": 1,
  "name": "Category Name",
  "description": "Description",
  "icon": "Emoji Icon"
}
```

### Team (team.json)
```json
{
  "id": 1,
  "name": "Person Name",
  "position": "Job Title",
  "bio": "Bio",
  "image": "image-url",
  "social": {
    "linkedin": "url",
    "twitter": "url",
    "email": "email"
  }
}
```

### Partners (partners.json)
```json
{
  "id": 1,
  "name": "Partner Name",
  "logo": "logo-url",
  "description": "Description"
}
```

### Testimonials (testimonials.json)
```json
{
  "id": 1,
  "name": "Person Name",
  "position": "Job Title",
  "company": "Company Name",
  "rating": 5,
  "message": "Testimonial message",
  "image": "image-url"
}
```

## 🎨 Design Features

- **Modern Gradient Design**: Purple and blue gradients for a professional look
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Hover effects and transitions throughout
- **Professional Color Scheme**: 
  - Primary: #667eea (Purple Blue)
  - Secondary: #764ba2 (Deep Purple)
  - Background: #f8f9fa (Light Gray)
  - Text: #2c3e50 (Dark Blue)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the provided local URL (typically http://localhost:5173)

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Customization

### Updating Products
Edit `src/data/products.json` to add, remove, or modify products:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Your Product",
      "categoryId": 1,
      "price": 99.99,
      "description": "Your description",
      "features": ["Your features"],
      "image": "your-image-url"
    }
  ]
}
```

### Updating Team Members
Edit `src/data/team.json` to update team information:

```json
{
  "team": [
    {
      "id": 1,
      "name": "Team Member Name",
      "position": "Position",
      "bio": "Bio",
      "image": "image-url",
      "social": {
        "linkedin": "url",
        "twitter": "url",
        "email": "email@example.com"
      }
    }
  ]
}
```

### Updating Partners
Edit `src/data/partners.json`:

```json
{
  "partners": [
    {
      "id": 1,
      "name": "Partner Name",
      "logo": "logo-url",
      "description": "Description"
    }
  ]
}
```

### Updating Testimonials
Edit `src/data/testimonials.json`:

```json
{
  "testimonials": [
    {
      "id": 1,
      "name": "Customer Name",
      "position": "Title",
      "company": "Company",
      "rating": 5,
      "message": "Your testimonial",
      "image": "image-url"
    }
  ]
}
```

### Updating Contact Information
Update the contact details in:
- `src/components/Footer.jsx` - Footer contact info
- `src/pages/Contact.jsx` - Contact page information

## 🎯 Features Highlights

### Responsive Design
- Desktop, tablet, and mobile optimized
- Hamburger menu for mobile navigation
- Flexible grid layouts

### Product Filtering
- Filter products by category
- "All Products" view
- Category-specific information display

### Form Validation
- Contact form with required fields
- Email validation
- Success message display
- Form reset after submission

### Performance
- Optimized images (using Unsplash URLs as placeholders)
- Efficient state management
- CSS transitions and animations
- Fast page loads with Vite

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License
This project is open source and available for personal and commercial use.

## 🤝 Contributing
Feel free to modify and enhance this template for your needs!

---

**Ready to deploy?** Build the project with `npm run build` and deploy the `dist/` folder to your hosting provider.
