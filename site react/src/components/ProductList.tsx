import React from 'react';
import ProductItem from './ProductItem';

interface ProductListProps {
  addToCart: (id: number) => void;
}

const products = [
  { id: 1, name: 'Nintendo Switch', price: 1000.0, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Nintendo Switch', price: 2000.0, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Nintendo Switch', price: 3000.0, imageUrl: 'https://via.placeholder.com/150' },
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