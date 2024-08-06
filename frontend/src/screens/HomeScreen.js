import React, { useEffect } from 'react'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

export default function HomeScreen() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products = [] } = productList
  

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {
        loading ? <Loader></Loader >
          : error ? <Message variant="alert alert-danger">Error: {error}</Message> 
            :
            <div className='row'>
              {products.map(product => (
                  <div key={product._id} className='col sm={12} md={6} lg={4} xL={3}'>
                      <Product product={product} />
                  </div>
              ))}
            </div>
      }
    </div>
  )
}
