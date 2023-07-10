import React from 'react';
import UserProfile from '@/services/User/UserProfile';
import AdminGetProfile from '@/services/Admin/AdminGetProfile';

const CheckLoggedInAdminDashboard = async (req, destination) => {
    let adminDashboardData = '';
    const adminData = req.cookies.adminData && JSON.parse(req.cookies.adminData);
    adminData &&
        (await AdminGetProfile(adminData.id, {
            Cookie: req.headers.cookie,
        })
            .then(res => (adminDashboardData = res.data))
            .catch(err => {
                console.log(err);
            }));

    return {
        ...((adminData && req.cookies.authToken ? adminData?.tel !== adminDashboardData?.tel : false)
            ? {
                  redirect: {
                      permanent: false,
                      destination,
                  },
              }
            : { props: {} }),
    };
};

export default CheckLoggedInAdminDashboard;
