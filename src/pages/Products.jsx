import { useState, useMemo } from 'react';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import './Products.css';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return productsData.products;
    }
    return productsData.products.filter(
      product => product.categoryId === parseInt(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="products-page">
      <section className="products-hero">
        <h1>Our Products & Services</h1>
        <p>Explore our comprehensive range of solutions</p>
      </section>

      <div className="container">
        <div className="products-content">
          <aside className="categories-sidebar">
            <h3>Categories</h3>
            <div className="category-filters">
              <button
                className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Products
              </button>
              {categoriesData.categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id.toString() ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id.toString())}
                >
                  <span>{category.icon}</span> {category.name}
                </button>
              ))}
            </div>
          </aside>

          <main className="products-main">
            <div className="category-info">
              {selectedCategory !== 'all' && (
                <div className="selected-category-info">
                  {(() => {
                    const cat = categoriesData.categories.find(
                      c => c.id === parseInt(selectedCategory)
                    );
                    return (
                      <div>
                        <h2>{cat.name}</h2>
                        <p>{cat.description}</p>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>

            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-content">
                    <h3>{product.name}</h3>
                    <p className="description">{product.description}</p>
                    <div className="features">
                      <h4>Features:</h4>
                      <ul>
                        {product.features.map((feature, index) => (
                          <li key={index}>✓ {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="product-footer">
                      <span className="price">${product.price}</span>
                      <button className="btn-primary">Learn More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
