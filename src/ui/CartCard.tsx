import styled from "styled-components";
import { useCart } from "../state/CartContextProvider";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const SCartCard = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 786px) {
    height: fit-content;
  }

  h4 {
    color: var(--col-red);
    font-size: 22px;

    @media screen and (min-width: 786px) {
      font-size: 26px;
    }
  }
`;
const CartCard = () => {
  const { state } = useCart();

  const totalItem = state.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <SCartCard>
      <h4>Your Cart ({totalItem})</h4>
      {state.length > 0 ? <FilledCart /> : <EmptyCart />}
    </SCartCard>
  );
};

export default CartCard;
