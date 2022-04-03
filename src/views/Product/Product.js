import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./product.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Navbar from "../../components/Navbar/Navbar";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await res.json());
    setLoading(false);
    console.log(product);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="product-page">
        <div className="container">
          <div className="row">
            {loading ? <LoadingSpinner /> : <ProductCard product={product} />}
          </div>
        </div>
      </div>
    </>
  );
}
