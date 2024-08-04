import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductScreen() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        (async function getProduct(id) {
            const {data} = await axios.get(`/api/product/${id}/`);
            setProduct(data); 
        })(id);
    }, [])
    return (
        <div>
            <Link to="/" className='btn btn-light my-3'>Go Back</Link>
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
                            <li className='list-group-item'>
                                <button type='button' disabled={product.countInStock === 0} className='btn btn-primary d-grid col-6 mx-auto'>Add to card</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
