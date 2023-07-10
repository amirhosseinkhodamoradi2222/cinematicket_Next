import React from 'react';
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout';
import CheckLoggedInUserDashboard from '@/utils/Server/CheckLoggedInUserDashboard';

export async function getServerSideProps({ req }) {
    return CheckLoggedInUserDashboard(req, '/auth/login?returnUrl=%2Fdashboard%2Ftickets');
}
const Tickets = props => <DashboardLayout>Tickets</DashboardLayout>;

export default Tickets;
