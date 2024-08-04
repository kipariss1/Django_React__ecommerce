import React from 'react'
import { Link } from 'react-router-dom'

function Product({ product }) {
  return (
    <div className='card my-3 p-3 rounded'>
        <Link to={`/product/` + product._id}>
            <img src={product.image} className='card-img-top'></img>
        </Link>
        <div className='card-body'>
            <Link to={`/product/` + product._id}>
                <h5 className='card-title'><strong>{product.name}</strong></h5>
            </Link>
            <div className='card-text'>
                <div className='my-3'>
                    {product.rating} from {product.numReviews} reviews
                </div>
            </div>
            <div className='card-text'>
                <h3>${product.price}</h3>
            </div>
        </div>
    </div>
  )
}

export default Product
