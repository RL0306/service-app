import Layout from "../components/Layout";
import "../style/login.scss"
import Input from "../components/Input";
import Button from "../components/Button";
import LinkTo from "../components/LinkTo";
import React, { useState } from "react";
import { ILogin } from "../interface/IUser";
import { loginUser } from "../service/UserService";

const Login = () => {

  const[output, setOutput] = useState<string>("");

  const handleLogin = async (e : React.BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    if(formData.get("username") === "" || formData.get("password") === ""){
      return setOutput("Fill out all details!")
    }

    const loginObject : ILogin = {
      username : formData.get("username"),
      password : formData.get("password")
    } as ILogin

    const response = await loginUser(loginObject);
    setOutput(response)

  }

  return (
  <Layout>
     <div className="login-container">
       <h1 className="login-container__heading">Login</h1>
       <form onSubmit={(e) => handleLogin(e)} className="login-container__form login-form">
          <Input className="login-form__input" type="text" placeholder="Username" name="username"/>
          <Input className="login-form__input" type="password" placeholder="Password" name="password"/>
          <Button type="submit" className="login-form__btn"text="Login"/>
          <p className="login-form__error">{output}</p>
       </form>
       <p className="login-container__info">Not yet member?&nbsp;   
        <LinkTo to="/register" text="Sign up now" className="login-container__signup"/>
       </p>
     </div>
  </Layout>
  )
}

export default Login;