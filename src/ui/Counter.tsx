import styled from "styled-components";
import type { CartItemType } from "../types";
import { useCart } from "../state/CartContextProvider";

const SCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  padding: 0.6rem 1rem;
  background-color: var(--col-red);

  span {
    color: white;
    font-weight: 700;
  }
`;

const CounterBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--col-rose-3);
  background-color: transparent;
  padding: 5px;

  img {
    object-fit: cover;
  }
`;
const Counter = ({ itemInCart }: PropsType) => {
  const { dispatch } = useCart();

  const handleIncreaseQuntity = () => {
    dispatch({
      type: "cart/update",
      payload: {
        id: itemInCart.product.id,
        quantity: itemInCart.quantity + 1,
      },
    });
  };

  const handleDecreaseQuantity = () => {
    if (itemInCart.quantity === 1)
      dispatch({ type: "cart/remove", payload: itemInCart.product.id });
    else
      dispatch({
        type: "cart/update",
        payload: {
          id: itemInCart.product.id,
          quantity: itemInCart.quantity - 1,
        },
      });
  };
  return (
    <SCounter>
      <CounterBtn onClick={handleDecreaseQuantity}>
        <img src="/images/icon-decrement-quantity.svg" alt="decrease" />
      </CounterBtn>
      <span>{itemInCart.quantity}</span>
      <CounterBtn onClick={handleIncreaseQuntity}>
        <img src="/images/icon-increment-quantity.svg" alt="increase" />
      </CounterBtn>
    </SCounter>
  );
};

export default Counter;

type PropsType = {
  itemInCart: CartItemType;
};
