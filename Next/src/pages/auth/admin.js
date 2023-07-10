import AuthLayout from '@/layouts/auth/AuthLayout';
import { LoadingDashed, LockDash, User } from 'react-huge-icons/outline';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputHasIcon from '@/components/Formik/Input';
import ButtonSubmit from '@/components/Formik/Button';
import { useAuth } from '@/Context/AuthContext/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckLoggedInAdminAuth from '@/utils/Server/CheckLoggedInAdminAuth';
export async function getServerSideProps({ req }) {
    return CheckLoggedInAdminAuth(req, '/');
}
export default function Admin() {
    const [auth, authAction] = useAuth();
    const router = useRouter();
    const initialValues = {
        username: '',
        password: '',
    };

    useEffect(() => {
        !auth.loading && formik.setSubmitting(false);
        if (!!auth.data) {
            formik.resetForm({
                values: {
                    username: '',
                    password: '',
                },
            });
            router.push(router.query.returnUrl ? '/' + router.query.returnUrl : '/');
        }
    }, [auth]);

    const validationSchema = yup.object({
        username: yup.string().required('لطفا نام کاربری خود را وارد کنید'),
        password: yup.string().required('لطفا پسورد خود را وارد کنید'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit: values => authAction({ type: 'ADMINLOGIN', payload: values }),
        validationSchema,
    });

    return (
        <AuthLayout>
            <div className='flex flex-col gap-5 justify-between border-b pb-5 mb-5'>
                <h2 className='font-semibold text-sm'>ورود مدیران سینما تیکت</h2>
                <Link
                    href='/auth/login'
                    className='w-full sm:w-auto text-xs text-blue-500 hover:opacity-50'>
                    اگر مدیر نیستید اینجا کلیک کنید
                </Link>
            </div>
            <div className='flex flex-wrap gap-10 items-center justify-between'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='relative w-full flex flex-wrap items-center justify-between gap-5'>
                        {formik.isSubmitting && (
                            <div className='absolute inset-0 w-full h-full bg-gray-200/30 rounded-md cursor-no-drop'>
                                <div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
                                    <LoadingDashed className='w-10 h-10 animate-spin text-primary' />
                                </div>
                            </div>
                        )}
                        <div className='w-full flex flex-wrap items-center justify-between gap-y-5 gap-x-1'>
                            <InputHasIcon
                                name='username'
                                placeholder='نام کاربری ...'
                                formik={formik}
                                Icon={User}
                                className='w-full sm:w-[49%]'
                            />
                            <InputHasIcon
                                type='password'
                                name='password'
                                placeholder='رمزعبور ...'
                                formik={formik}
                                Icon={LockDash}
                                className='w-full sm:w-[49%]'
                            />
                        </div>
                        <ButtonSubmit
                            formik={formik}
                            text='ورود'
                        />
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
