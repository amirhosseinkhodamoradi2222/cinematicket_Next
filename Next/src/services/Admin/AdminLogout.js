import { adminRequest } from '@/services/HttpConfig';

const AdminLogout = async () => {
    return await adminRequest.post('/logout');
};

export default AdminLogout;
