import "../styles/header.css"
import logo from "../assets/images/logo-main.svg"

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img src={logo} className="logo" />
        <nav className="nav">
          <a>Home</a>
          <a>About</a>
          <a>Courses</a>
          <a>Pages</a>
          <a>Blog</a>
          <a>Contact</a>
        </nav>
        <button className="header-btn">Contact</button>
      </div>
    </header>
  )
}

export default Header
