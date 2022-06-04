import Layout from "../components/Layout";
import "../style/login.scss"
import Input from "../components/Input";
import Button from "../components/Button";
import LinkTo from "../components/LinkTo";
import React from "react";

const Login = () => {

  const handleLogin = (e : React.BaseSyntheticEvent) => {
    e.preventDefault();
    console.log("ran");
  }

  return (
  <Layout>
     <div className="login-container">
       <h1 className="login-container__heading">Login</h1>
       <form onSubmit={(e) => handleLogin(e)} className="login-container__form login-form">
          <Input className="login-form__input" type="email" placeholder="Email Address" name="email"/>
          <Input className="login-form__input" type="password" placeholder="Password" name="password"/>
          <LinkTo to="/register" text="Register here" className="login-form__link"/>
          <Button type="submit" className="login-form__btn"text="Login"/>
       </form>
       <p className="login-container__info">Not yet member?&nbsp;   
        <LinkTo to="/*" text="Sign up now" className="login-container__signup"/>
       </p>
     </div>
  </Layout>
  )
}

export default Login;