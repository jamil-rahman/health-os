import { Switch } from "@material-ui/core";
import React, { useState } from "react";
import "./catalogue.css";
import { NavLink } from "react-router-dom";
import NewButton from "../NewButton/NewButton";

export default function ProductCatalogue({ products}) {
  const [filter, setFilter] = useState(products);

  //from the passed down prop of my parent component, set filter state as product list so that
  //product can be filtered in according to their cateogry which is already defined in the api

  const filterProducts = (category) => {
    const updatedCatalogue = products.filter(
      (product) => product.category === category
    );
    setFilter(updatedCatalogue);
  };

  return (
    <>
      <div className="buttons d-flex justify-content-center my-2 pb-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilter(products)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProducts("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProducts("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProducts("jewelery")}
        >
          Jewelry
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProducts("electronics")}
        >
          Electronic
        </button>
      
      </div>
      <NewButton />
      {filter.map((product) => {
        return (
          <>
            <div className="col-md-4 mb-4">
              <div className="card-deck">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    className="card-img-top"
                    src={product.image}
                    height="350px"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text lead">${product.price}</p>
                    <div className="d-flex justify-content-between">
                      <span>In Stock: </span>
                      <Switch color="success" />
                    </div>
                    {/* Redirects to single product page */}
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Manage Product
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
