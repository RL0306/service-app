import axios, { AxiosError } from "axios";
import { ILogin, IRegister } from "../interface/IUser";

export const loginUser = async (iLogin : ILogin) => {
  try{
    await axios.post("http://localhost:3333/api/v1/auth/login",iLogin , {withCredentials : true});
    return "Logging in!";
  } catch(error){
    const { response } = error as AxiosError;
    if(response?.status === 404)return "Invalid credentials"
    return "Something went wrong";
  }
}

export const registerUser = async (iRegister : IRegister) => {
  try{
    await axios.post("http://localhost:3333/api/v1/auth/register", iRegister, {withCredentials : true});
    return "Successfully registered";
  } catch(error){
    const { response } = error as AxiosError;
    if(response?.status === 403)return "Credentials taken!"
    return "Something went wrong";
  }
}