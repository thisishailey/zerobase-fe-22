export default interface IUserInfo {
    user: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        password: string;
    };
    expires: Date;
}
