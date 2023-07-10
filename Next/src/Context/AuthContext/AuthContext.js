import { createContext, useContext } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { asyncActionHandlers } from '@/Context/AuthContext/AuthContextAsync';
import { authReducer } from '@/Context/AuthContext/AuthContextReducer';
import { getAdminData, getUserData } from '@/utils/ResponseData/ResponseData';

const AuthContext = createContext();
const AuthContextDispatch = createContext();

const initialState = {
    data: null,
    loading: false,
    errors: null,
    isLoggedIn: !!getUserData() || !!getAdminData() || false,
    isAdmin: !!getAdminData(),
};

const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducerAsync(authReducer, initialState, asyncActionHandlers);

    return (
        <AuthContext.Provider value={auth}>
            <AuthContextDispatch.Provider value={dispatch}>{children}</AuthContextDispatch.Provider>
        </AuthContext.Provider>
    );
};
export default AuthProvider;
export const useAuth = () => [useContext(AuthContext), useContext(AuthContextDispatch)];
