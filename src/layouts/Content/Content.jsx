import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import ReviewsPage from '../../pages/ReviewsPage';
import Catalog from '../../pages/Catalog';
import News from '../../pages/News/News.jsx';

function Content() {
  return (
    <main style={{ padding: '20px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </main>
  );
}

export default Content;
