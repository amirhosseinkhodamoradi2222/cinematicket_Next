import React from 'react';
import DialogModal from '@/components/Dialog/Dialog';
import Button from '@/components/Button/Button';
import UserLogOut from '@/services/User/UserLogOut';
import { useRouter } from 'next/router';
import { useAuth } from '@/Context/AuthContext/AuthContext';

const LogoutDialog = props => {
    const [auth, authAction] = useAuth();
    const router = useRouter();

    const userLogout = async () => {
        authAction({ type: 'USER_LOGOUT', payload: null });
        router.push('/');
    };
    const adminLogout = async () => {
        authAction({ type: 'ADMIN_LOGOUT', payload: null });
        router.push('/');
    };

    return (
        <DialogModal
            title='خروج از حساب کاربری'
            {...props}>
            <div className='flex flex-col items-center justify-between gap-5'>
                <p className='text-base text-gray-500'>مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟</p>

                <div className='w-full flex items-center justify-between'>
                    <Button
                        onClick={props.closeModal}
                        className='bg-transparent border border-primary text-primary text-xs'>
                        خیر؛ انصراف از خروج
                    </Button>
                    <Button
                        onClick={auth.isAdmin ? adminLogout : userLogout}
                        className='bg-primary border border-primary text-white text-xs'>
                        بله؛ مطمئنم
                    </Button>
                </div>
            </div>
        </DialogModal>
    );
};

export default LogoutDialog;
