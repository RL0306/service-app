import axios from "axios";

export const loginUser = async (username : string, password : string) => {
  try{
    const req = await axios.post("http://localhost:3333/api/v1/auth/login", {username, password}, {withCredentials : true});
    console.log(req.data);
  } catch(error){
    console.log(error);
  }
}