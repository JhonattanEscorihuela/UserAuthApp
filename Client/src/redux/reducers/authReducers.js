import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actions/authActions";

const initialState = {
    allUser: [],
}

function authReducer(state = initialState, { type, payload }) {
    const actionHandlers = {
        [LOGIN_USER]: () => ({ ...state, allUser: payload }),
        [LOGOUT_USER]: () => initialState,
        [REGISTER_USER]: () => ({ ...state, allUser: [...state.allUser, payload] }),

    };

    const handler = actionHandlers[type];
    return handler ? handler() : state;
}

export default authReducer;