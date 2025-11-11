# Data Customization Examples

This guide shows you how to customize all the JSON data files to match your company.

## 1. Products Customization

### File: `src/data/products.json`

**Add a new product:**

```json
{
  "products": [
    {
      "id": 7,
      "name": "AI-Powered Analytics",
      "categoryId": 3,
      "price": 599.99,
      "description": "Advanced analytics powered by artificial intelligence",
      "features": [
        "Real-time dashboards",
        "Predictive analytics",
        "ML-based insights",
        "Custom reports"
      ],
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ]
}
```

**Complete example with 3 products:**

```json
{
  "products": [
    {
      "id": 1,
      "name": "Starter Plan",
      "categoryId": 1,
      "price": 49.99,
      "description": "Perfect for small teams getting started",
      "features": [
        "Up to 5 users",
        "Basic features",
        "Email support",
        "1GB storage"
      ],
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      "id": 2,
      "name": "Professional Plan",
      "categoryId": 1,
      "price": 199.99,
      "description": "For growing businesses",
      "features": [
        "Up to 50 users",
        "Advanced features",
        "Priority support",
        "100GB storage",
        "Custom integrations"
      ],
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      "id": 3,
      "name": "Enterprise Plan",
      "categoryId": 1,
      "price": 999.99,
      "description": "For large organizations",
      "features": [
        "Unlimited users",
        "All features",
        "24/7 dedicated support",
        "Unlimited storage",
        "White-label options"
      ],
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    }
  ]
}
```

---

## 2. Categories Customization

### File: `src/data/categories.json`

**Add new categories:**

```json
{
  "categories": [
    {
      "id": 1,
      "name": "Software",
      "description": "Digital software solutions for your business",
      "icon": "💻"
    },
    {
      "id": 2,
      "name": "Hardware",
      "description": "Premium hardware products and devices",
      "icon": "🖥️"
    },
    {
      "id": 3,
      "name": "Support",
      "description": "Professional support and maintenance services",
      "icon": "🤝"
    },
    {
      "id": 4,
      "name": "Training",
      "description": "Comprehensive training programs",
      "icon": "📚"
    }
  ]
}
```

---

## 3. Team Customization

### File: `src/data/team.json`

**Complete team example:**

```json
{
  "team": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "position": "Chief Executive Officer",
      "bio": "15+ years leading digital transformation with passion for innovation",
      "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      "social": {
        "linkedin": "https://linkedin.com/in/alice-johnson",
        "twitter": "https://twitter.com/alicejohnson",
        "email": "alice@company.com"
      }
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "position": "VP of Technology",
      "bio": "Cloud architect and open-source enthusiast with 12 years of experience",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      "social": {
        "linkedin": "https://linkedin.com/in/bob-smith",
        "twitter": "https://twitter.com/bobsmith",
        "email": "bob@company.com"
      }
    },
    {
      "id": 3,
      "name": "Carol Davis",
      "position": "Head of Design",
      "bio": "Award-winning designer focused on user experience and accessibility",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      "social": {
        "linkedin": "https://linkedin.com/in/carol-davis",
        "twitter": "https://twitter.com/caroldavis",
        "email": "carol@company.com"
      }
    },
    {
      "id": 4,
      "name": "David Lee",
      "position": "Customer Success Manager",
      "bio": "Dedicated to ensuring every customer achieves their goals",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      "social": {
        "linkedin": "https://linkedin.com/in/david-lee",
        "twitter": "https://twitter.com/davidlee",
        "email": "david@company.com"
      }
    }
  ]
}
```

---

## 4. Partners Customization

### File: `src/data/partners.json`

**Add your trusted partners:**

