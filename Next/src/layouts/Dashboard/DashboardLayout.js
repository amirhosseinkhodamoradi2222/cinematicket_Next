import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/layouts/Layout';
import MenuItem from '@/components/Menu/MenuItem';
import LogoutDialog from '@/layouts/layout/Components/LogoutDialog';
import { DirectionDown, MenuUser, OutRectangle } from 'react-huge-icons/outline';
import { adminMenuItem, userMenuItem } from '@/constant/Lists';
import { useAuth } from '@/Context/AuthContext/AuthContext';

const DashboardLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileMenuShow, setMobileMenuShow] = useState(false);
    const { pathname } = useRouter();
    const [auth] = useAuth();
    const menuItem = auth.isAdmin ? adminMenuItem : userMenuItem;

    return (
        <Layout>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-[20%] bg-white lg:fixed border border-gray-100 h-full p-2 lg:p-3 lg:overflow-hidden'>
                    <div
                        className={`py-2 px-4 lg:p-0 flex flex-col gap-5 rounded-lg border shadow lg:shadow-none lg:border-none ${
                            mobileMenuShow ? '' : 'h-12 lg:h-auto'
                        }`}>
                        <div className='flex lg:hidden items-center justify-between text-gray-500'>
                            <MenuUser className='w-8 h-8' />

                            <DirectionDown
                                className={`w-6 h-6 duration-150${mobileMenuShow ? ' rotate-180' : ' '}`}
                                onClick={() => setMobileMenuShow(!mobileMenuShow)}
                            />
                        </div>
                        <div className={` ${mobileMenuShow ? 'border-t pt-4' : 'hidden lg:flex flex-col'}`}>
                            <nav className={`border-b pb-5 mb-5`}>
                                <ul className='flex flex-col gap-5'>
                                    {menuItem &&
                                        menuItem.map(({ id, href, label, Icon }) => (
                                            <Link
                                                key={id}
                                                href={href}
                                                title={label}>
                                                <MenuItem
                                                    label={label}
                                                    Icon={Icon}
                                                    active={pathname === href}
                                                />
                                            </Link>
                                        ))}
                                </ul>
                            </nav>
                            <MenuItem
                                label='خروج از حساب کاربری'
                                Icon={OutRectangle}
                                onClick={() => setIsOpen(true)}
                            />
                            <LogoutDialog
                                isOpen={isOpen}
                                closeModal={() => setIsOpen(false)}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[80%] lg:mr-[20%] mb-16 lg:mb-0'>
                    <div className='m-3 lg:m-10 p-10 bg-white rounded-lg flex flex-col justify-between gap-10'>{children}</div>
                </div>
            </div>
        </Layout>
    );
};

export default DashboardLayout;
