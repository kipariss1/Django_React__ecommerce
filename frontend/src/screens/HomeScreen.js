import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import axios from 'axios'

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    (async function fetchProducts() {
      const {data} = await axios.get('api/products/')
      setProducts(data);
    })();

  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <div className='row'>
        {products.map(product => (
            <div key={product._id} className='col sm={12} md={6} lg={4} xL={3}'>
                <Product product={product} />
            </div>
        ))}
      </div>
    </div>
  )
}
