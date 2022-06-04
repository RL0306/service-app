import  "../style/header.scss"
import LinkTo from "./LinkTo";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">Sortza</h1>
      
      <nav className="header__nav nav">
        <LinkTo className="nav__link" text="Services" to="/services"/>
        <LinkTo className="nav__link" text="Projects" to="/projects"/>
        <LinkTo className="nav__link" text="About" to="/about"/>
        <LinkTo className="nav__link" text="Contact US" to="/contact"/>
        <LinkTo className="nav__link" text="Login" to="/login"/>
      </nav>
    </header>
  )
}

export default Header;