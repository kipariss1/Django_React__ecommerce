import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

function RegisterScreen() {

    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userInfo} = userRegister

    useEffect(() => {
        if (userInfo) {
            console.log(redirect)
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password != confirmPassword) {
            setMessage('Passwords do not match!')
            return
        }
        dispatch(register(name, email, password))
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {message && <Message variant="alert alert-warning">{message}</Message>}
            {error && <Message variant="alert alert-danger">Error: {error}</Message>}
            {loading && <Loader></Loader>}
            <form onSubmit={submitHandler}>
                <div className='form-group' id='email'>
                    <label>Email Address</label>
                    <input 
                        type='email' 
                        className='form-control' 
                        placeholder='Enter email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className='form-group' id='name'>
                    <label>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter your name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className='form-group' id='password'>
                    <label>password</label>
                    <input 
                        type='password' 
                        className='form-control' 
                        placeholder='Password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className='form-group' id='passwordConfirm'>
                    <label>Confirm Password</label>
                    <input 
                        type='password' 
                        className='form-control' 
                        placeholder='Confirm Password'
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div className='form-group my-3' id='login-button'>
                    <button type='submit' className='btn btn-primary'>
                        Register
                    </button>
                </div>
                <div className='row py-3'>
                    <div className='col'>
                        Already have an account? <Link to={redirect != '/' ? `/register?redirect=${redirect}` : `/login`}>Sign In</Link>
                    </div>
                </div>
            </form>
        </FormContainer>
    )
}

export default RegisterScreen
