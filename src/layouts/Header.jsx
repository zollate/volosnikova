import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
                <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Главная</Link>
          <Link to="/about" style={styles.navLink}>О нас</Link>
          <Link to="/services" style={styles.navLink}>Услуги</Link>
          <Link to="/contacts" style={styles.navLink}>Контакты</Link>
        </nav>

      <div style={styles.container}>
        {/* Логотип и название */}
        <div style={styles.logoContainer}>
          {/* Круглый логотип */}
          <div style={styles.logo}>
            <img src="/img/logo.png" alt="" width={100} />
          </div>
          
          {/* Название */}
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>ЗЕЛЕНЫЙ ГАРАЖ</h1>
            <p style={styles.subtitle}>Автосервис и запчасти</p>
          </div>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'var(--main-background-1)',
    borderBottom: '2px solid var(--dark-1)',
    padding: '15px 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'var(--primary-accent-0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  logoText: {
    color: 'var(--col-d-text)',
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: 'var(--col-d-text)',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  subtitle: {
    color: 'var(--col-d-text2)',
    fontSize: '14px',
    margin: '5px 0 0 0',
    letterSpacing: '0.5px',
  },
};

export default Header;