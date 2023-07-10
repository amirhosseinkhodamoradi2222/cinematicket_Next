import AuthLayout from '@/layouts/auth/AuthLayout';
import { LoadingDashed, LockDash, User } from 'react-huge-icons/outline';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputHasIcon from '@/components/Formik/Input';
import ButtonSubmit from '@/components/Formik/Button';
import { useAuth } from '@/Context/AuthContext/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@/components/Button/Button';

export default function Login() {
    const [auth, authAction] = useAuth();
    const router = useRouter();
    const initialValues = {
        username: '',
        password: '',
        repeatPass: '',
    };

    console.log();

    useEffect(() => {
        !auth.loading && formik.setSubmitting(false);
        if (!!auth.data) {
            formik.resetForm({
                values: initialValues,
            });
            router.push(router.query.returnUrl ? '/' + router.query.returnUrl : '/');
        }
    }, [auth]);

    const validationSchema = yup.object({
        username: yup
            .string()
            .min(11, 'حداقل باید 11 رقم وارد نمایید.')
            .max(11, 'نباید بیشتر از 11 رقم وارد کنید.')
            .matches(
                /^(\+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gm,
                'شماره موبایل معتبر نیست'
            )
            .required('لطفا شماره تلفن خود را وارد کنید'),
        password: yup.string().required('لطفا رمزعبور خود را وارد کنید'),
        repeatPass: yup.string().required('لطفا تکرار رمزعبور خود را وارد کنید'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit: values => authAction({ type: 'REGISTER', payload: values }),
        validationSchema,
    });

    return (
        <AuthLayout>
            <div className='flex flex-wrap gap-10 items-center justify-between border-b pb-5 mb-5'>
                <h3 className='font-semibold text-lg'>ایجاد حساب کاربری</h3>
                <Link
                    href='/auth/login?returnUrl=%2F'
                    className='w-full sm:w-auto'>
                    <Button className='bg-primary text-white w-full'>(حساب کاربری دارم)</Button>
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
                                placeholder='شماره تلفن ...'
                                formik={formik}
                                Icon={User}
                                className='w-full'
                            />
                            <InputHasIcon
                                type='password'
                                name='password'
                                placeholder='رمزعبور ...'
                                formik={formik}
                                Icon={LockDash}
                                className='w-full sm:w-[49%]'
                            />
                            <InputHasIcon
                                type='password'
                                name='repeatPass'
                                placeholder='تکرار رمزعبور ...'
                                formik={formik}
                                Icon={LockDash}
                                className='w-full sm:w-[49%]'
                            />
                        </div>
                        <ButtonSubmit
                            formik={formik}
                            text='ادامه'
                        />
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
