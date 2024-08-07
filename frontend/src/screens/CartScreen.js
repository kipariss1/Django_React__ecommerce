import React, {useEffect} from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen() {

    const params = useParams()
    const location = useLocation()
    const productId = params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1 

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

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
                                                <img src={item.image} className='img-fluid'></img>
                                            </div>
                                            <div className='col md={3}'>
                                                <Link to={`/product/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </div>
                                            <div className='col md={2}'>
                                                ${item.price}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>

                <div className='col md={4}'>

                </div>
            </div>
        </div>
    )
}

export default CartScreen