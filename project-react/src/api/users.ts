const usersData = [
    {
        firstName: 'User',
        lastName: 'User',
        phone: '01010101010',
        email: 'user@email.com',
        password: 'password',
    },
];

interface LogInAttempt {
    email: string;
    password: string;
}

export const authenticate = (attempt: LogInAttempt) => {
    const user = usersData.find((user) => user.email === attempt.email);
    if (user && user.password === attempt.password) {
        return true;
    }
    return false;
};

export const getUserInfo = (email: string) => {
    const user = usersData.find((user) => user.email === email);
    return user;
};
