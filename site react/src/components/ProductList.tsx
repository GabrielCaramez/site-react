import React from 'react';
import ProductItem from './ProductItem';

interface ProductListProps {
  addToCart: (id: number) => void;
}

const products = [
  { id: 1, name: 'Nintendo Switch', price: 1000.0, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Nintendo Switch', price: 2000.0, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Nintendo Switch', price: 3000.0, imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Nintendo Switch', price: 4000.0, imageUrl: 'https://via.placeholder.com/150'},
  { id: 5, name: 'Nintendo Switch', price: 5000.0, imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Nintendo Switch', price: 6000.0, imageUrl: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Nintendo Switch', price: 7000.0, imageUrl: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Nintendo Switch', price: 8000.0, imageUrl: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Nintendo Switch', price: 9000.0, imageUrl: 'https://via.placeholder.com/150' },
];

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  return (
    <section id="products">
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default ProductList;