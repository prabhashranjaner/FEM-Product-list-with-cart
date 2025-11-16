import type { Dispatch } from "react";

export type ImageType = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type ProductType = {
  id: string;
  image: ImageType;
  name: string;
  category: string;
  price: number;
};

export type CartItemType = {
  product: ProductType;
  quantity: number;
};

export type CartStateType = CartItemType[];

export type ActionType =
  | {
      type: "cart/add";
      payload: ProductType;
    }
  | {
      type: "cart/remove";
      payload: string;
    }
  | {
      type: "cart/update";
      payload: { id: string; quantity: number };
    }
  | { type: "cart/clear" };

export type ContextType = {
  state: CartStateType;
  dispatch: Dispatch<ActionType>;
};
