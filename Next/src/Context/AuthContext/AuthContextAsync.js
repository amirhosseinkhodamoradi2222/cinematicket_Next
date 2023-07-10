import AuthLogin from '@/services/Auth/AuthLogin';
import toast from 'react-hot-toast';
import { getAdminData, getUserData } from '@/utils/ResponseData/ResponseData';
import AuthRegister from '@/services/Auth/AuthRegister';
import adminLogin from '@/services/Admin/AdminLogin';
import UserLogOut from '@/services/User/UserLogOut';
import AdminLogout from '@/services/Admin/AdminLogout';

export const asyncActionHandlers = {
    LOGIN:
        ({ dispatch }) =>
        async action => {
            dispatch({ type: 'USER_AUTH_PENDING' });
            await AuthLogin(action.payload)
                .then(res => {
                    dispatch({ type: 'USER_AUTH_SUCCESS', payload: getUserData() });
                    toast.success(res.data.message);
                })
                .catch(err => {
                    dispatch({ type: 'USER_AUTH_REJECT', payload: err });
                    toast.error(err?.response?.data?.errors[0]?.message);
                });
        },
    REGISTER:
        ({ dispatch }) =>
        async action => {
            dispatch({ type: 'USER_AUTH_PENDING' });
            await AuthRegister(action.payload)
                .then(res => {
                    dispatch({ type: 'USER_AUTH_SUCCESS', payload: getUserData() });
                    toast.success(res.data.message);
                })
                .catch(err => {
                    dispatch({ type: 'USER_AUTH_REJECT', payload: err });
                    toast.error(err?.response?.data?.errors[0]?.message);
                });
        },
    ADMINLOGIN:
        ({ dispatch }) =>
        async action => {
            dispatch({ type: 'ADMIN_AUTH_PENDING' });
            await adminLogin(action.payload)
                .then(res => {
                    dispatch({ type: 'ADMIN_AUTH_SUCCESS', payload: getAdminData() });
                    toast.success(res.data.message);
                })
                .catch(err => {
                    dispatch({ type: 'ADMIN_AUTH_REJECT', payload: err });
                    toast.error(err?.response?.data?.errors[0]?.message);
                });
        },
    USER_LOGOUT:
        ({ dispatch }) =>
        async action => {
            dispatch({ type: 'LOGOUT_PENDING' });
            await UserLogOut()
                .then(res => {
                    dispatch({ type: 'LOGOUT_SUCCESS', payload: action.payload });
                    toast.success(res.data.message);
                })
                .catch(err => {
                    dispatch({ type: 'LOGOUT_REJECT', payload: err });
                    toast.error(err?.response?.data?.errors[0]?.message);
                });
        },
    ADMIN_LOGOUT:
        ({ dispatch }) =>
        async action => {
            dispatch({ type: 'LOGOUT_PENDING' });
            await AdminLogout()
                .then(res => {
                    dispatch({ type: 'LOGOUT_SUCCESS', payload: action.payload });
                    toast.success(res.data.message);
                })
                .catch(err => {
                    dispatch({ type: 'LOGOUT_REJECT', payload: err });
                    toast.error(err?.response?.data?.errors[0]?.message);
                });
        },
};
