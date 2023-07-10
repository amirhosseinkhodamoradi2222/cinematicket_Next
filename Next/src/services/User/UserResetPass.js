import { userRequest } from '@/services/HttpConfig';

const UserUpdate = async values => {
    return await userRequest.put('/resetPass', values);
};
export default UserUpdate;
