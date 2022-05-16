import { dataPhones } from "../../dataPhones";
import {
  ADD_PRODUCT,
  CHANGE_QUANTITY,
  VIEW_DETAIL,
} from "../constants/product";

let initialState = {
  dataPhones: dataPhones,
  itemDetail: dataPhones[0],
  shoppingCart: [],
};

export const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_DETAIL: {
      state.itemDetail = payload;
      return { ...state };
    }

    case ADD_PRODUCT: {
      let shoppingCartCopy = [...state.shoppingCart];

      let index = state.shoppingCart.findIndex((i) => {
        return payload.maSP === i.maSP;
      });

      if (index === -1) {
        shoppingCartCopy.push({ ...payload, quantity: 1 });
      } else {
        shoppingCartCopy[index].quantity++;
      }

      state.shoppingCart = shoppingCartCopy;
      return { ...state };
    }

    case CHANGE_QUANTITY: {
      let index = state.shoppingCart.findIndex((item) => {
        return item.maSP === payload.id;
      });

      let shoppingCartCopy = [...state.shoppingCart];
      if (index !== -1) {
        shoppingCartCopy[index].quantity =
          shoppingCartCopy[index].quantity + payload.value;

        shoppingCartCopy[index].quantity === 0 &&
          shoppingCartCopy.splice(index, 1);
      }

      state.shoppingCart = shoppingCartCopy;
      return { ...state };
    }

    default:
      return state;
  }
};
