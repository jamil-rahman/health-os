import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home/Home";
import Customers from "./views/Customers/Customers";
import Orders from "./views/Orders/Orders";
import Products from "./views/Products/Products";
import Product from "./views/Product/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import LogIn from "./views/LogIn/LogIn";
import PhoneSignIn from "./views/PhoneSignIn/PhoneSignIn";
//import { AuthContextProvider } from "./context/AuthContext";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          {/* <AuthContextProvider> */}
          <Routes>
            <Route exact path="/" element={<LogIn />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/customers" element={<Customers />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/phonesignin" element={<PhoneSignIn />} />
          </Routes>
          {/* </AuthContextProvider> */}
        </div>
      </Provider>
    </Router>
  );
}

export default App;
