import React from 'react';
import Header from '@/layouts/layout/Header';
import Footer from '@/layouts/layout/Footer';

const Layout = ({ children }) => (
    <>
        <Header />

        <main>{children}</main>

        <Footer />
    </>
);

export default Layout;
