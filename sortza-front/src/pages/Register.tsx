import Layout from "../components/Layout";
import "../style/login.scss"
import Input from "../components/Input";
import Button from "../components/Button";
import LinkTo from "../components/LinkTo";
import React, { useState } from "react";
import { registerUser } from "../service/UserService";
import { IRegister } from "../interface/IUser";

const Register = () => {

  const [output, setOutput] = useState<string>("");
  
  const handleRegister = async (e : React.BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    if(formData.get("email") === "" || formData.get("username") === "" || formData.get("password") || formData.get("reconfirmPassword")){
      return setOutput("Fill out all details!")
    }
    

    if(formData.get("password") !== formData.get("reconfirmPassword"))return setOutput("Passwords do not match, try again!");

    const registerObject : IRegister = {
      email : formData.get("email") as string,
      username : formData.get("username") as string,
      password : formData.get("password") as string,
      reconfirmPassword : formData.get("reconfirmPassword") as string,
    };
    

    const response = await registerUser(registerObject);
    console.log(response);
    setOutput(response);
  }

  return (
  <Layout>
     <div className="login-container">
       <h1 className="login-container__heading">Register</h1>
       <form className="login-container__form login-form" onSubmit={(e) => handleRegister(e)}>
          <Input className="login-form__input" type="email" placeholder="Email Address" name="email"/>
          <Input className="login-form__input" type="text" placeholder="Username" name="username"/>
          <Input className="login-form__input" type="password" placeholder="Password" name="password"/>
          <Input className="login-form__input" type="password" placeholder="Reconfirm Password" name="reconfirmPassword"/>
          <Button className="login-form__btn" text="Register"/>
          <p className="login-form__error">{output}</p>
       </form>
       <p className="login-container__info">Already a member?&nbsp;   
        <LinkTo to="/login" text="Login now" className="login-container__signup"/>
       </p>
     </div>
  </Layout>
  )
}

export default Register;