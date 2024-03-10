export interface UserInfo {
    user: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        password: string;
    };
    expires: Date;
}
