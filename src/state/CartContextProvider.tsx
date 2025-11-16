import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { CartStateType, ContextType } from "../types";
import reducer from "./reducer";

const CartContext = createContext<ContextType | null>(null);

const initialValue: CartStateType = [];

export default function CartContextProvider({ children }: PropsType) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

type PropsType = {
  children: ReactNode;
};

// eslint-disable-next-line
export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("Context called outside of provider");

  return context;
}
