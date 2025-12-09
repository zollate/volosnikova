import { useParams, Link } from 'react-router-dom';
import { catalogItems } from '../../data/catalogItems';
import './CatalogItemPage.scss';

const CatalogItemPage = () => {
  const { id } = useParams();
  const item = catalogItems.find(item => item.id === Number(id));

  if (!item) {
    return (
      <div className="catalog-item-page">
        <Link to="/catalog">&larr; Назад в каталог</Link>
        <h2>Товар не найден</h2>
      </div>
    );
  }

  return (
    <div className="catalog-item-page">
      <Link to="/catalog">&larr; Назад в каталог</Link>
      <div className="catalog-item-page__content">
        <img className="catalog-item-page__image" src={item.image} alt={item.title} />
        <div className="catalog-item-page__info">
          <h1>{item.title}</h1>
          <div className="price">{item.price} ₽</div>
          <div className="description">{item.description}</div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItemPage;
