import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <ProductList addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default App;
