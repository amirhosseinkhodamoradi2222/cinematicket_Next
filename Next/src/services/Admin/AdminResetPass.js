import { adminRequest } from '@/services/HttpConfig';

const AdminResetPass = async value => {
    return await adminRequest.put('/resetPass', value);
};

export default AdminResetPass;
