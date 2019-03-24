import axios from 'axios';
import {
    AUTH_SIGN_UP,
    AUTH_SIGN_OUT,
    AUTH_SIGN_IN,
    AUTH_ERROR,
    DASHBOARD_GET_DATA
} from './types';

export const oauthFacebook = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:8080/auth/facebook/callback', {
            access_token: data
        });

        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data.token
        });

        localStorage.setItem('JWT_TOKEN', res.data.token);
        axios.defaults.headers.common['Authorization'] = res.data.token;
    };
}