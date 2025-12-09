import { useParams, Link } from 'react-router-dom';
import './CatalogItemPage.scss';
import { catalogItems } from '../../data/catalogItems';

const CatalogItemPage = () => {
  const { id } = useParams();
  const item = catalogItems.find(i => i.id === Number(id));

  if (!item) return <div>Товар не найден</div>;

  return (
    <div className="catalog-item-page">
      <Link to="/catalog">← Назад в каталог</Link>
      <div className="catalog-item-page__content">
        <img src={item.image} alt={item.title} className="catalog-item-page__image" />
        <div className="catalog-item-page__info">
          <h1>{item.title}</h1>
          <p className="price">{item.price} ₽</p>
          <p className="description">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogItemPage;
