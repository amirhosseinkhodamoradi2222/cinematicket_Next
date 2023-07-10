import { adminRequest } from '@/services/HttpConfig';
const AdminProfilePicRemove = async () => {
    return await adminRequest.delete(`/profilePic/remove`);
};

export default AdminProfilePicRemove;
