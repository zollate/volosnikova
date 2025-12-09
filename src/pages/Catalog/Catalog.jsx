import './Catalog.scss';
import CatalogCard from '../../components/CatalogCard';

const catalogItems = [
  { id: 1, title: 'Спойлер ВАЗ 2107', price: 5000, image: '/assets/spoiler.jpg' },
  { id: 2, title: 'Тюнинг-фары ВАЗ 2106', price: 3500, image: '/assets/fary.jpg' },
  { id: 3, title: 'Обвес ВАЗ 2110', price: 8000, image: '/assets/obves.jpg' },
];

const Catalog = () => {
  return (
    <div className="catalog">
      <h1 className="catalog__title">Каталог тюнинга АвтоВАЗа</h1>
      <div className="catalog__grid">
        {catalogItems.map(item => (
          <CatalogCard
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
