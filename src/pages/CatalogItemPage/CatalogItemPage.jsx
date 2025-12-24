import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './CatalogItemPage.scss';
import { catalogItems } from '../../data/catalogItems';

// SVG Иконки
const ArrowLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const HeartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const CatalogItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const item = catalogItems.find((i) => i.id === Number(id));

  // Скролл вверх при открытии страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="catalog-item-error">
        <h2>Товар не найден</h2>
        <button onClick={() => navigate('/catalog')}>Вернуться в каталог</button>
      </div>
    );
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const formattedPrice = new Intl.NumberFormat('ru-RU').format(item.price);
  const totalPrice = new Intl.NumberFormat('ru-RU').format(item.price * quantity);

  return (
    <div className="product-page">
      <div className="product-page__container">
        {/* Навигация */}
        <div className="product-page__nav">
          <Link to="/catalog" className="back-link">
            <ArrowLeftIcon />
            Назад в каталог
          </Link>
        </div>

        <div className="product-page__grid">
          {/* Левая колонка: Изображение */}
          <div className="product-page__gallery">
            <div className="product-page__image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
          </div>

          {/* Правая колонка: Информация */}
          <div className="product-page__info">
            <div className="product-page__header">
              <span className="product-category">{item.category}</span>
              <h1 className="product-title">{item.title}</h1>
              <div className="product-status">
                <span className="status-badge success">
                  <CheckIcon /> В наличии
                </span>
                <span className="product-id">
                  Артикул: {item.id}00{item.id}
                </span>
              </div>
            </div>

            <div className="product-page__price-block">
              <div className="price-row">
                <span className="current-price">{formattedPrice} ₽</span>
                <span className="unit">/ шт.</span>
              </div>
            </div>

            <p className="product-description">{item.description}</p>

            {/* Блок характеристик (пример) */}
            <div className="product-specs">
              <h3>Характеристики:</h3>
              <ul>
                <li>
                  <span>Производитель:</span> <strong>АвтоВАЗ / Тюнинг</strong>
                </li>
                <li>
                  <span>Материал:</span> <strong>Высокопрочный сплав</strong>
                </li>
                <li>
                  <span>Гарантия:</span> <strong>1 год</strong>
                </li>
              </ul>
            </div>

            {/* Панель действий */}
            <div className="product-actions">
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  −
                </button>
                <input type="text" readOnly value={quantity} />
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>

              <div className="buttons-row">
                <button className="add-to-cart-btn">Добавить в корзину — {totalPrice} ₽</button>
                <button className="wishlist-btn" title="В избранное">
                  <HeartIcon />
                </button>
              </div>
            </div>

            <div className="product-delivery-info">
              <p>🚚 Доставка по РФ от 2-х дней</p>
              <p>🛡️ Безопасная оплата картой</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItemPage;
