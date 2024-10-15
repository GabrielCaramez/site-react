import React from 'react';
import logo from '../assets/logo.png'; // Importe a imagem

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Online Shop</h1>
      </div>
      <div id="cart">
        <span>Carrinho: {cartCount} itens</span>
      </div>
    </header>
  );
};

export default Header;