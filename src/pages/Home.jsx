import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    '/wallpaper.jpg',
    '/pb.jpg',
    '/pb1.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slideshow">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Project Brew</h1>
          <p className="hero-subtitle">Coffee and Dairies Made with Passion</p>
          <Link to="/menu" className="hero-button">
            Explore Menu
          </Link>
        </div>
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <div className="featured-container">
          <h2 className="featured-title">Our Specialties</h2>
          <p className="featured-subtitle">Discover our handcrafted selections</p>
          <div className="featured-grid">
            <div className="featured-card">
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop" 
                  alt="Coffee" 
                />
              </div>
              <div className="card-content">
                <h3>Premium Coffee</h3>
                <p>Rich, aromatic blends crafted from the finest beans sourced from around the world.</p>
              </div>
            </div>
            <div className="featured-card">
              <div className="card-image">
                <img 
                  src="yellow cake.jpg" 
                  alt="Pastries" 
                />
              </div>
              <div className="card-content">
                <h3>Pastries</h3>
                <p>Freshly baked pastries with buttery flaky layers and delicious fillings.</p>
              </div>
            </div>
            <div className="featured-card">
              <div className="card-image">
                <img 
                  src="matu.jpg" 
                  alt="Dairy Products" 
                />
              </div>
              <div className="card-content">
                <h3>Dairy Products</h3>
                <p>Fresh, creamy dairy products from local farms, delivered to your cup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
