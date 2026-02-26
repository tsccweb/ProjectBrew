import './About.css'

function About() {
  return (
    <div className="about fade-in">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Discover the story behind Project Brew</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop" 
              alt="Coffee Shop Interior" 
            />
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Welcome to Project Brew, where passion meets perfection in every cup. 
              Founded with a vision to bring the finest coffee and dairy experiences 
              to our community, we have been serving quality beverages that delight 
              the senses.
            </p>
            <p>
              Our journey began with a simple belief: great coffee and dairy products 
              should be accessible to everyone. We source our beans from sustainable 
              farms and partner with local dairy providers to ensure freshness and 
              quality in every sip.
            </p>
            <p>
              At Project Brew, we don't just serve beverages – we create experiences. 
              Each cup is crafted with care, each recipe is perfected through 
              experimentation, and each customer is treated like family.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <span className="feature-icon">☕</span>
                <span>Premium Coffee</span>
              </div>
              <div className="about-feature">
                <span className="feature-icon">🥛</span>
                <span>Fresh Dairy</span>
              </div>
              <div className="about-feature">
                <span className="feature-icon">❤️</span>
                <span>Made with Love</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
