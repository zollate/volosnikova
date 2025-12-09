import { useState } from 'react';
import './Catalog.scss';
import CatalogCard from '../../components/CatalogCard/CatalogCard';

const catalogItems = [
  { id: 1, title: 'Спойлер ВАЗ 2107', price: 5000, category: 'Кузов', image: '/assets/spoiler.jpg' },
  { id: 2, title: 'Фары ВАЗ 2106', price: 3500, category: 'Свет и оптика', image: '/assets/fary.jpg' },
  { id: 3, title: 'Руль спортивный', price: 2000, category: 'Салон и интерьер', image: '/assets/rul.jpg' },
  { id: 4, title: 'Диски легкосплавные', price: 7000, category: 'Колёса и подвеска', image: '/assets/diski.jpg' },
  { id: 5, title: 'Выхлопная труба', price: 4500, category: 'Двигатель и выхлоп', image: '/assets/vyhlop.jpg' },
];

const categories = ['Все', 'Кузов', 'Свет и оптика', 'Салон и интерьер', 'Колёса и подвеска', 'Двигатель и выхлоп'];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredItems = catalogItems.filter(item =>
    (selectedCategory === 'Все' || item.category === selectedCategory) &&
    item.price <= maxPrice
  );

  const filteredAndSortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    else return b.price - a.price;
  });

  return (
    <div className="catalog">
      {/* Левая панель с фильтрами */}
      <div className="catalog__sidebar">
        <h2>Категории</h2>
        <div className="catalog__categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`catalog__category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="catalog__price-filter">
          <label>
            Максимальная цена: {maxPrice} ₽
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="catalog__sort">
          <label>
            Сортировка по цене:
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
              <option value="asc">Сначала дешёвые</option>
              <option value="desc">Сначала дорогие</option>
            </select>
          </label>
        </div>
      </div>

      {/* Основная область с товарами */}
      <div className="catalog__main">
        <h1 className="catalog__title">Каталог тюнинга АвтоВАЗа</h1>
        <div className="catalog__grid">
          {filteredAndSortedItems.map(item => (
            <CatalogCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
