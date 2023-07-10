import React from 'react';
import AdminGetProfile from '@/services/Admin/AdminGetProfile';

const CheckLoggedInAdminAuth = async (req, destination) => {
    let adminProfileData = '';
    const adminData = req.cookies.adminData && JSON.parse(req.cookies.adminData);
    adminData &&
        (await AdminGetProfile(adminData.id, {
            Cookie: req.headers.cookie,
        })
            .then(res => (adminProfileData = res.data))
            .catch(err => {
                console.log(err);
            }));

    return {
        ...((adminData && req.cookies.authToken ? adminData?.tel === adminProfileData?.tel : false)
            ? {
                  redirect: {
                      permanent: false,
                      destination,
                  },
              }
            : { props: {} }),
    };
};

export default CheckLoggedInAdminAuth;
