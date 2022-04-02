//To add product to the order list

export const addProduct = (product) => {
    return{
        type: "ADD_PRODUCT",
        payload: product
    }
}


//To delete product from the order list
export const deleteProduct = (product) =>{
    return{
        type: "DELETE_PRODUCT",
        payload: product
    }
}