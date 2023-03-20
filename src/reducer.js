export const initialState = {
  basket: [
    {
      id:"3264",
      title: "this is a demo product",
      price: 645,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg",
    },
    // {
    //   id:"3264",
    //   title: "this is a demo product",
    //   price: 645,
    //   rating: 4,
    //   image: "https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg",
    // }
  ],
  user: null,
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);



function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket

      // console.log("hello");
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      console.log(newBasket);

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
