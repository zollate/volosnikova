import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.scss';
import CatalogCard from '../../components/CatalogCard/CatalogCard';
import CustomSelect from '../../components/CustomSelect/CustomSelect'; // <-- НОВЫЙ ИМПОРТ
import { catalogItems } from '../../data/catalogItems';

// Иконки (оставляем, как было)
const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
);

const categories = ['Все', 'Кузов', 'Свет и оптика', 'Салон и интерьер', 'Колёса и подвеска', 'Двигатель и выхлоп'];

// Конфигурация опций для CustomSelect
const sortOptions = [
    { value: 'asc', label: 'Сначала дешёвые' },
    { value: 'desc', label: 'Сначала дорогие' },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [maxPrice, setMaxPrice] = useState(50000);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Сброс страницы при изменении фильтров
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, maxPrice, sortOrder]);

  const filteredItems = catalogItems.filter(item =>
    (selectedCategory === 'Все' || item.category === selectedCategory) &&
    item.price <= maxPrice
  );

  const filteredAndSortedItems = [...filteredItems].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="catalog">
      <div className="catalog__container">
        {/* Sidebar */}
        <aside className="catalog__sidebar">
          <div className="catalog__sidebar-sticky">
            <div className="catalog__filter-header">
              <FilterIcon />
              <h2>Фильтры</h2>
            </div>

            <div className="catalog__section">
              <h3>Категории</h3>
              <div className="catalog__categories">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`catalog__category-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                    {selectedCategory === cat && <span className="dot" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="catalog__section">
              <h3>Цена</h3>
              <div className="catalog__price-filter">
                <div className="price-labels">
                  <span>0 ₽</span>
                  <span>{maxPrice.toLocaleString()} ₽</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="500"
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="catalog__section">
              <h3>Сортировка</h3>
              {/* ЗАМЕНА СТАНДАРТНОГО SELECT НА CUSTOM SELECT */}
              <CustomSelect
                label="Порядок цены:" // Метка, которую можно скрыть в стилях, но оставить для доступности
                options={sortOptions}
                selectedValue={sortOrder}
                onChange={value => setSortOrder(value)}
              />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="catalog__main">
          <div className="catalog__header">
            <h1 className="catalog__title">Тюнинг АвтоВАЗа</h1>
            <span className="catalog__count">Найдено: {filteredAndSortedItems.length}</span>
          </div>

          {currentItems.length > 0 ? (
            <>
              <div className="catalog__grid">
                {currentItems.map(item => (
                  <Link
                    key={item.id}
                    to={`/catalog/item/${item.id}`}
                    className="catalog__card-link"
                  >
                    <CatalogCard
                      title={item.title}
                      price={item.price}
                      image={item.image}
                    />
                  </Link>
                ))}
              </div>

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
            </>
          ) : (
            <div className="catalog__empty">
              <h3>Ничего не найдено 😔</h3>
              <p>Попробуйте изменить параметры фильтрации</p>
              <button 
                className="catalog__reset-btn"
                onClick={() => { setMaxPrice(50000); setSelectedCategory('Все'); }}
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Catalog;