import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Menu.css'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const { addToCart } = useCart()

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'pastries', label: 'Pastries' },
    { id: 'dairy', label: 'Dairy Products' }
  ]

  const products = [
    {
      id: 1,
      name: 'Espresso',
      description: 'Rich and bold single shot espresso',
      price: 120,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Perfect balance of espresso, steamed milk and foam',
      price: 150,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Smooth and creamy espresso with steamed milk',
      price: 160,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Americano',
      description: 'Classic espresso with hot water for a milder taste',
      price: 130,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Croissant',
      description: 'Buttery flaky croissant, perfectly baked golden brown',
      price: 80,
      category: 'pastries',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Danish Pastry',
      description: 'Sweet and tender Danish pastry filled with cream cheese',
      price: 120,
      category: 'pastries',
      image: 'https://images.unsplash.com/photo-1626803775151-61d7568fed56?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Blueberry Muffin',
      description: 'Freshly baked muffin bursting with juicy blueberries',
      price: 150,
      category: 'pastries',
      image: 'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Cinnamon Roll',
      description: 'Warm cinnamon roll topped with creamy frosting',
      price: 170,
      category: 'pastries',
      image: 'https://images.unsplash.com/photo-1517433670267-08eccd17e745?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      name: 'Fresh Milk',
      description: 'Farm-fresh pure milk, locally sourced',
      price: 80,
      category: 'dairy',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop'
    },
    {
      id: 10,
      name: 'Yogurt Drink',
      description: 'Probiotic yogurt drink for gut health',
      price: 100,
      category: 'dairy',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop'
    },
    {
      id: 11,
      name: 'Cheese Foam',
      description: 'Creamy cheese foam topping for drinks',
      price: 50,
      category: 'dairy',
      image: 'https://images.unsplash.com/photo-1626957341926-98752fc2ba90?w=400&h=300&fit=crop'
    },
    {
      id: 12,
      name: 'Milkshake',
      description: 'Thick and creamy milkshake with real fruits',
      price: 180,
      category: 'dairy',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
  }

  return (
    <div className="menu fade-in">
      {/* Menu Hero Section */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-subtitle">Explore our handcrafted selections</p>
        </div>
      </section>

      {/* Menu Content Section */}
      <section className="menu-content">
        <div className="menu-container">
          {/* Category Tabs */}
          <div className="menu-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`menu-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="menu-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="menu-card">
                <div className="menu-card-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="menu-card-content">
                  <h3 className="menu-card-title">{product.name}</h3>
                  <p className="menu-card-description">{product.description}</p>
                  <div className="menu-card-footer">
                    <span className="menu-card-price">₹{product.price}</span>
                    <button 
                      className="menu-card-button"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
