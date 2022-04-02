import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home/Home";
import Customers from "./views/Customers/Customers";
import Orders from "./views/Orders/Orders";
import Products from "./views/Products/Products";
import Product from "./views/Product/Product";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import {Provider} from 'react-redux';
import store from "./redux/store/store"



function App() {

  return (
    <Router>
      <Provider store={store}>
      <Navbar />
      <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/customers" element={<Customers/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/products/:id" element={<Product/>}/>
      <Route exact path="/orders" element={<Orders />}/>
      </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
