import Header from "./layouts/Header/index.js";
import Content from "./layouts/Content/index.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Header />
        <Content />
      </Router>
    </>
  )
}

export default App
