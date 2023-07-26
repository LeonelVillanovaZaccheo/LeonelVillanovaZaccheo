import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const getProductById = async () => {
      const response = await fetch('/api/products/' + id);
      const productData = await response.json();
      setProduct(productData);
    };

    getProductById();
  }, [id]);

  return <div>{product ? <ItemDetail product={product} /> : <p>Cargando detalle del producto...</p>}</div>;
};

export default ItemDetailContainer;