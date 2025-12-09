import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.scss';
import CatalogCard from '../../components/CatalogCard/CatalogCard';
import { catalogItems } from '../../data/catalogItems';

const categories = ['Все', 'Кузов', 'Свет и оптика', 'Салон и интерьер', 'Колёса и подвеска', 'Двигатель и выхлоп'];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [maxPrice, setMaxPrice] = useState(50000);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // количество товаров на одной странице

  const filteredItems = catalogItems.filter(item =>
    (selectedCategory === 'Все' || item.category === selectedCategory) &&
    item.price <= maxPrice
  );

  const filteredAndSortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    else return b.price - a.price;
  });

  // Пагинация
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // скролл вверх при смене страницы
  }

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
              onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
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
              max="50000"
              step="500"
              value={maxPrice}
              onChange={e => { setMaxPrice(Number(e.target.value)); setCurrentPage(1); }}
            />
          </label>
        </div>

        <div className="catalog__sort">
          <label>
            Сортировка по цене:
            <select value={sortOrder} onChange={e => { setSortOrder(e.target.value); setCurrentPage(1); }}>
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
          {currentItems.map(item => (
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

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="catalog__pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`catalog__page-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
