import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList({ onCartClick, onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  // Estado para llevar el registro de qué productos han sido agregados (para deshabilitar el botón)
  const [addedToCart, setAddedToCart] = useState({});

  // Calcular el número total de items en el carrito para la barra de navegación
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15", description: "Produces oxygen at night, improving indoor air quality." },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/08/11/chlorophytum-3530413_1280.jpg", cost: "$12", description: "Resilient plant that filters toxins from the air." },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2018/02/22/11/02/peace-lily-3173384_1280.jpg", cost: "$18", description: "Helps clean the air and blooms lovely white flowers." },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/06/25/11/21/fern-5339234_1280.jpg", cost: "$14", description: "Adds lush green foliage and acts as a natural humidifier." },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/06/09/04/41/rubber-plant-5276632_1280.jpg", cost: "$20", description: "Easy to grow with dark, glossy leaves that absorb toxins." },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/09/15/45/aloe-vera-3304899_1280.jpg", cost: "$10", description: "Known for its healing gel and air-purifying properties." }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2016/04/19/08/15/lavender-1338167_1280.jpg", cost: "$20", description: "Calming scent, great for relaxation and sleep." },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2017/04/11/15/55/flower-2222626_1280.jpg", cost: "$18", description: "Sweet fragrance that perfumes the evening air." },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2016/09/08/18/33/rosemary-1655353_1280.jpg", cost: "$15", description: "Aromatic herb that doubles as a lovely houseplant." },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/08/21/13/55/mint-1609565_1280.jpg", cost: "$10", description: "Fresh, invigorating aroma and easy to maintain." },
        { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2016/03/30/22/05/eucalyptus-1292271_1280.jpg", cost: "$22", description: "Refreshing scent and distinctive silvery-green leaves." },
        { name: "Geranium", image: "https://cdn.pixabay.com/photo/2017/05/15/15/54/geranium-2315486_1280.jpg", cost: "$14", description: "Produces vibrant flowers with a lovely pleasant scent." }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2021/04/15/14/09/zz-plant-6181180_1280.jpg", cost: "$25", description: "Thrives in low light and requires minimal watering." },
        { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/19/20/green-3818318_1280.jpg", cost: "$10", description: "Virtually indestructible trailing vine." },
        { name: "Cactus", image: "https://cdn.pixabay.com/photo/2016/11/02/22/20/cactus-1792984_1280.jpg", cost: "$8", description: "Stores water efficiently, perfect for forgetful waterers." },
        { name: "Succulent Mix", image: "https://cdn.pixabay.com/photo/2016/11/29/13/05/succulents-1869384_1280.jpg", cost: "$12", description: "Assorted small plants requiring very little attention." },
        { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2021/07/03/17/23/plant-6384210_1280.jpg", cost: "$22", description: "Extremely tough plant that tolerates neglect." },
        { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2020/05/01/19/29/jade-plant-5118596_1280.jpg", cost: "$16", description: "Classic symbol of good luck that is very easy to grow." }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prevState => ({
      ...prevState,
      [plant.name]: true
    }));
  };

  return (
    <div className="product-list-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
          <h1>Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
        </div>
        <div className="navbar-links">
          <span onClick={onHomeClick} className="nav-link">Home</span>
          <span className="nav-link active">Plants</span>
          <div className="cart-icon-container" onClick={onCartClick} style={{ cursor: 'pointer' }}>
            <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="#2c5e3b"/>
            </svg>
            <span className="cart-count">{totalCartItems}</span>
          </div>
        </div>
      </nav>

      {/* Product Categories */}
      <div className="product-categories">
        {plantsArray.map((category, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="plants-grid">
              {category.plants.map((plant, plantIndex) => (
                <div key={plantIndex} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h3 className="plant-name">{plant.name}</h3>
                  <p className="plant-price">{plant.cost}</p>
                  <p className="plant-description">{plant.description}</p>
                  <button 
                    className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;