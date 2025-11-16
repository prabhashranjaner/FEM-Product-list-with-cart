import styled from "styled-components";
import type { ProductType } from "../types";
import { useCart } from "../state/CartContextProvider";

const SCartBtn = styled.button`
  gap: 0.5rem;
  border-radius: 50px;
  padding: 0.6rem 1rem;
  border: 1px solid var(--col-rose-6);
  width: 100%;

  span {
    color: var(--col-rose-6);
    transition: all 0.3s;

    &:hover {
      color: var(--col-red);
    }

    @media screen and (min-width: 786px) {
      font-size: 16px;
    }
  }

  &:hover {
    border-color: var(--col-red);
  }
`;

const CartBtn = ({ product }: PropsType) => {
  const { dispatch } = useCart();
  return (
    <SCartBtn onClick={() => dispatch({ type: "cart/add", payload: product })}>
      <img alt="cart" src="../../public/images/icon-add-to-cart.svg" />
      <span>Add to Cart</span>
    </SCartBtn>
  );
};

export default CartBtn;

type PropsType = {
  product: ProductType;
};
