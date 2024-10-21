import React from 'react';
import nintendo from '../assets/nintendo.png';

interface ProductItemProps {
  product: { id: number; name: string; price: number; imageUrl: string };
  addToCart: (id: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={nintendo} alt={"Nintendo Switch"} className="product-image" />
      <h2>{product.name}</h2>
      <p>Preço: R${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product.id)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductItem;