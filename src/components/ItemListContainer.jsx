import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {

      const response = await fetch('/api/products');
      const productsData = await response.json();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  return <ItemList products={products} />;
};

export default ItemListContainer;