import { userRequest } from '@/services/HttpConfig';

const UserUpdate = async values => {
    return await userRequest.put('/update', values, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
export default UserUpdate;
