import type { ActionType, CartStateType } from "../types";

export default function reducer(state: CartStateType, action: ActionType) {
  switch (action.type) {
    case "cart/add":
      return [...state, { product: action.payload, quantity: 1 }];

    case "cart/remove":
      return state.filter((item) => item.product.id !== action.payload);

    case "cart/update":
      return state.map((item) => {
        if (item.product.id === action.payload.id) {
          if (action.payload.quantity > 0) {
            return { ...item, quantity: action.payload.quantity };
          } else return;
        } else return item;
      });

    case "cart/clear":
      return [];
    default:
      return state;
  }
}
