import React from 'react';
import nintendo from '../assets/nintendo.png';

interface ProductListProps {
  addToCart: (id: number) => void;
}

const products = [
  { id: 2, name: 'Nintendo Switch', price: 2000.0, imageUrl: nintendo },
  { id: 3, name: 'Nintendo Switch', price: 3000.0, imageUrl: nintendo },
  { id: 4, name: 'Nintendo Switch', price: 4000.0, imageUrl: nintendo },
  { id: 5, name: 'Nintendo Switch', price: 5000.0, imageUrl: nintendo },
  { id: 1, name: 'Nintendo Switch', price: 1000.0, imageUrl: nintendo },
  { id: 6, name: 'Nintendo Switch', price: 6000.0, imageUrl: nintendo },
  { id: 7, name: 'Nintendo Switch', price: 7000.0, imageUrl: nintendo },
  { id: 8, name: 'Nintendo Switch', price: 8000.0, imageUrl: nintendo },
  { id: 9, name: 'Nintendo Switch', price: 9000.0, imageUrl: nintendo },
  { id: 10, name: 'Nintendo Switch', price: 10000.0, imageUrl: nintendo },
  { id: 11, name: 'Nintendo Switch', price: 11000.0, imageUrl: nintendo },
  { id: 12, name: 'Nintendo Switch', price: 12000.0, imageUrl: nintendo },
];

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  return (
    <section id="products">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
            onError={(e) => {
              e.currentTarget.src = nintendo;
            }}
          />
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">R$ {product.price.toFixed(2)}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product.id)}>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;