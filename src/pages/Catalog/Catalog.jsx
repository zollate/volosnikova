import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.scss';
import CatalogCard from '../../components/CatalogCard/CatalogCard';
import { catalogItems } from '../../data/catalogItems';

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
            <Link
              key={item.id}
              to={`/catalog/item/${item.id}`}
              style={{ textDecoration: 'none' }}
            >
              <CatalogCard
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
