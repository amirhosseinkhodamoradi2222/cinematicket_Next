import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout';
import CheckLoggedInUserDashboard from '@/utils/Server/CheckLoggedInUserDashboard';
import Link from 'next/link';
import { CardDash, IdCard, LoadingDashed, LockDash, Mobile, User } from 'react-huge-icons/outline';
import InputHasIcon from '@/components/Formik/Input';
import ButtonSubmit from '@/components/Formik/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useAuth } from '@/Context/AuthContext/AuthContext';
import UserProfile from '@/services/User/UserProfile';
import toast from 'react-hot-toast';
import UserUpdate from '@/services/User/UserUpdate';

export async function getServerSideProps({ req }) {
    return CheckLoggedInUserDashboard(req, '/auth/login?returnUrl=%2Fdashboard%2Fauthentication');
}

const Authentication = props => {
    const [auth, authAction] = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        UserProfile()
            .then(res => setUserData(res.data))
            .catch(err => {
                toast.error(err?.response?.data?.errors[0]?.message);
            });
    }, []);

    const initialValues = {
        first_name: userData?.first_name || '',
        last_name: userData?.last_name || '',
        tel: userData?.tel || '',
        credit_card_num: userData?.credit_card_num || '',
        national_id: userData?.national_id || '',
    };

    const validationSchema = yup.object({
        first_name: yup.string().required('لطفا نام خود را وارد کنید'),
        last_name: yup.string().required('لطفا نام خانوادگی خود را وارد کنید'),
        tel: yup.string().required('لطفا شماره تماس خود را وارد کنید'),
        credit_card_num: yup.string(),
        national_id: yup.string(),
    });

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        await UserUpdate(values)
            .then(res => toast.success(res.data.message))
            .catch(err => {
                toast.error(err?.response?.data?.errors[0]?.message);
            });
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        enableReinitialize: true,
    });
    return (
        <DashboardLayout>
            <h2 className='text-xl'>احراز هویت</h2>
            <p className='text-sm'>
                <span>درصورتی که مجموع تراکنش‌های شما از کیف پول بیشتر از ۸۰۰ هزار تومان شود، با توجه به</span>
                <Link
                    href='https://cinematicket.org/terms'
                    className='text-blue-700 hover:opacity-80'>
                    {' '}
                    قوانین شفافیت مالی{' '}
                </Link>
                <span>برای ادامه استفاده از کیف پول باید اطلاعات زیر را تکمیل کنید.</span>
            </p>

            <form onSubmit={formik.handleSubmit}>
                <div className='relative w-full flex flex-wrap items-center justify-between gap-5 lg:px-10'>
                    {formik.isSubmitting && (
                        <div className='absolute inset-0 w-full h-full bg-gray-200/30 rounded-md cursor-no-drop'>
                            <div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
                                <LoadingDashed className='w-10 h-10 animate-spin text-primary' />
                            </div>
                        </div>
                    )}
                    <div className='w-full flex flex-wrap items-center justify-between gap-1-y'>
                        <InputHasIcon
                            name='first_name'
                            placeholder='نام'
                            formik={formik}
                            Icon={User}
                            className='w-full sm:w-[49%]'
                        />
                        <InputHasIcon
                            name='last_name'
                            placeholder='نام خانوادگی'
                            formik={formik}
                            Icon={User}
                            className='w-full sm:w-[49%]'
                        />
                        <InputHasIcon
                            name='tel'
                            placeholder='شماره موبایل'
                            formik={formik}
                            Icon={Mobile}
                            className='w-full sm:w-[49%]'
                        />
                        <InputHasIcon
                            name='credit_card_num'
                            placeholder='شماره کارت'
                            formik={formik}
                            Icon={CardDash}
                            className='w-full sm:w-[49%]'
                        />
                        <InputHasIcon
                            name='national_id'
                            placeholder='کد ملی'
                            formik={formik}
                            Icon={IdCard}
                            className='w-full sm:w-[49%]'
                        />
                    </div>
                    <ButtonSubmit
                        formik={formik}
                        text='ویرایش اطلاعات و درخواست بررسی'
                    />
                </div>
            </form>
        </DashboardLayout>
    );
};

export default Authentication;
