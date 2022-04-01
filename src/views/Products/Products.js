import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Navbar from "../../components/Navbar/Navbar";
import ProductCatalogue from "../../components/Product Catalogue/ProductCatalogue";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);
  let componentRender = true;

  const getProducts = async () => {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    // const data = await res.json();
    if (componentRender) {
      setProducts(await res.clone().json());
      setFilter(await res.json());
      setLoading(false);
      console.log(filter);
      console.log(products);
    }
    return () => {
      componentRender = false;
    };

    // console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
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
                <ProductCatalogue filter={filter} />
              )}
          </div>
        </div>
    </div>
  );
}
