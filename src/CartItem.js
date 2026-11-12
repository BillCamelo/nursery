import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calcular el costo total de todos los artículos en el carrito
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.cost.replace('$', ''));
      return total + (priceNumber * item.quantity);
    }, 0).toFixed(2);
  };

  // Calcular el costo total para un artículo en específico (precio * cantidad)
  const calculateTotalCost = (item) => {
    const priceNumber = parseFloat(item.cost.replace('$', ''));
    return (priceNumber * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Coming Soon: The checkout functionality will be available soon!');
  };

  return (
    <div className="cart-item-container">
      <h2 className="cart-heading">Shopping Cart</h2>
      
      <div className="cart-total-amount">
        Total Cart Amount: ${calculateTotalAmount()}
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your shopping cart is empty.</p>
          <button className="get-started-btn" onClick={onContinueShopping} style={{ marginTop: '20px' }}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">Unit Price: {item.cost}</p>
                  <p className="cart-item-total-cost">Total: ${calculateTotalCost(item)}</p>
                  
                  <div className="cart-item-quantity-control">
                    <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  
                  <button className="delete-btn" onClick={() => handleRemove(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="get-started-btn" onClick={onContinueShopping}>
              Continue Shopping
            </button>
            <button className="get-started-btn checkout-btn" onClick={handleCheckoutShopping}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;