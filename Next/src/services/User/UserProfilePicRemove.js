import { userRequest } from '@/services/HttpConfig';

const UserProfilePicRemove = () => {
    return userRequest.delete('/profilePic/remove');
};

export default UserProfilePicRemove;
