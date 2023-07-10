import React from 'react';
import { DirectionLeft } from 'react-huge-icons/outline';

const MenuItem = ({ Icon, label, active = false, ...other }) => (
    <button
        className={`group/menuItem w-full flex items-center justify-between p-2 rounded-md text-gray-500 hover:bg-gray-100 duration-150 ${
            active ? 'bg-gray-100' : ''
        }`}
        {...other}>
        <div className='flex items-center gap-2'>
            <Icon className={`w-6 h-6 group-hover/menuItem:text-primary ${active ? 'text-primary' : ''}`} />
            {label}
        </div>
        <DirectionLeft className='w-5 h-5' />
    </button>
);

export default MenuItem;
