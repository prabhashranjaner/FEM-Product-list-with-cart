import styled from "styled-components";
import { useCart } from "../state/CartContextProvider";
import CartProductItem from "./CartProductItem";

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

const Summary = ({ isFinal }: { isFinal: boolean }) => {
  const { state } = useCart();

  if (state.length === 0) return null;

  const totalAmount = state.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );

  return (
    <StyledSummary>
      <ProductList>
        {state.map((item) => (
          <CartProductItem
            key={item.product.id}
            item={item}
            isFinal={isFinal}
          />
        ))}
      </ProductList>
      <TotalWrapper>
        <span>Order Total</span>
        <Price>${totalAmount.toFixed(2)}</Price>
      </TotalWrapper>
    </StyledSummary>
  );
};

export default Summary;
