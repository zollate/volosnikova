import './Header.scss'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "16px", background: "#eee" }}>
      <nav style={{ display: "flex", gap: "16px" }}>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  )
}

export default Header