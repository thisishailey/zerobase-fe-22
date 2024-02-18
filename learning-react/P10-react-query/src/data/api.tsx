import axios from 'axios';

export const getUser = () => {
    let data;
    axios.get('/user').then((res) => (data = res.data));
    return data;
};

export const updateNickname = (nickname: string) => {
    return axios.put(`/update-nickname?nickname=${nickname}`);
};
