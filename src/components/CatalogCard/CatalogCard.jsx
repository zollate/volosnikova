import React from 'react';
import './CatalogCard.scss';

const CatalogCard = ({ title, price, image, onClick, oldPrice = null }) => {
  // Форматирование цены (например, 50 000 ₽)
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(price);

  return (
    <article className="catalog-card" onClick={onClick}>
      {/* Обертка для картинки с зум-эффектом */}
      <div className="catalog-card__image-wrapper">
        <img className="catalog-card__image" src={image} alt={title} loading="lazy" />
        {/* Пример бейджика (можно передавать пропсом) */}
        <span className="catalog-card__badge">New</span>
      </div>

      <div className="catalog-card__content">
        <h3 className="catalog-card__title" title={title}>{title}</h3>
        
        <div className="catalog-card__footer">
          <div className="catalog-card__price-box">
            {oldPrice && <span className="catalog-card__old-price">{oldPrice} ₽</span>}
            <span className="catalog-card__price">{formattedPrice} ₽</span>
          </div>
          
          <button className="catalog-card__cart-btn" aria-label="В корзину">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CatalogCard;