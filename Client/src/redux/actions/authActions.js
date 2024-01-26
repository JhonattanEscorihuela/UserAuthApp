import api from "../services/api";
import Cookies from 'js-cookie';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export function registerUser(userData) {
    return async function (dispatch) {

        const response = await api.post('/user/register', userData);

        dispatch({
            type: REGISTER_USER,
            payload: response.data,
        });
        console.log("hola", response);


        return response;

    }
}

export function loginUser(userData) {
    return async function (dispatch) {

        const response = await api.post('/user/login', userData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userData.token}` // Ajusta esto según la estructura de tu usuario o token
            },
        });


        Cookies.set('authToken', response.data.token, { expires: 1, httpOnly: true, secure: true }); // Cookie expira en 1 día

        dispatch({
            type: LOGIN_USER,
            payload: response.data.token,
        })

        return response;


    }

}

export function logoutUser() {
    return function (dispatch) {
        try {
            // Elimina la cookie
            Cookies.remove('authToken');

            dispatch({
                type: LOGOUT_USER,

            })

        } catch (error) {
            console.error('Error al salir', error);
        }
    }

}

export function checkAuthStatus() {
    return function (dispatch) {
        const authToken = Cookies.get('authToken');

        if (authToken) {
            dispatch({
                type: LOGIN_USER,
                payload: authToken,
            });
        }
    }
}


