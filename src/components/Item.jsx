import React from 'react';

const Item = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default Item;