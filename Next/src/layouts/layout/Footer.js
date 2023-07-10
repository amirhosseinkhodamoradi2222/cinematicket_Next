import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/Context/AuthContext/AuthContext';
import { footerMenu, footerMobile, footerSocils } from '@/constant/Lists';
import { User } from 'react-huge-icons/outline';
import { Routes } from '@/constant/Routes';

const Footer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { pathname } = useRouter();
    const [auth] = useAuth();
    const userMobile = {
        href: isLoggedIn ? Routes.dashboard : Routes.login + '?returnUrl=' + encodeURIComponent(pathname),
        label: isLoggedIn ? 'داشبورد' : 'ورود',
    };
    useEffect(() => {
        setIsLoggedIn(auth.isLoggedIn);
    }, [auth]);

    return (
        <section>
            <div className='hidden lg:flex bg-secondary text-white text-[0.7rem] fixed bottom-0 w-full'>
                <div className='container py-1.5 flex items-center justify-between'>
                    {footerMenu && (
                        <nav>
                            <ul className='flex items-center gap-1'>
                                {footerMenu.map(({ id, href, label }) => (
                                    <Link
                                        key={id}
                                        href={href}
                                        title={label}
                                        className='py-1 px-2 hover:bg-[#4e5067] rounded-md'>
                                        {label}
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    )}
                    {footerSocils && (
                        <ul className='flex items-center gap-4'>
                            {footerSocils.map(({ id, href, label, Icon }) => (
                                <Link
                                    key={id}
                                    href={href}
                                    title={label}>
                                    <Icon className='w-4 h-4' />
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            {footerMobile && (
                <div className='bg-white flex lg:hidden text-sm fixed bottom-0 w-full p-2 border-t'>
                    <ul className='flex items-center justify-around w-full'>
                        {footerMobile.map(({ id, href, label, Icon }) => {
                            return (
                                <Link
                                    key={id}
                                    href={href}
                                    title={label}
                                    className={`flex flex-col items-center gap-1 ${
                                        pathname.includes(href.split('?')[0]) ? 'text-red-500 ' : 'text-gray-500 '
                                    }`}>
                                    <Icon className='w-5 h-5' />
                                    <span>{label}</span>
                                </Link>
                            );
                        })}
                        <Link
                            href={userMobile.href}
                            title={userMobile.label}
                            className={`flex flex-col items-center gap-1 ${
                                pathname.includes(userMobile.href.split('?')[0]) ? 'text-red-500 ' : 'text-gray-500 '
                            }`}>
                            <User className='w-5 h-5' />
                            <span>{userMobile.label}</span>
                        </Link>
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Footer;
