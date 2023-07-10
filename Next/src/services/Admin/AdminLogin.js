import { adminRequest } from '@/services/HttpConfig';

const AdminLogin = async ({ username, password }) => {
    return await adminRequest.post('/login', {
        tel: username,
        password: password,
    });
};

export default AdminLogin;
