import React from 'react';
import Image from 'next/image';
import { Clapperboard, FilmstripCircle, LocationAdd, MenuLineHorizontal, Search, Ticket } from 'react-huge-icons/outline';
import Link from 'next/link';
import ButtonIcon from '@/components/Button/ButtonIcon';
import HeaderAccountButton from '@/layouts/layout/Components/HeaderAccountButton';
import Button from '@/components/Button/Button';

const Header = () => (
    <section className='bg-white border-b sticky top-0 z-[999]'>
        <div className='container py-3 flex items-center justify-between gap-3'>
            <div className='flex items-center gap-3'>
                <MenuLineHorizontal className='flex w-10 h-10 lg:hidden' />
                <Link href='/'>
                    <div className='flex gap-1 items-center'>
                        <Image
                            width='24'
                            height='24'
                            src='/assets/images/logo.svg'
                            alt='لوگو سینما تیکت'
                        />
                        <Image
                            width='83'
                            height='20'
                            src='/assets/images/typo-single-logo.svg'
                            alt='لوگو سینما تیکت'
                            className='w-auto h-auto'
                        />
                    </div>
                </Link>
                <div className='hidden lg:flex items-center justify-between gap-1'>
                    <Link href='/home/movie'>
                        <ButtonIcon
                            Icon={Clapperboard}
                            responsive={true}
                            text=' فیلم و تئاطر'
                            color='#ff3543'
                            backgroundColor='#ff35431a'
                        />
                    </Link>
                    <Link href='/auth/login'>
                        <ButtonIcon
                            Icon={FilmstripCircle}
                            responsive={true}
                            text=' سینما'
                            color='#ff3543'
                            backgroundColor='#ff35431a'
                        />
                    </Link>
                </div>
                <div className='hidden lg:flex items-center gap-3 bg-gray-100 rounded-md p-2 xl:w-96'>
                    <Search className='w-5 h-5 text-gray-400' />
                    <input
                        type='text'
                        name='search'
                        placeholder='جست‌وجوی فیلم، سینما، کارگردان، بازیگر و ...'
                        className='bg-transparent placeholder:text-xs w-full'
                    />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Button className='group flex items-center justify-between gap-2 py-1 px-3 rounded-md duration-150 cursor-pointer hover:bg-[#DDDEEF66]'>
                    <LocationAdd className='w-5 h-5 lg:w-4 lg:h-4 lg:text-gray-500' />
                    <span className='text-sm hidden xl:flex'>شهر خود را انتخاب کنید</span>
                </Button>
                <Link href='/dashboard/tickets'>
                    <Button className='group flex items-center justify-between gap-2 py-1 px-3 rounded-md duration-150 cursor-pointer hover:bg-[#DDDEEF66]'>
                        <Ticket className='w-5 h-5 lg:w-4 lg:h-4 lg:text-gray-500' />
                        <span className='text-base lg:text-sm'>بلیط های من</span>
                    </Button>
                </Link>

                <div className='hidden lg:flex'>
                    <HeaderAccountButton />
                </div>
            </div>
        </div>
    </section>
);

export default Header;
