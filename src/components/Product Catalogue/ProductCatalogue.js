import React from "react";
import './catalogue.css';

export default function ProductCatalogue({ filter }) {
  return (
    <>
      <div className="buttons d-flex justify-content-center my-2 pb-5">
        <button className="btn btn-outline-dark me-2">All</button>
        <button className="btn btn-outline-dark me-2">Men's Clothing</button>
        <button className="btn btn-outline-dark me-2">Women's Clothing</button>
        <button className="btn btn-outline-dark me-2">Jewelry</button>
        <button className="btn btn-outline-dark me-2">Electronic</button>
      </div>
      {filter.map((product) => {
        return (
          <>
          <div className="col-md-4 mb-4">
            <div className="card-deck">
            <div className="card h-100 text-center p-4" key={product.id}>
              <img className="card-img-top" src={product.image} height="350px" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title mb-0">{product.title}</h5>
                <p className="card-text lead">
                  ${product.price}
                </p>
                <a href="#" class="btn btn-outline-dark">
                    Manage Product                  
                </a>
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
