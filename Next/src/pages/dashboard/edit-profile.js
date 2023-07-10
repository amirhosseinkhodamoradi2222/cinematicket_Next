import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout';
import CheckLoggedInUserDashboard from '@/utils/Server/CheckLoggedInUserDashboard';
import UserProfile from '@/services/User/UserProfile';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import UserUpdate from '@/services/User/UserUpdate';
import { useFormik } from 'formik';
import { Mail, Calendar, Mobile, User } from 'react-huge-icons/outline';
import InputHasIcon from '@/components/Formik/Input';
import ButtonSubmit from '@/components/Formik/Button';
import DateInputHasIcon from '@/components/Formik/DateInput';
import SingleImageUploader from '@/components/SingleImageUploader/SingleImageUploader';
import UserProfilePicRemove from '@/services/User/UserProfilePicRemove';
import { getUserData } from '@/utils/ResponseData/ResponseData';

export async function getServerSideProps({ req }) {
    return CheckLoggedInUserDashboard(req, '/auth/login?returnUrl=%2Fdashboard%2Fedit-profile');
}

const EditProfile = () => {
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
        email: userData?.email || '',
        birthday: userData?.birthday || '',
    };

    const validationSchema = yup.object({
        first_name: yup.string().required('لطفا نام خود را وارد کنید'),
        last_name: yup.string().required('لطفا نام خانوادگی خود را وارد کنید'),
        tel: yup.string().required('لطفا شماره تماس خود را وارد کنید'),
        email: yup.string(),
        birthday: yup.string(),
    });

    const onSubmit = async values => {
        console.log(values);
        await UserUpdate(values)
            .then(res => {
                setUserData(getUserData());
                toast.success(res.data.message);
            })
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
            <h2 className='text-xl'>ویرایش اطلاعات کاربری</h2>
            <form
                onSubmit={formik.handleSubmit}
                encType='multipart/form-data'>
                <div className='w-full flex flex-wrap items-center justify-between gap-5 lg:px-10'>
                    <div className='w-full flex flex-wrap items-center justify-between gap-1-y'>
                        <SingleImageUploader
                            formik={formik}
                            name='img'
                            defaultImage={userData?.profile_pic_url}
                            removeImageHandler={UserProfilePicRemove}
                        />
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
                            name='email'
                            placeholder='ایمیل'
                            formik={formik}
                            Icon={Mail}
                            className='w-full sm:w-[49%]'
                        />
                        <DateInputHasIcon
                            name='birthday'
                            placeholder='تاریخ تولد'
                            formik={formik}
                            Icon={Calendar}
                            className='w-full sm:w-[49%]'
                        />
                    </div>
                    <ButtonSubmit
                        formik={formik}
                        text='ثبت تغییرات'
                    />
                </div>
            </form>
        </DashboardLayout>
    );
};

export default EditProfile;
