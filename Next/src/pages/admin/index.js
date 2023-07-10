import React from 'react';
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout';
import CheckLoggedInAdminDashboard from '@/utils/Server/CheckLoggedInAdminDashboard';

export async function getServerSideProps({ req }) {
    return CheckLoggedInAdminDashboard(req, '/auth/admin?returnUrl=%2Fadmin');
}

const Dashboard = () => {
    return <DashboardLayout>Dashboard</DashboardLayout>;
};

export default Dashboard;
