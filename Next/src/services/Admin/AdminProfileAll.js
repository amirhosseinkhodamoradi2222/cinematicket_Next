import { adminRequest } from '@/services/HttpConfig';

const AdminProfileAll = async () => {
    return await adminRequest.get('/profile/all');
};

export default AdminProfileAll;
