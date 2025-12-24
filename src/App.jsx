import Header from "./layouts/Header/index.js";
import Footer from "./layouts/Footer/index.js";

import Content from "./layouts/Content/index.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Home from "./pages/Home";
import ReviewsPage from "./pages/ReviewsPage";
import Catalog from "./pages/Catalog";
import News from "./pages/News/News";
import CatalogItemPage from "./pages/CatalogItemPage/CatalogItemPage";




function App() {
  return (
    <>
      <Router>
        <Header />
        <Content />

        <Footer />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/reviews"
            element={<ReviewsPage />}
          />
          <Route
            path="/catalog"
            element={<Catalog />}
            
          />
          <Route path="/catalog/item/:id" element={<CatalogItemPage />} />

          <Route
            path="/news"
            element={<News />}
          />
        </Routes>

      </Router>
    </>
  )
}

export default App
