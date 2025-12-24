import Header from "./layouts/Header/index.js";
import Footer from "./layouts/Footer/index.js";

import Content from "./layouts/Content/index.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
<<<<<<< HEAD
=======
import Home from "./pages/Home";
import ReviewsPage from "./pages/ReviewsPage";
import Catalog from "./pages/Catalog";
import News from "./pages/News/News";
import CatalogItemPage from "./pages/CatalogItemPage/CatalogItemPage";
>>>>>>> 29d4866bf27528afdef32ca46f000001acdbd184



function App() {
  return (
    <>
      <Router>
        <Header />
        <Content />
<<<<<<< HEAD
        <Footer />
=======
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
>>>>>>> 29d4866bf27528afdef32ca46f000001acdbd184
      </Router>
    </>
  )
}

export default App
