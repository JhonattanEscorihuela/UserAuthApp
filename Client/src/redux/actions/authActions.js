import api from "../services/api";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';


export function registerUser(userData) {
    return async function (dispatch) {
        try {
            const response = await api.post('/user/register', userData);

            dispatch({
                type: REGISTER_USER,
                payload: response.data,
            });
        } catch (error) {
            console.error('Error de registro:', error);

            dispatch({
                type: 'REGISTER_USER_FAILURE',
                payload: error.message,
            });
        }
    }
}

export function loginUser(userData) {
    return async function (dispatch) {
        try {
            const response = await api.post('/user/login', userData);

            dispatch({
                type: LOGIN_USER,
                payload: response.data.token,
            })

        } catch (error) {
            console.error('Error al ingresar', error);

            dispatch({
                type: 'LOGIN_USER_FAILURE',
                payload: error.message,
            });
        }
    }

}

export function logoutUser() {
    return function (dispatch) {
        try {
            dispatch({
                type: LOGOUT_USER,

            })

        } catch (error) {
            console.error('Error al salir', error);
        }
    }

}