```json
{
  "partners": [
    {
      "id": 1,
      "name": "AWS",
      "logo": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
      "description": "Cloud infrastructure and services"
    },
    {
      "id": 2,
      "name": "Google Cloud",
      "logo": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
      "description": "Advanced cloud computing platform"
    },
    {
      "id": 3,
      "name": "Microsoft Azure",
      "logo": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
      "description": "Enterprise cloud solutions"
    },
    {
      "id": 4,
      "name": "Stripe",
      "logo": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
      "description": "Payment processing platform"
    },
    {
      "id": 5,
      "name": "Slack",
      "logo": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
      "description": "Team communication platform"
    },
    {
      "id": 6,
      "name": "GitHub",
      "logo": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
      "description": "Code repository and collaboration"
    }
  ]
}
```

---

## 5. Testimonials Customization

### File: `src/data/testimonials.json`

**Add client testimonials:**

```json
{
  "testimonials": [
    {
      "id": 1,
      "name": "Michael Chen",
      "position": "CEO",
      "company": "TechStart Inc",
      "rating": 5,
      "message": "Outstanding service! Their team helped us scale from 10 to 100 employees while maintaining quality.",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      "id": 2,
      "name": "Sarah Williams",
      "position": "Product Manager",
      "company": "Digital Innovations",
      "rating": 5,
      "message": "The best investment we made for our business. ROI was visible within the first month!",
      "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      "id": 3,
      "name": "James Martinez",
      "position": "Director of Operations",
      "company": "Global Solutions Ltd",
      "rating": 5,
      "message": "Professional, reliable, and always going the extra mile. Highly recommend to everyone!",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      "id": 4,
      "name": "Emily Rodriguez",
      "position": "Marketing Director",
      "company": "Brand Collective",
      "rating": 5,
      "message": "Exceptional support and innovative solutions. They understand our business needs perfectly.",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ]
}
```

---

## Image URLs to Use

### Free Image Sources

**For Products:**
- https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop
- https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop
- https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop

**For Team Members:**
- https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop
- https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop
- https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop
- https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop

**For Partners:**
- https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop

### More Image Resources:
- [Unsplash](https://unsplash.com) - High-quality free photos
- [Pexels](https://www.pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images
- [Picsum Photos](https://picsum.photos) - Placeholder images

---

## Icon Emojis Reference

Use these emojis in your categories:

```
📦 - Package/Products
🛠️ - Tools/Services
💡 - Ideas/Solutions
🚀 - Launch/Growth
🔒 - Security
👥 - Team/People
💼 - Business
📊 - Analytics
💻 - Software/Tech
🌟 - Premium/Featured
🎯 - Goal/Target
📱 - Mobile/App
🌍 - Global
⚡ - Speed/Lightning
🎨 - Design/Creative
```

---

## Complete Real-World Example

Here's a complete example for a SaaS company:

### products.json
```json
{
  "products": [
    {
      "id": 1,
      "name": "Basic Plan",
      "categoryId": 1,
      "price": 29.99,
      "description": "Perfect for individuals and small teams",
      "features": [
        "1-3 team members",
        "Basic automation",
        "Email support",
        "5GB storage"
      ],
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    }
  ]
}
```

### categories.json
```json
{
  "categories": [
    {
      "id": 1,
      "name": "Plans",
      "description": "Flexible pricing for every size business",
      "icon": "💳"
    }
  ]
}
```

### team.json
```json
{
  "team": [
    {
      "id": 1,
      "name": "Your Name",
      "position": "Founder & CEO",
      "bio": "Your bio here",
      "image": "your-image-url",
      "social": {
        "linkedin": "your-linkedin-url",
        "twitter": "your-twitter-url",
        "email": "you@company.com"
      }
    }
  ]
}
```

---

## Tips for Best Results

1. **Use consistent image dimensions:**
   - Products: 400x300px
   - Team members: 400x400px
   - Partners: 200x100px

2. **Keep descriptions concise:**
   - Product descriptions: 1-2 sentences
   - Team bios: 1-2 sentences
   - Partner descriptions: 1 sentence

3. **Use real information:**
   - Replace placeholder URLs with real ones
   - Use actual social media links
   - Add real email addresses

4. **Maintain consistency:**
   - Use consistent emoji style
   - Keep similar formatting across entries
   - Use professional images

---

Happy customizing! 🎉
