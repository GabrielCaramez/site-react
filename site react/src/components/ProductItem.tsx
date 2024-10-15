import React from 'react';

interface ProductItemProps {
  product: { id: number; name: string; price: number; imageUrl: string };
  addToCart: (id: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={"https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/systems_5/nintendo_switch_3/nintendo_switch_oled/CI_NSwitch_main.jpg"} alt={"Nintendo Switch"} className="product-image" />
      <h2>{product.name}</h2>
      <p>Preço: R${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product.id)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductItem;