import React from 'react';
import UserProfile from '@/services/User/UserProfile';

const CheckLoggedInUserDashboard = async (req, destination) => {
    let userProfileData = '';
    req.cookies.authToken &&
        (await UserProfile({
            Cookie: req.headers.cookie,
        }).then(res => (userProfileData = res.data)));

    const userDataCookie = req.cookies.userData && JSON.parse(req.cookies.userData);

    return {
        ...(!req.cookies.authToken || userDataCookie?.tel !== userProfileData?.tel
            ? {
                  redirect: {
                      permanent: false,
                      destination,
                  },
              }
            : { props: {} }),
    };
};

export default CheckLoggedInUserDashboard;
