import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ProductCatalogue from "../../components/Product Catalogue/ProductCatalogue";
import "./products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  let componentRender = true;

  //fetching my data from api and then set loading state until data is fetched
  const getProducts = async () => {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    if (componentRender) {
      setProducts(await res.clone().json());
      setLoading(false);
      console.log(products);
    }
    return () => {
      componentRender = false;
    };
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      <div className="container py-2">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h1 className="display-6 text-center">Products Catalogue</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <ProductCatalogue products={products} />
          )}
        </div>
      </div>
    </div>
  );
}
