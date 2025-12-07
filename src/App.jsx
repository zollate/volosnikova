import Header from "./layouts/Header/index.js";
import Content from "./layouts/Content/index.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Content />
        <Routes>
          <Route
            path="/"
            element={<h2>Главная страница</h2>}
          />
          <Route
            path="/about"
            element={<h2>О нас</h2>}
          />
          <Route
            path="/contacts"
            element={<h2>Контакты</h2>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
