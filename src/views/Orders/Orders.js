import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/action";
import { addProduct } from "../../redux/action";
import "./orders.css";
import Navbar from "../../components/Navbar/Navbar";

const Orders = () => {
  //TODO Refactor to make reusable code and checkout component and auth
  const state = useSelector((state) => state.handleList);
  const dispatch = useDispatch();

  const handleDecrease = (product) => {
    dispatch(deleteProduct(product));
  };

  const handleIncrease = (product) => {
    dispatch(addProduct(product));
  };

  //Three Small components, that would render based on condition

  //render the list of products chosen
  const listItems = (listItem) => {
    return (
      <div>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={listItem.image}
                  alt={listItem.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{listItem.title}</h3>
                <p className="lead fw-bold">
                  {listItem.quantity} X ${listItem.price} = $
                  {parseFloat(listItem.quantity * listItem.price).toFixed(2)}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDecrease(listItem)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleIncrease(listItem)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  //render if the list is empty
  const emptyList = () => {
    return (
      <div className="orders">
        <div className="px-4 my-5 bg-light rounded-3 py-5 ">
          <div className="container py-4">
            <div className="row">
              <h3>No Items</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

  //button component for confirmation
  const button = () => {
    return (
      <div className="container">
        <div className="row ">
          <div className="btn btn-outline-success mb-5 w-25 mx-auto">
          Confirm Order
          </div>
          </div>
      </div>
    );
  };

  //main render that would render the other small components
  //based on the condition
  return (
    <>
      <Navbar />
      <div className="orders">
        {state.length === 0 && emptyList()}
        {state.length !== 0 && state.map(listItems)}
        {state.length !== 0 && button()}
      </div>
    </>
  );
};

export default Orders;
