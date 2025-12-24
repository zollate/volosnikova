import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Верхняя часть футера */}
        <div style={styles.topSection}>
          {/* Левая колонка - контакты */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Контакты</h3>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span>
              <span style={styles.contactText}>г. Москва, ул. Автозаводская, 23</span>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📞</span>
              <span style={styles.contactText}>+7 (495) 123-45-67</span>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>✉️</span>
              <span style={styles.contactText}>info@zeleniy-garage.ru</span>
            </div>
          </div>
          
          {/* Центральная колонка - часы работы */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Часы работы</h3>
            <div style={styles.scheduleItem}>
              <span style={styles.scheduleDay}>Пн-Пт:</span>
              <span style={styles.scheduleTime}>9:00 - 20:00</span>
            </div>
            <div style={styles.scheduleItem}>
              <span style={styles.scheduleDay}>Сб:</span>
              <span style={styles.scheduleTime}>10:00 - 18:00</span>
            </div>
            <div style={styles.scheduleItem}>
              <span style={styles.scheduleDay}>Вс:</span>
              <span style={styles.scheduleTime}>11:00 - 16:00</span>
            </div>
          </div>
          
          {/* Правая колонка - услуги */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Услуги</h3>
            <a href="#diagnostics" style={styles.serviceLink}>Диагностика</a>
            <a href="#repair" style={styles.serviceLink}>Ремонт</a>
            <a href="#tire" style={styles.serviceLink}>Шиномонтаж</a>
            <a href="#maintenance" style={styles.serviceLink}>Техобслуживание</a>
          </div>
        </div>
        
        {/* Разделитель */}
        <div style={styles.divider}></div>
        
        {/* Нижняя часть футера */}
        <div style={styles.bottomSection}>
          {/* Логотип и копирайт */}
          <div style={styles.logoCopyright}>
            <div style={styles.footerLogo}>
              <div style={styles.footerLogoCircle}>
                <span style={styles.footerLogoText}>ZG</span>
              </div>
              <span style={styles.footerTitle}>ЗЕЛЕНЫЙ ГАРАЖ</span>
            </div>
            <p style={styles.copyright}>
              © {currentYear} Зеленый гараж. Все права защищены.
            </p>
          </div>
          
          {/* Социальные сети */}
          <div style={styles.social}>
            <h4 style={styles.socialTitle}>Мы в соцсетях:</h4>
            <div style={styles.socialIcons}>
              <a href="#vk" style={styles.socialLink} aria-label="ВКонтакте">VK</a>
              <a href="#telegram" style={styles.socialLink} aria-label="Telegram">TG</a>
              <a href="#instagram" style={styles.socialLink} aria-label="Instagram">IG</a>
              <a href="#youtube" style={styles.socialLink} aria-label="YouTube">YT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#272c36', // ваш --dark-3
    color: '#f2f3f4', // ваш --var2
    padding: '40px 0 20px 0',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  topSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px',
    marginBottom: '30px',
  },
  column: {
    flex: '1',
    minWidth: '250px',
  },
  columnTitle: {
    color: '#0095cd', // ваш --primary-accent-0
    fontSize: '18px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
    fontSize: '15px',
  },
  contactIcon: {
    color: '#0095cd',
    fontSize: '18px',
    minWidth: '24px',
  },
  contactText: {
    color: '#838a94', // ваш --col-d-text2
  },
  scheduleItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    fontSize: '15px',
  },
  scheduleDay: {
    color: '#ffffff',
  },
  scheduleTime: {
    color: '#838a94',
    fontWeight: '500',
  },
  serviceLink: {
    display: 'block',
    color: '#838a94',
    textDecoration: 'none',
    marginBottom: '10px',
    fontSize: '15px',
    transition: 'color 0.3s ease',
  },
  serviceLinkHover: {
    color: '#ffffff',
  },
  divider: {
    height: '1px',
    backgroundColor: '#323c4d', // ваш --dark-1
    margin: '30px 0',
  },
  bottomSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '30px',
  },
  logoCopyright: {
    flex: '1',
    minWidth: '300px',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  footerLogoCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#0095cd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLogoText: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  footerTitle: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  copyright: {
    color: '#838a94',
    fontSize: '14px',
    margin: 0,
  },
  social: {
    textAlign: 'center',
  },
  socialTitle: {
    color: '#ffffff',
    fontSize: '16px',
    marginBottom: '15px',
    fontWeight: '500',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: '#2c3440', // ваш --dark-2
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '50%',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
  socialLinkHover: {
    backgroundColor: '#0095cd',
    transform: 'translateY(-2px)',
  },
};

// Добавляем обработчики для hover эффектов
Object.keys(styles).forEach(key => {
  if (key.includes('Hover')) {
    const baseKey = key.replace('Hover', '');
    const originalStyle = styles[baseKey];
    const hoverStyle = styles[key];
    
    // Для React inline стилей нужно будет добавить onMouseEnter/onMouseLeave
    // Здесь просто оставляем стили для справки
  }
});

export default Footer;