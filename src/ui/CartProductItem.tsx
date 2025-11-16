import styled from "styled-components";
import type { CartItemType } from "../types";
import { useCart } from "../state/CartContextProvider";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 12px;
  border-bottom: 1px solid var(--col-rose-2);
`;

const LeftSide = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Name = styled.p`
  font-weight: 700;
  color: var(--col-rose-6);
`;

const Quantity = styled.span`
  font-weight: 700;
  color: var(--col-red);
  margin-right: 5px;
`;

const CancelBtn = styled.button`
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

const Thumbnail = styled.img`
  width: 40px;
  object-fit: cover;
`;

const Amount = styled.p`
  font-size: 14px;
  & span {
    margin-right: 5px;
  }
`;
const CartProductItem = ({ item, isFinal = false }: PropsType) => {
  const { dispatch } = useCart();
  return (
    <Wrapper>
      <LeftSide>
        {isFinal && (
          <Thumbnail alt="thumbnail" src={item.product.image.thumbnail} />
        )}
        <DetailContainer>
          <Name>{item.product.name}</Name>
          <Amount>
            <Quantity>{item.quantity}X</Quantity>{" "}
            <span>@${item.product.price.toFixed(2)}</span>{" "}
            <span>${(item.product.price * item.quantity).toFixed(2)}</span>{" "}
          </Amount>
        </DetailContainer>
      </LeftSide>
      {!isFinal && (
        <CancelBtn
          onClick={() =>
            dispatch({ type: "cart/remove", payload: item.product.id })
          }
        >
          <img alt="cancle" src="/images/icon-remove-item.svg" />
        </CancelBtn>
      )}
    </Wrapper>
  );
};

export default CartProductItem;

type PropsType = {
  item: CartItemType;
  isFinal?: boolean;
};
