import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

function LoginScreen() {
    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant="alert alert-danger">Error: {error}</Message>}
            {loading && <Loader></Loader>}
            <form onSubmit={submitHandler}>
                <div className='form-group' id='email'>
                    <label>Email Address</label>
                    <input 
                        type='email' 
                        className='form-control' 
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className='form-group' id='password'>
                    <label>password</label>
                    <input 
                        type='password' 
                        className='form-control' 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className='form-group my-3' id='login-button'>
                    <button type='submit' className='btn btn-primary'>
                        Sign In
                    </button>
                </div>
            </form>
            <div className='row py-3'>
                <div className='col'>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>Register</Link>
                </div>
            </div>
        </FormContainer>
    )
}

export default LoginScreen
