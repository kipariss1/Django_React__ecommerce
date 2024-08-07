import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { listProductDetails } from '../actions/productActions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen() {
    const { id } = useParams();

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product = {reviews: []} } = productDetails

    const [qty, setQty] = useState(1)
    
    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch])
    return (
        <div>
            <Link to="/" className='btn btn-light my-3'>Go Back</Link>
            {
                loading ? <Loader></Loader> :
                    error ? <Message variant="alert alert-danger">Error: {error}</Message> :
                        <div className='row'>
                            <div className='col md={6}'>
                                <img src={product.image} alt={product.name} className="img-fluid"></img>
                            </div>
                            <div className='col md={3}'>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'><h3>{product.name}</h3></li>
                                    <li className='list-group-item'><h3>Rating: {product.rating}</h3></li>
                                    <li className='list-group-item'><h3>Price: {product.price}$</h3></li>
                                    <li className='list-group-item'><h3>Description: {product.description}</h3></li>
                                </ul>
                            </div>
                            <div className='col md={3}'>
                                <div className='card'>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item'>
                                            <div className='row'>
                                                <div className='col'>Price:</div>
                                                <div className='col'>
                                                    <strong>${product.price}</strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='list-group-item'>
                                            <div className='row'>
                                                <div className='col'>Status:</div>
                                                <div className='col'>
                                                    {product.countInStock > 0 ? 'In stock' : 'Out of it'}
                                                </div>
                                            </div>
                                        </li>
                                        {product.countInStock > 0 && (
                                            <li className='list-group-item'>
                                                <div className='row'>
                                                    <div className='col'>Qty</div>
                                                    <div className='col'>
                                                        <div className='form-group'>
                                                            <select 
                                                                className='form-control form-control-lg xs={auto} my-1'
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {
                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x}>{x + 1}</option>
                                                                    ))
                                                                }        
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )}
                                        <li className='list-group-item'>
                                            <button type='button' disabled={product.countInStock === 0} className='btn btn-primary d-grid col-6 mx-auto'>Add to card</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            }
        </div>    
    )
}

export default ProductScreen
