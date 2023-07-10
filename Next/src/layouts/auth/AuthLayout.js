import Image from 'next/image';
import Button from '@/components/Button/Button';
import Footer from '@/layouts/layout/Footer';
import { ArrowRight } from 'react-huge-icons/outline';

const AuthLayout = ({ children }) => {
    return (
        <>
            <div className='flex items-center justify-between w-full sm:my-20 h-[100vh] sm:h-auto'>
                <div className='hidden sm:flex fixed inset-0 bg-auth bg-no-repeat bg-center -z-50'></div>
                <div className='container flex flex-col items-center justify-center gap-5 w-[47rem] h-[100%]'>
                    <Image
                        width='134'
                        height='40'
                        src='/assets/images/typo_logo.svg'
                        alt='لوگو سینما تیکت'
                        className='hidden sm:flex'
                    />
                    <div className='w-full flex justify-between hidden sm:flex'>
                        <Button
                            className='bg-white text-gray-900'
                            onClick={() => window.history.back()}>
                            <ArrowRight className='w-4 h-4' />
                            بازگشت
                        </Button>
                    </div>
                    <div className='w-full bg-white min-h-[50px] py-8 px-6 rounded-md'>{children}</div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default AuthLayout;
