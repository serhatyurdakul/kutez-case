import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/Home/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product-detail/:id' element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
