import { userRequest } from '@/services/HttpConfig';

const UserProfile = async (headers = {}) => {
    return await userRequest.get('/profile', {
        headers: { ...headers },
    });
};

export default UserProfile;
