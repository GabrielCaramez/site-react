import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Importe a imagem
import { FaShoppingCart } from 'react-icons/fa'; // Importe o ícone de carrinho
import { useTransition, animated } from '@react-spring/web'; // Importe useTransition e animated

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Defina a animação de transição
  const transitions = useTransition(isCartOpen, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Online Shop</h1>
      </div>
      <div className="cart-container" id="cart" onClick={() => setIsCartOpen(!isCartOpen)}>
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
      </div>
      {transitions((style, item) =>
        item ? (
          <animated.div style={style} className="cart-dropdown">
            {/* Conteúdo do carrinho */}
            <p>Itens no carrinho: {cartCount}</p>
          </animated.div>
        ) : null
      )}
    </header>
  );
};

export default Header;