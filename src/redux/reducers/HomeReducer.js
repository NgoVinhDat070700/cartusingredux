import { CONSTAIN } from "../constants/constant";

const initState = {
  products: [],
  cart: [],
  total: 0,
  viewProduct: null,
  isLoading: true
};
export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case CONSTAIN.LOADDATA:
      return {
        ...state,
        products: action.payload,
        isLoading: !state.isLoading
      };
    case CONSTAIN.ADDCART:
      const idPayload = action.payload.id;
      const idx = state.cart.findIndex((item) => item.id === idPayload);

      if (idx !== -1) {
        state.cart[idx].qty = state.cart[idx].qty + 1;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      }
      return { ...state, cart: [...state.cart] };
    case CONSTAIN.DOWNQTY:
      let tempcart = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (tempcart !== -1) {
        if (state.cart[tempcart].qty > 1) {
          state.cart[tempcart].qty = state.cart[tempcart].qty - 1;
        } else {
          state.cart[tempcart].qty = 1;
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      }
      return { ...state, cart: [...state.cart] };
    case CONSTAIN.DELETECART:
      let arrayCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: arrayCart };
    default:
      return { ...state };
  }
};
