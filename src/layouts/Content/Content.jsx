import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import ReviewsPage from '../../pages/ReviewsPage';
import Catalog from '../../pages/Catalog';
import News from '../../pages/News/News.jsx';
// 1. ИМПОРТИРУЕМ СТРАНИЦУ ТОВАРА
import CatalogItemPage from '../../pages/CatalogItemPage/CatalogItemPage'; 

function Content() {
  return (
    <main style={{ padding: '20px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/catalog" element={<Catalog />} />
        
        {/* 2. ДОБАВЛЯЕМ ЭТОТ МАРШРУТ */}
        {/* :id позволяет роутеру понимать, что после /item/ может быть любое число */}
        <Route path="/catalog/item/:id" element={<CatalogItemPage />} />
        
        <Route path="/news" element={<News />} />
      </Routes>
    </main>
  );
}

export default Content;