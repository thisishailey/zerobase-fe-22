import axios from 'axios';

export const getUser = async () => {
    return axios.get('/user').then((res) => {
        return res.data;
    });
};

export const updateNickname = (nickname: string) => {
    return axios.put(`/update-nickname?nickname=${nickname}`);
};
