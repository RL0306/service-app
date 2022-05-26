import  "../style/header.scss"

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">Sortza</h1>
      <nav className="header__nav nav">
        <a href="*" className="nav__link">Services</a>
        <a href="*" className="nav__link">Projects</a>
        <a href="*" className="nav__link">About</a>
        <a href="*" className="nav__link">Contact US</a>
        <a href="*" className="nav__link">Login</a>
      </nav>
    </header>
  )
}

export default Header;