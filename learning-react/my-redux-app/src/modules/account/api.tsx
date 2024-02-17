export const fetchUser = () => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve({ name: 'user', email: 'user@gmail.com' }),
            1000
        );
    });
};

export interface FetchUserRes {
    name: string;
    email: string;
}
