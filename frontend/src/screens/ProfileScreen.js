import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { getUserDetails } from '../actions/userActions'

function ProfileScreen() {

    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || !userDetails) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, navigate, userInfo, userDetails, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password != confirmPassword) {
            setMessage('Passwords do not match!')
            return
        }
        console.log('Updating profile ..')
    }

    return (
        <div className='row'>
        <div className='col md={3}'>
            <h2>User Profile</h2>
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div className='form-group my-3' id='login-button'>
                    <button type='submit' className='btn btn-primary'>
                        Update
                    </button>
                </div>
            </form>
        </div>
        <div className='col md={9}'>
            <h2>My Orders</h2>
        </div>
        </div>
    )
}

export default ProfileScreen
