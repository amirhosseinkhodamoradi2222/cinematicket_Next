export const authReducer = (state, action) => {
    switch (action.type) {
        // User Auth Reducer
        case 'USER_AUTH_PENDING':
            return { ...state, data: null, loading: true, errors: null, isAdmin: false };
        case 'USER_AUTH_SUCCESS':
            return { data: action.payload, loading: false, errors: null, isLoggedIn: true, isAdmin: false };
        case 'USER_AUTH_REJECT':
            return { ...state, data: null, loading: false, errors: action.payload, isAdmin: false };

        // Admin Auth Reducer
        case 'ADMIN_AUTH_PENDING':
            return { ...state, data: null, loading: true, errors: null, isAdmin: false };
        case 'ADMIN_AUTH_SUCCESS':
            return { data: action.payload, loading: false, errors: null, isLoggedIn: true, isAdmin: true };
        case 'ADMIN_AUTH_REJECT':
            return { ...state, data: null, loading: false, errors: action.payload, isAdmin: false };

        // Logout Reducer
        case 'LOGOUT_PENDING':
            return { ...state, loading: true, errors: null, isAdmin: false };
        case 'LOGOUT_SUCCESS':
            return { data: action.payload, loading: false, errors: null, isLoggedIn: false, isAdmin: false };
        case 'LOGOUT_REJECT':
            return { ...state, loading: false, errors: action.payload, isAdmin: false };
        default:
            throw new Error('no such action type');
    }
};
