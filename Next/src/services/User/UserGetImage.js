import { Http } from '@/services/HttpConfig';
const UserGetImage = async value => {
    return await Http.get(`/img${value}`);
};
export default UserGetImage;
