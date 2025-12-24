import './Header.scss';
import { Link } from "react-router-dom";
import { FaCar, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="logo">
              <FaCar className="logo-icon" />
              <span className="logo-text">ТЮНИНГ АВТОВАЗ</span>
            </div>
            
            <div className="header-contacts">
              <a href="tel:88001234567" className="phone">8 (800) 123-45-67</a>
              <span className="work-hours">Ежедневно 9:00-21:00</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/catalog" className="nav-link">Каталог</Link>
            <Link to="/news" className="nav-link">Новости</Link>
            <Link to="/reviews" className="nav-link">Отзывы</Link>
            

          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;