import React from 'react';
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout';
import CheckLoggedInUserDashboard from '@/utils/Server/CheckLoggedInUserDashboard';

export async function getServerSideProps({ req }) {
    return CheckLoggedInUserDashboard(req, '/auth/login?returnUrl=%2Fdashboard%2Fwallet');
}
const Wallet = props => <DashboardLayout>Wallet</DashboardLayout>;

export default Wallet;
