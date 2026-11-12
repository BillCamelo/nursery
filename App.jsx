import React, { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
  };

  return (
    <div className="app">
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : showProductList ? (
        <ProductList onCartClick={handleCartClick} onHomeClick={handleHomeClick} />
      ) : (
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
      )}
    </div>
  );
}

export default App;