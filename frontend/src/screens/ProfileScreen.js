import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstatnts'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

function ProfileScreen() {

    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [name, setName] = useState('DEFAULT')
    const [email, setEmail] = useState('DEFAULT')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || success) {
                dispatch(getUserDetails('profile'))
                dispatch({type: USER_UPDATE_PROFILE_RESET})
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, navigate, user, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password != confirmPassword) {
            setMessage('Passwords do not match!')
            return
        }
        setMessage('')
        let firstName = name.split(" ")[0]
        let lastName = name.split(" ")[1]
        dispatch(updateUserProfile(
            {
                'id': user._id,
                'first_name': firstName,
                'last_name': lastName ? lastName : '',
                'email': email,
                'password': password
            }
        ))
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
                        placeholder="Email"
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
                        placeholder="Name"
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
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className='form-group' id='passwordConfirm'>
                    <label>Confirm Password</label>
                    <input 
                        type='password' 
                        className='form-control' 
                        placeholder='Confirm Password'
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
