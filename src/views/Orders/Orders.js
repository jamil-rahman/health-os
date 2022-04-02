import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../redux/action'
import { NavLink } from 'react-router-dom'
import { addProduct } from '../../redux/action'
import './orders.css';


const Orders = () => {
    const state = useSelector((state)=>state.handleList)
    const dispatch = useDispatch()
    
    const handleDecrease = (product) => {
        dispatch(deleteProduct(product));
    }
    
    const handleIncrease = (product) => {
        dispatch(addProduct(product));
    }
    // const handleButton = (product)=>{
    //     dispatch(addProduct(product))
    // }
    // console.log(state);

    const listItems = (listItem) => {
        
        return(
            <div>
             <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={listItem.image} alt={listItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{listItem.title}</h3>
                            <p className="lead fw-bold">
                                {listItem.quantity} X ${listItem.price} = ${parseFloat(listItem.quantity * listItem.price).toFixed(2)}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleDecrease(listItem)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark" onClick={()=> handleIncrease(listItem)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }

    const emptyList = () => {
        return (
            <div className='orders'>
            <div className="px-4 my-5 bg-light rounded-3 py-5 ">
                <div className="container py-4">
                    <div className="row">
                        <h3>No Items</h3>
                    </div>
                    </div>
                </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-success mb-5 w-25 mx-auto">Confirm Order</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className='orders'>

            {state.length === 0 && emptyList()}
            {state.length !== 0 && state.map(listItems)}
            {state.length !== 0 && button()}
           
        </div>
    )
}

export default Orders