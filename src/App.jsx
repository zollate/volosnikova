import Header from './layouts/Header/index.js';
import Footer from './layouts/Footer/index.js';
import Content from './layouts/Content/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </>
  );
}

export default App;
