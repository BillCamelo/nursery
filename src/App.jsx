import React, { useState } from 'react';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity. Discover beautiful houseplants to transform your living space into a natural sanctuary.</p>
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
            <div style={{ marginTop: '40px' }}>
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Product Listing & Shopping Cart Coming Next!</h2>
          <p>You clicked Get Started successfully.</p>
        </div>
      )}
    </div>
  );
}

export default App;