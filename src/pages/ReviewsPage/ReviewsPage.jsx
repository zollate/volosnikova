import React, { useState, useEffect } from 'react';
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCheck,
  FaTruck,
  FaShieldAlt,
  FaUser,
  FaImage,
  FaThumbsUp,
  FaPaperPlane,
} from 'react-icons/fa';
import './ReviewsPage.scss';

const ReviewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortOption, setSortOption] = useState('newest');
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    product: '',
    rating: 5,
    author: '',
    text: '',
    photos: 0,
    verified: false,
  });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [likedReviews, setLikedReviews] = useState([]);

  // Инициализация отзывов
  useEffect(() => {
    const initialReviews = [
      {
        id: 1,
        product: 'Руль спортивный',
        rating: 5,
        date: new Date('2023-12-15').toLocaleDateString('ru-RU'),
        author: 'Алексей К.',
        text: 'Отличный руль! Улучшенный хват действительно чувствуется, материал качественный. Установил на свою ВАЗ 2114, выглядит стильно. Доставка быстрая.',
        verified: true,
        likes: 12,
        photos: 2,
      },
      {
        id: 2,
        product: 'Задние фонари в стиле BMW',
        rating: 4.5,
        date: new Date('2023-12-10').toLocaleDateString('ru-RU'),
        author: 'Дмитрий С.',
        text: 'Фонари выглядят очень круто, качество сборки хорошее. Установка заняла около часа. Единственное - инструкция могла бы быть подробнее. В целом доволен покупкой.',
        verified: true,
        likes: 8,
        photos: 3,
      },
      {
        id: 3,
        product: 'Баннер передний АвтоВАЗ в сборе для ВАЗ 2107',
        rating: 5,
        date: new Date('2023-12-05').toLocaleDateString('ru-RU'),
        author: 'Иван М.',
        text: 'Идеально подошло на мою семёрку. Качество на высоте, все отверстия совпали. Рекомендую!',
        verified: false,
        likes: 5,
        photos: 1,
      },
      {
        id: 4,
        product: 'Фары ВАЗ 2107',
        rating: 3,
        date: new Date('2023-11-28').toLocaleDateString('ru-RU'),
        author: 'Сергей П.',
        text: 'Качество среднее, за такую цену ожидал лучше. Светят неплохо, но пластик хлипковатый.',
        verified: true,
        likes: 2,
        photos: 0,
      },
      {
        id: 5,
        product: 'Руль спортивный',
        rating: 4,
        date: new Date('2023-11-20').toLocaleDateString('ru-RU'),
        author: 'Михаил В.',
        text: 'Хороший руль за свои деньги. Удобно лежит в руках. Покупкой доволен.',
        verified: true,
        likes: 7,
        photos: 1,
      },
      {
        id: 6,
        product: 'Боковые зеркала ATTI',
        rating: 5,
        date: new Date('2023-11-15').toLocaleDateString('ru-RU'),
        author: 'Олег Т.',
        text: 'Отличные зеркала! Качество на уровне, смотрятся стильно. Регулировка плавная. Спасибо за быструю доставку!',
        verified: true,
        likes: 15,
        photos: 4,
      },
    ];
    setReviews(initialReviews);
  }, []);

  // Продукты для выпадающего списка
  const products = [
    'Руль спортивный',
    'Задние фонари в стиле BMW',
    'Баннер передний АвтоВАЗ в сборе для ВАЗ 2107',
    'Фары ВАЗ 2107',
    'Боковые зеркала ATTI',
    'Ручка КПП Ferrum Group',
    'Диски литые 15"',
    'Глушитель спортивный',
    'Коврики в салон',
  ];

  // Статистика рейтингов
  const ratingStats = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };

  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
      : 0;

  // Фильтрация отзывов
  const filteredReviews = reviews
    .filter((review) => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'with-photos') return review.photos > 0;
      if (activeFilter === 'verified') return review.verified;
      return true;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return (
            new Date(b.date.split('.').reverse().join('-')) -
            new Date(a.date.split('.').reverse().join('-'))
          );
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        case 'most-liked':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

  // Функции
  const renderStars = (rating, interactive = false, onStarClick = null) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      const starProps = {
        key: i,
        className: `star-icon ${i <= fullStars ? 'full' : i === fullStars + 1 && hasHalfStar ? 'half' : 'empty'}`,
      };

      if (interactive && onStarClick) {
        starProps.onClick = () => onStarClick(i);
        starProps.style = { cursor: 'pointer', fontSize: '24px' };
      }

      if (i <= fullStars) {
        stars.push(<FaStar {...starProps} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt {...starProps} />);
      } else {
        stars.push(<FaRegStar {...starProps} />);
      }
    }

    return (
      <div className="stars">
        {stars} {!interactive && <span className="rating-value">{rating.toFixed(1)}</span>}
      </div>
    );
  };

  const handleLike = (reviewId) => {
    if (likedReviews.includes(reviewId)) {
      // Убрать лайк
      setReviews((prev) =>
        prev.map((review) =>
          review.id === reviewId ? { ...review, likes: review.likes - 1 } : review,
        ),
      );
      setLikedReviews((prev) => prev.filter((id) => id !== reviewId));
    } else {
      // Добавить лайк
      setReviews((prev) =>
        prev.map((review) =>
          review.id === reviewId ? { ...review, likes: review.likes + 1 } : review,
        ),
      );
      setLikedReviews((prev) => [...prev, reviewId]);
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!newReview.product || !newReview.author || !newReview.text) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    const newReviewObj = {
      id: reviews.length + 1,
      product: newReview.product,
      rating: newReview.rating,
      date: new Date().toLocaleDateString('ru-RU'),
      author: newReview.author,
      text: newReview.text,
      verified: Math.random() > 0.3, // 70% шанс быть проверенным
      likes: 0,
      photos: newReview.photos,
    };

    setReviews((prev) => [newReviewObj, ...prev]);

    // Сброс формы
    setNewReview({
      product: '',
      rating: 5,
      author: '',
      text: '',
      photos: 0,
      verified: false,
    });

    setShowReviewForm(false);
    alert('Спасибо за ваш отзыв! Он появится в списке.');
  };

  const FilterButton = ({ text, value, count }) => (
    <button
      className={`filter-btn ${activeFilter === value ? 'active' : ''}`}
      onClick={() => setActiveFilter(value)}
    >
      {text} {count !== undefined && <span className="filter-count">({count})</span>}
    </button>
  );

  // Расчет процентов для статистики
  const calculatePercentage = (count) => {
    return totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
  };

  return (
    <div className="reviews-page">
      <div className="container">
        <h1 className="page-title">Отзывы покупателей</h1>

        <div className="reviews-header">
          <div className="reviews-stats">
            <div className="total-rating">
              <div className="rating-big">{averageRating}</div>
              <div className="stars-big">{renderStars(parseFloat(averageRating))}</div>
              <div className="total-count">на основе {totalReviews} отзывов</div>
            </div>

            <div className="rating-breakdown">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div className="rating-row" key={stars}>
                  <span>
                    {stars} {stars === 1 ? 'звезда' : stars < 5 ? 'звезды' : 'звезд'}
                  </span>
                  <div className="rating-bar">
                    <div
                      className="rating-fill"
                      style={{ width: `${calculatePercentage(ratingStats[stars])}%` }}
                    ></div>
                  </div>
                  <span>{calculatePercentage(ratingStats[stars])}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="write-review">
            <h3>Оставить отзыв</h3>
            <p>Поделитесь своим опытом использования товара</p>
            <button className="primary-btn" onClick={() => setShowReviewForm(!showReviewForm)}>
              {showReviewForm ? 'Отмена' : 'Написать отзыв'}
            </button>
          </div>
        </div>

        {/* Форма для отзыва */}
        {showReviewForm && (
          <div className="review-form-container">
            <h3>Новый отзыв</h3>
            <form onSubmit={handleSubmitReview} className="review-form">
              <div className="form-group">
                <label>Товар *</label>
                <select
                  value={newReview.product}
                  onChange={(e) => setNewReview({ ...newReview, product: e.target.value })}
                  required
                >
                  <option value="">Выберите товар</option>
                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Ваша оценка *</label>
                <div className="rating-select">
                  {renderStars(newReview.rating, true, (rating) =>
                    setNewReview({ ...newReview, rating }),
                  )}
                  <span className="rating-text">{newReview.rating} из 5</span>
                </div>
              </div>

              <div className="form-group">
                <label>Ваше имя *</label>
                <input
                  type="text"
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  placeholder="Как к вам обращаться?"
                  required
                />
              </div>

              <div className="form-group">
                <label>Ваш отзыв *</label>
                <textarea
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  placeholder="Расскажите о вашем опыте использования товара..."
                  rows="5"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={newReview.photos > 0}
                    onChange={(e) =>
                      setNewReview({ ...newReview, photos: e.target.checked ? 1 : 0 })
                    }
                  />
                  <FaImage className="icon" /> У меня есть фото товара
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  <FaPaperPlane /> Опубликовать отзыв
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="reviews-filters">
          <h3>Фильтры</h3>
          <div className="filter-buttons">
            <FilterButton text="Все отзывы" value="all" count={totalReviews} />
            <FilterButton
              text="С фото"
              value="with-photos"
              count={reviews.filter((r) => r.photos > 0).length}
            />
            <FilterButton
              text="Проверенные покупки"
              value="verified"
              count={reviews.filter((r) => r.verified).length}
            />
          </div>

          <div className="sort-options">
            <select
              className="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Сначала новые</option>
              <option value="highest">Сначала с высоким рейтингом</option>
              <option value="lowest">Сначала с низким рейтингом</option>
              <option value="most-liked">Самые полезные</option>
            </select>
          </div>
        </div>

        <div className="reviews-list">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-product">{review.product}</div>
                  <div className="review-date">{review.date}</div>
                </div>

                <div className="review-rating">{renderStars(review.rating)}</div>

                <div className="review-author">
                  <FaUser className="user-icon" />
                  <span className="author-name">{review.author}</span>
                  {review.verified && (
                    <span className="verified-badge">
                      <FaCheck /> Проверенная покупка
                    </span>
                  )}
                </div>

                <div className="review-text">{review.text}</div>

                {review.photos > 0 && (
                  <div className="review-photos">
                    <FaImage className="photo-icon" />
                    <span>Прикреплено {review.photos} фото</span>
                  </div>
                )}

                <div className="review-footer">
                  <div className="review-actions">
                    <button
                      className={`like-btn ${likedReviews.includes(review.id) ? 'liked' : ''}`}
                      onClick={() => handleLike(review.id)}
                    >
                      <FaThumbsUp /> Полезно <span className="like-count">{review.likes}</span>
                    </button>
                    <button className="reply-btn">Ответить</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-reviews">
              <h3>Пока нет отзывов с выбранными фильтрами</h3>
              <p>Будьте первым, кто оставит отзыв!</p>
            </div>
          )}
        </div>

        <div className="reviews-bottom">
          {filteredReviews.length > 0 && (
            <button
              className="load-more-btn"
              onClick={() => {
                // В реальном приложении здесь была бы загрузка дополнительных отзывов
                alert('В реальном приложении здесь загружаются дополнительные отзывы');
              }}
            >
              Показать еще отзывы
            </button>
          )}

          <div className="features">
            <div className="feature">
              <FaTruck className="feature-icon" />
              <div>
                <h4>Доставка по РФ от 2-х дней</h4>
                <p>Быстрая доставка в любой регион</p>
              </div>
            </div>
            <div className="feature">
              <FaShieldAlt className="feature-icon" />
              <div>
                <h4>Безопасная оплата картой</h4>
                <p>Защищенные платежи онлайн</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
