import './Header.scss'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "16px", background: "#eee" }}>
      <nav style={{ display: "flex", gap: "16px" }}>
        <Link to="/">Главная</Link>
        <Link to="/reviews">Отзывы</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/news">Новости</Link>
      </nav>
    </header>
  )
}

export default Header