import { userRequest } from '@/services/HttpConfig';

const UserLogOut = async () => {
    return await userRequest.post('/logout');
};

export default UserLogOut;
