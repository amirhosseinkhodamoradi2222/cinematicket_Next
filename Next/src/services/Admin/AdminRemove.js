import { adminRequest } from '@/services/HttpConfig';

const AdminRemove = async admin_id => {
    return await adminRequest.delete(`/remove/${admin_id}`);
};

export default AdminRemove;
