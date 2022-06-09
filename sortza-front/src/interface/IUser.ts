export interface IRegister{
    email : string,
    username : string,
    password : string,
    reconfirmPassword : string
}

export interface ILogin {
    username : string,
    password : string
}

export interface IUserContext {
    user : IUser | null,
    setUser : React.Dispatch<React.SetStateAction<IUser | null>>
}

export interface IUser{
    id : number
    username : string,
    email : string,
    role : string
}