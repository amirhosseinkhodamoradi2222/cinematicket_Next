import '@/styles/globals.css';
import Head from 'next/head';
import AuthProvider from '@/Context/AuthContext/AuthContext';
import { Toaster } from 'react-hot-toast';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false, easing: 'ease', speed: 500 });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>سینماتیکت بزرگ ترین مرجع فروش و رزرو بلیط سینما در ایران</title>
                <meta
                    content='بزرگترین مرجع فروش بلیت سینما'
                    name='description'
                />
                <meta charSet='utf-8' />
                <meta
                    content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
                    name='viewport'
                />
                <meta
                    content='سینماتیکت'
                    name='author'
                />
                <meta
                    content='اکران فیلم ,سینما, بلیت سینما , سینماهای تهران , رزرو بلیط سینماها, جدول فروش فیلمها , برنامه سینماهای جشنواره فیلم , iran, cinema , ticket, فجر , سالنهای سینما , خرید بلیط , هویزه مشهد'
                    name='keywords'
                />
                <meta
                    content='index follow'
                    name='robots'
                />
                <meta
                    content='2018-2019'
                    name='copyright'
                />
                <meta
                    content='IE=edge'
                    httpEquiv='X-UA-Compatible'
                />
                <meta
                    content='initial-scale=1.0 user-scalable=no width=device-width'
                    name='viewport'
                />
                <meta
                    content='default'
                    name='apple-mobile-web-app-status-bar-style'
                />
                <meta
                    content='yes'
                    name='apple-mobile-web-app-capable'
                />
                <meta
                    name='google'
                    content='notranslate'
                />
                <meta
                    content='fa_IR'
                    property='og:locale'
                />
                <meta
                    content='website'
                    property='og:type'
                />
                <meta
                    content='سینماتیکت: بزرگترین مرجع فروش بلیت سینما'
                    property='og:title'
                />
                <meta
                    content='سینماتیکت - بزرگترین مرجع فروش بلیت سینما'
                    property='og:description'
                />
                <meta
                    content='https://www.cinematicket.org/'
                    property='og:url'
                />
                <meta
                    content='سینماتیکت'
                    property='og:site_name'
                />
                <meta
                    content='assets/images/logo.png'
                    property='og:image'
                />
                <meta
                    content='image/jpeg'
                    property='og:image:type'
                />
                <meta
                    content='250'
                    property='og:image:height'
                />
                <meta
                    content='290'
                    property='og:image:width'
                />
                <meta
                    content='summary_large_image'
                    name='twitter:card'
                />
                <meta
                    content='https://www.cinematicket.org/'
                    name='twitter:site'
                />
                <meta
                    content='سینماتیکت: بزرگترین مرجع فروش بلیت سینما'
                    name='twitter:title'
                />
                <meta
                    content='سینماتیکت - بزرگترین مرجع فروش بلیت سینما'
                    name='twitter:description'
                />
                <meta
                    content='assets/images/logo.png'
                    name='twitter:image'
                />
                <meta
                    content='fa'
                    name='DC.Language'
                />
                <meta
                    content='https://www.cinematicket.org/'
                    name='DC.Identifier'
                />
                <meta
                    content='Text'
                    name='DC.Type'
                />
                <meta
                    content='سینماتیکت - بزرگترین مرجع فروش بلیت سینما'
                    name='DC.Title'
                />
                <meta
                    content='سینماتیکت: بزرگترین مرجع فروش بلیت سینما'
                    name='description'
                />
                <meta
                    content='اکران فیلم ,سینما, بلیت سینما , سینماهای تهران , رزرو بلیط سینماها, جدول فروش فیلمها , برنامه سینماهای جشنواره فیلم , iran, cinema , ticket, فجر , سالنهای سینما , خرید بلیط , هویزه مشهد'
                    name='keywords'
                />
                <meta
                    content='سینماتیکت - بزرگترین مرجع فروش بلیت سینما'
                    name='DC.Description'
                />
                <meta
                    content='fa'
                    name='DC.Language'
                />
                <meta
                    content='Cinematicket'
                    name='DC.Publisher'
                />
                <link
                    href='/assets/meta/favicon-32x32.png'
                    rel='icon'
                    sizes='32x32'
                    type='image/png'
                />
                <link
                    href='/assets/meta/favicon-16x16.png'
                    rel='icon'
                    sizes='16x16'
                    type='image/png'
                />
                <link
                    href='/assets/meta/safari-pinned-tab.svg'
                    rel='mask-icon'
                    color='#252630'
                />
                <link
                    href='/assets/meta/apple-touch-icon-57.png'
                    rel='apple-touch-icon'
                    sizes='57x57'
                />
                <link
                    href='/assets/meta/apple-touch-icon-72.png'
                    rel='apple-touch-icon'
                    sizes='72x72'
                />
                <link
                    href='/assets/meta/apple-touch-icon-76.png'
                    rel='apple-touch-icon'
                    sizes='76x76'
                />
                <link
                    href='/assets/meta/apple-touch-icon-114.png'
                    rel='apple-touch-icon'
                    sizes='114x114'
                />
                <link
                    href='/assets/meta/apple-touch-icon-120.png'
                    rel='apple-touch-icon'
                    sizes='120x120'
                />
                <link
                    href='/assets/meta/apple-touch-icon-144.png'
                    rel='apple-touch-icon'
                    sizes='144x144'
                />
                <link
                    href='/assets/meta/apple-touch-icon-152.png'
                    rel='apple-touch-icon'
                    sizes='152x152'
                />
                <link
                    href='/assets/meta/apple-touch-icon-180.png'
                    rel='apple-touch-icon'
                    sizes='180x180'
                />
                <link
                    href='/assets/meta/android-icon.png'
                    rel='shortcut icon'
                    sizes='196x196'
                />
            </Head>

            <AuthProvider>
                <Component {...pageProps} />
                <Toaster
                    position='top-left'
                    reverseOrder={false}
                    toastOptions={{
                        duration: 4000,
                    }}
                />
            </AuthProvider>
        </>
    );
}
