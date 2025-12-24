import React from 'react';
import { useNavigate } from 'react-router-dom';
import { catalogItems } from '../../data/catalogItems';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const featuredProducts = catalogItems.slice(0, 4);

  return (
    <div className="home">
      {/* --- HERO SECTION --- */}
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="home-hero__title">
            Твой АвтоВАЗ — <br /> 
            <span>Твои правила.</span>
          </h1>
          <p className="home-hero__subtitle">
            Премиальные запчасти для тюнинга. <br />
            Создай автомобиль, который выделяется в потоке.
          </p>
          <div className="home-hero__actions">
            {/* Используем обычные кнопки, стилизованные в Home.scss */}
            <button className="main-btn" onClick={() => navigate('/catalog')}>
              В каталог
            </button>
            
          </div>
        </div>
      </section>

      {/* --- POPULAR PRODUCTS --- */}
      <section className="home-products">
        <div className="home-products__header">
          <h2>Хиты продаж</h2>
          <button className="text-btn" onClick={() => navigate('/catalog')}>Все товары →</button>
        </div>

        <div className="home-products__grid">
          {featuredProducts.map((item) => (
            /* Пишем структуру карточки прямо здесь */
            <div 
              key={item.id} 
              className="home-card" 
              onClick={() => navigate(`/catalog/item/${item.id}`)}
            >
              <div className="home-card__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="home-card__body">
                <h3 className="home-card__title">{item.title}</h3>
                <div className="home-card__footer">
                  <span className="home-card__price">{item.price.toLocaleString()} ₽</span>
                  <button className="home-card__btn">＋</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="home-cta">
        <div className="home-cta__box">
          <h2>Сделаем твой проект уникальным</h2>
          <p>Подбор запчастей и консультация по тюнингу от профессионалов.</p>
          <button className="main-btn" onClick={() => navigate('/catalog')}>Начать сейчас</button>
        </div>
      </section>
    </div>
  );
};

export default Home;