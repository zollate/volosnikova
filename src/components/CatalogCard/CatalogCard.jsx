import './CatalogCard.scss';

const CatalogCard = ({ title, price, image }) => {
  return (
    <div className="catalog-card">
      <img src={image} alt={title} className="catalog-card__image"/>
      <h3 className="catalog-card__title">{title}</h3>
      <p className="catalog-card__price">{price} ₽</p>
      <button className="catalog-card__button">Подробнее</button>
    </div>
  );
}

export default CatalogCard;
