import React, {useEffect} from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

function CartScreen() {

    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const productId = params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1 

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, Number(qty)))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping')
    }

    return (
        <div>
            <div className='row'>
                <div className='col md={8}'>
                    <h1>Shopping Cart</h1>
                    {
                        cartItems.length === 0 ?  
                        (
                            <Message variant="alert alert-info">
                                Go shop, capitalistic pig! <Link to="/">Go back!</Link>
                            </Message>
                        ) : (
                            <ul className='list-group list-group-flush'>
                                <h4>Did you buy everything you need, capitalistic pig?</h4>
                                {cartItems.map((item) => (
                                    <li className='list-group-item' key={item.product}>
                                        <div className='row'>
                                            <div className='col md={2}'>
                                                <img src={item.image} className='img-fluid rounded' alt={item.name}></img>
                                            </div>
                                            <div className='col md={3}'>
                                                <Link to={`/product/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </div>
                                            <div className='col md={2}'>
                                                ${item.price}
                                            </div>
                                            <div className='col'>
                                                <div className='form-group'>
                                                    <select 
                                                        className='form-control form-control-lg xs={auto} my-1'
                                                        value={item.qty}
                                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                    >
                                                        {
                                                            [...Array(item.countInStock).keys()].map((x) => (
                                                                <option key={x}>{x + 1}</option>
                                                            ))
                                                        }        
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col md={1}'>
                                                <button
                                                    className='btn btn-danger'
                                                    onClick={() => removeFromCartHandler(item.product)}
                                                >
                                                    <i className='fas fa-trash'></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>

                <div className='col md={4}'>
                    <div className='card'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                                <h6>${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}</h6>
                            </li>
                            <li className='list-group-item'>
                                <button 
                                    type="button" 
                                    className='btn btn-primary d-grid col-10 mx-auto'
                                    disabled={cartItems.length === 0}
                                    onClick={checkoutHandler}
                                >
                                    Proceed to Checkout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen