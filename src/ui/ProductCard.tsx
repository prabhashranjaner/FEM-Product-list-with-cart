import styled from "styled-components";
import CartBtn from "./CartBtn";
import type { ImageType, ProductType } from "../types";
import { useCart } from "../state/CartContextProvider";
import Counter from "./Counter";

const SProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 786px) {
    max-width: 300px;
  }
`;

const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  border-radius: 8px;
  height: 200px;
  background-image: ${(props) => `url(${props.$image.mobile})`};
  background-size: cover;
  border: 2px solid transparent;

  @media screen and (min-width: 786px) {
    height: 250px;
    background-image: ${(props) => `url(${props.$image.desktop})`};
  }

  &.selected {
    border-color: var(--col-red);
  }
`;

const BtnWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 180px;
  @media screen and (min-width: 786px) {
    width: 200px;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media screen and (min-width: 786px) {
    font-size: 18px;
  }
`;

const Category = styled.p`
  font-weight: 500;
  color: var(--col-rose-4);
`;

const Title = styled.p`
  font-weight: 700;
  color: var(--col-rose-6);
`;

const Price = styled.p`
  font-weight: 700;
  color: var(--col-red);
`;

const ProductCard = ({ product }: PropsType) => {
  const { state } = useCart();

  const itemInCart = state.find((item) => item.product.id === product.id);
  return (
    <SProductCard>
      <ImageWrapper
        $image={product.image}
        className={`${itemInCart ? "selected" : ""}`}
      >
        <BtnWrapper>
          {itemInCart ? (
            <Counter itemInCart={itemInCart} />
          ) : (
            <CartBtn product={product} />
          )}
        </BtnWrapper>
      </ImageWrapper>

      <DetailWrapper>
        <Category>{product.category}</Category>
        <Title>{product.name}</Title>
        <Price>${product.price.toFixed(2)}</Price>
      </DetailWrapper>
    </SProductCard>
  );
};

export default ProductCard;

type PropsType = {
  product: ProductType;
};

type ImageWrapperProps = {
  $image: ImageType;
};
