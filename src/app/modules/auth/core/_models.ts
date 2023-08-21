
export interface ILoginUser {
    userName: string;
    password: string;
}

export interface IForgetPassword {
    email: string;
}

export interface IResetPassword {
    email: string
    token: string
    password: string
    confirmPassword: string
} 

export interface IConfirmEmail {
    userId: string
    code: string
}