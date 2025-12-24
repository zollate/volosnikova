import './Footer.scss';
import { FaCar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTruck, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Лого и описание */}
          <div className="footer-section">
            <div className="footer-logo">
              <FaCar className="footer-logo-icon" />
              <span className="footer-logo-text">ТЮНИНГ АВТОВАЗ</span>
            </div>
            <p className="footer-description">
              Оригинальные запчасти и аксессуары для тюнинга автомобилей ВАЗ. Доставка по всей
              России.
            </p>
          </div>

          {/* Контакты */}
          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <div className="footer-contacts">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:88001234567">8 (800) 123-45-67</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:info@avto-tuning.ru">info@avto-tuning.ru</a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>г. Москва, ул. Автозаводская, 23</span>
              </div>
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="footer-features">
          <div className="feature">
            <FaTruck className="feature-icon" />
            <div className="feature-text">
              <span className="feature-title">Быстрая доставка</span>
              <span className="feature-desc">По РФ от 2-х дней</span>
            </div>
          </div>
          <div className="feature">
            <FaShieldAlt className="feature-icon" />
            <div className="feature-text">
              <span className="feature-title">Гарантия качества</span>
              <span className="feature-desc">Официальная гарантия</span>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="footer-bottom">
          <div className="copyright">© {currentYear} Тюнинг АвтоВАЗ. Все права защищены.</div>
          <div className="footer-links">
            <a href="/privacy">Политика конфиденциальности</a>
            <a href="/oferta">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
