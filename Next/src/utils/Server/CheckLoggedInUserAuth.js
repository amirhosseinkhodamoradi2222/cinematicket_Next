import React from 'react';
import UserProfile from '@/services/User/UserProfile';

const CheckLoggedInUserAuth = async (req, destination) => {
    let userProfileData = '';
    const userData = req.cookies.userData && JSON.parse(req.cookies.userData);
    req.cookies.authToken &&
        (await UserProfile({
            Cookie: req.headers.cookie,
        })
            .then(res => (userProfileData = res.data))
            .catch(err => {
                console.log(err);
            }));

    return {
        ...((userData && req.cookies.authToken ? userData?.tel === userProfileData?.tel : false)
            ? {
                  redirect: {
                      permanent: false,
                      destination,
                  },
              }
            : { props: {} }),
    };
};

export default CheckLoggedInUserAuth;
