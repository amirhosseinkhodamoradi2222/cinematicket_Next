import { Eye, EyeDisable } from 'react-huge-icons/outline';
import { useState } from 'react';

export default function InputHasIcon({ formik, name, Icon, className, type = 'text', ...other }) {
    const [isShowPassword, setIsShowPassword] = useState(false);
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            <div
                className={`flex items-center justify-between gap-3 bg-gray-100 border-b ${
                    !!formik.errors[name] && formik.touched[name] ? 'border-red-500' : 'border-gray-100'
                } py-3.5 px-3.5 rounded-md w-full`}>
                <Icon className={`w-6 h-6 ${!!formik.errors[name] && formik.touched[name] ? 'text-red-500' : 'text-gray-600'}`} />
                <input
                    type={type === 'password' ? (isShowPassword ? 'text' : 'password') : type}
                    name={name}
                    className='bg-transparent h-full w-full'
                    {...other}
                    {...formik.getFieldProps(name)}
                />
                {type === 'password' &&
                    (isShowPassword ? (
                        <Eye
                            className='w-6 h-6 text-gray-600 cursor-pointer'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        />
                    ) : (
                        <EyeDisable
                            className='w-6 h-6 text-gray-600 cursor-pointer'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        />
                    ))}
            </div>

            <p className='text-red-500 text-xs font-semibold h-3'>
                {!!formik.errors[name] && formik.touched[name] && formik.errors[name]}
            </p>
        </div>
    );
}
