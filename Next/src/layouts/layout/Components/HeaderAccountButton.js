import React, { useEffect, useState } from 'react';
import {
    InRectangle,
    OutRectangle,
    Receipt,
    Shield,
    Ticket,
    User,
    UserPolygon,
    Wallet,
    EditRectangle,
} from 'react-huge-icons/outline';
import Link from 'next/link';
import { getAdminData, getUserData } from '@/utils/ResponseData/ResponseData';
import DropDown from '@/components/DropDown/DropDown';
import LogoutDialog from '@/layouts/layout/Components/LogoutDialog';
import { useAuth } from '@/Context/AuthContext/AuthContext';
import MenuItem from '@/components/Menu/MenuItem';
import { adminLoggedIn, notLoggedIn, userLoggedIn } from '@/constant/Lists';

const HeaderAccountButton = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [auth] = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const data = getUserData() || getAdminData() || null;

    const fullName = (data?.first_name && data?.first_name + ' ' + data?.last_name) || data?.full_name || 'ادمین محترم';
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    useEffect(() => {
        setIsLoggedIn(auth.isLoggedIn);
    }, [auth]);

    if (isLoggedIn && !fullName) {
        return <PleaseAddName />;
    }

    return (
        <DropDown
            title={isLoggedIn ? fullName : 'ورود / ثبت نام'}
            Icon={User}
            Image={data?.profile_pic_url}>
            {!isLoggedIn ? (
                notLoggedIn.map(({ id, href, label, Icon }) => (
                    <Link
                        key={id}
                        href={href}
                        title={label}>
                        <MenuItem
                            label={label}
                            Icon={Icon}
                        />
                    </Link>
                ))
            ) : (
                <>
                    {auth.isAdmin
                        ? adminLoggedIn.map(({ id, href, label, Icon }) => (
                              <Link
                                  key={id}
                                  href={href}
                                  title={label}>
                                  <MenuItem
                                      label={label}
                                      Icon={Icon}
                                  />
                              </Link>
                          ))
                        : userLoggedIn.map(({ id, href, label, Icon }) => (
                              <Link
                                  key={id}
                                  href={href}
                                  title={label}>
                                  <MenuItem
                                      label={label}
                                      Icon={Icon}
                                  />
                              </Link>
                          ))}
                    <MenuItem
                        label='خروج از حساب کاربری'
                        Icon={OutRectangle}
                        onClick={openModal}
                    />
                    <LogoutDialog
                        isOpen={isOpen}
                        closeModal={closeModal}
                    />
                </>
            )}
        </DropDown>
    );
};

export default HeaderAccountButton;

const PleaseAddName = () => (
    <Link
        href='/dashboard/edit-profile'
        className='text-xs py-1 px-3 rounded bg-primary/10 text-primary'>
        نام خود را از اینجا وارد کنید
    </Link>
);
