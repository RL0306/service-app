import Layout from "../components/Layout";
import "../style/login.scss"
import Input from "../components/Input";
import Button from "../components/Button";
import LinkTo from "../components/LinkTo";

const Register = () => {
  
  return (
  <Layout>
     <div className="login-container">
       <h1 className="login-container__heading">Register</h1>
       <form className="login-container__form login-form">
          <Input className="login-form__input" type="email" placeholder="Email Address" name="email"/>
          <Input className="login-form__input" type="password" placeholder="Password" name="password"/>
          <Button className="login-form__btn"text="Login"/>
       </form>
       <p className="login-container__info">Already a member?&nbsp;   
        <LinkTo to="/login" text="Login now" className="login-container__signup"/>
       </p>
     </div>
  </Layout>
  )
}

export default Register;