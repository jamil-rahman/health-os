import React from "react";
import { NavLink } from "react-router-dom";
import "./productcard.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/action";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const addProductToList = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className="row my-5 product-container">
      <div className="col-md-6">
        <img
          className="image-container"
          src={product.image}
          alt={product.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text text-black-50">
          {product.category}
        </h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button
          className="btn btn-outline-dark px-4 py-2"
          onClick={() => addProductToList(product)}
        >
          Add to Stock
        </button>
        <NavLink to="/orders" className="btn btn-dark ms-2 px-3 py-2">
          Manage Orders
        </NavLink>
      </div>
    </div>
  );
}
