import { Http } from '@/services/HttpConfig';
const AuthLogin = async (values) =>
    await Http.post('/auth/login', values);

export default AuthLogin;
