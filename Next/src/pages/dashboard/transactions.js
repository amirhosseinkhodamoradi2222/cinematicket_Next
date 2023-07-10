import React from 'react';
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout';
import CheckLoggedInUserDashboard from '@/utils/Server/CheckLoggedInUserDashboard';

export async function getServerSideProps({ req }) {
    return CheckLoggedInUserDashboard(req, '/auth/login?returnUrl=%2Fdashboard%2Ftransactions');
}
const Transactions = props => <DashboardLayout>Transactions</DashboardLayout>;

export default Transactions;
