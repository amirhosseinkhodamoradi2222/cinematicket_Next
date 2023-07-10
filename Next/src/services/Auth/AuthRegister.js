import { Http } from '@/services/HttpConfig';

const AuthRegister = async ({ username, password, repeatPass }) =>
    await Http.post('/auth/signup', {
        tel: username,
        password: password,
        repeatPass: repeatPass,
    });

export default AuthRegister;
