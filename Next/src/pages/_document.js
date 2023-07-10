import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html
            lang='fa-IR'
            dir='rtl'>
            <Head />
            <body className='bg-white sm:bg-[#f5f5f5]'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
