import AuthLayout from '@/layouts/auth/AuthLayout';
import Button from '@/components/Button/Button';
import { LoadingDashed, LockDash, User } from 'react-huge-icons/outline';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputHasIcon from '@/components/Formik/Input';
import ButtonSubmit from '@/components/Formik/Button';
import { useAuth } from '@/Context/AuthContext/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckLoggedInUserAuth from '@/utils/Server/CheckLoggedInUserAuth';

export async function getServerSideProps({ req }) {
    console.log(req.cookies);
    return CheckLoggedInUserAuth(req, '/');
}

export default function Login(props) {
    const [auth, authAction] = useAuth();
    const router = useRouter();
    const initialValues = {
        login: '',
        password: '',
    };

    useEffect(() => {
        !auth.loading && formik.setSubmitting(false);
        if (!!auth.data) {
            formik.resetForm({
                values: {
                    login: '',
                    password: '',
                },
            });
            router.push(router.query.returnUrl ? '/' + router.query.returnUrl : '/');
        }
    }, [auth]);

    const validationSchema = yup.object({
        login: yup.string().required('لطفا نام کاربری خود را وارد کنید'),
        password: yup.string().required('لطفا پسورد خود را وارد کنید'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit: values => authAction({ type: 'LOGIN', payload: values }),
        validationSchema,
    });

    return (
        <AuthLayout>
            <div className='flex flex-wrap gap-10 items-center justify-between border-b pb-10 mb-10'>
                <h3 className='font-semibold text-sm'>اگر در سینماتیکت حساب کاربری ندارید، ثبت نام کنید.</h3>
                <Link
                    href='/auth/register?returnUrl=%2F'
                    className='w-full sm:w-auto'>
                    <Button className='bg-primary text-white w-full'>ایجاد حساب کاربری</Button>
                </Link>
            </div>
            <div className='flex flex-wrap gap-10 items-center justify-between'>
                <h3 className='font-semibold text-sm'>اگر در سینماتیکت حساب کاربری دارید، وارد شوید.</h3>
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
                                name='login'
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
