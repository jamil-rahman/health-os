import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home/Home";
import Customers from "./views/Customers/Customers";
import Products from "./views/Products/Products";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/customers" element={<Customers/>}/>
      <Route exact path="/products" element={<Products/>}/>
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;
