import Layout from "./Layout";
import "../style/login.scss"
import Input from "./Input";
import Button from "./Button";
import LinkTo from "./LinkTo";

const Login = () => {
  
  return (
  <Layout>
     <div className="login-container">
       <h1 className="login-container__heading">Login</h1>

       <form className="login-container__form login-form">
          <Input className="login-form__input" type="email" placeholder="Email Address" name="email"/>
          <Input className="login-form__input" type="password" placeholder="Password" name="password"/>
          <LinkTo to="/register" text="Register here" className="login-form__link"/>
          <Button className="login-form__btn"text="Login"/>
       </form>


       <p className="login-container__info">Not yet member?&nbsp;   
        <LinkTo to="/*" text="Sign up now" className="login-container__signup"/>
       </p>
     </div>
  </Layout>
  )
}

export default Login;