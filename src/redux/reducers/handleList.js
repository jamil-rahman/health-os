const order_list = [];

const handleList = (state = order_list, action) => {
  const product = action.payload;
  // const product_exist = state.find((listProduct)=> listProduct.id === product.id);
  switch (action.type) {
    case "ADD_PRODUCT":
      // To check if product is already present
      const product_exist = state.find(
        (listProduct) => listProduct.id === product.id
      );
      if (product_exist) {
        //Increase number of product
        return state.map((listProduct) =>
          listProduct.id === product.id
            ? { ...listProduct, quantity: listProduct.quantity + 1 }
            : listProduct
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

    case "DELETE_PRODUCT":
      const product_exist_1 = state.find(
        (listProduct) => listProduct.id === product.id
      );
      if (product_exist_1.quantity === 1) {
        return state.filter(
          (listProduct) => listProduct.id !== product_exist.id
        );
      } else {
        return state.map((listProduct) =>
          listProduct.id === product.id
            ? { ...listProduct, quantity: listProduct.quantity - 1 }
            : listProduct
        );
      }

    default:
      return state;
  }
};

export default handleList;
