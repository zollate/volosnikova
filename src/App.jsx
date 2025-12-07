import Header from "./layouts/Header/index.js";
import Content from "./layouts/Content/index.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import News from "./pages/News/";
import Catalog from "./pages/Catalog";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Content />
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/reviews"
            element={<Reviews/>}
          />
          <Route
            path="/catalog"
            element={<Catalog/>}
          />
          <Route
            path="/news"
            element={<News/>}
          />
        </Routes>
        
      </Router>
    </>
  )
}

export default App
