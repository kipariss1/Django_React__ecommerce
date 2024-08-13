import axios from 'axios'
import { 
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS
 } from '../constants/userConstatnts'

axios.defaults.baseURL = "http://127.0.0.1:8000/"  

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        // getting back token
        const {data} = axios.post(
                '/api/users/login/',
                {
                    'username': email,
                    'password': password
                },
                config
            )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}
