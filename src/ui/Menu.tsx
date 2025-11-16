import styled from "styled-components";
import products from "../../data.json";
import ProductCard from "./ProductCard";

const SMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.p`
  font-size: 25px;
  font-weight: 700;
  @media screen and (min-width: 786px) {
    font-size: 32px;
  }
`;

const ProductCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  @media screen and (min-width: 786px) {
    gap: 2rem 1rem;
  }
`;

const Menu = () => {
  return (
    <SMenu>
      <Logo>Desserts</Logo>
      <ProductCardList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductCardList>
    </SMenu>
  );
};

export default Menu;
