import { adminRequest } from '@/services/HttpConfig';

const AdminUpdate = async (value, admin_id) => {
    return await adminRequest.put(`/update/${admin_id}`, value);
};

export default AdminUpdate;
