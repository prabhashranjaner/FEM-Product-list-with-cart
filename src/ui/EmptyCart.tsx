import styled from "styled-components";

const SEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0.3rem;
  width: 100%;

  @media screen and (min-width: 786px) {
    margin-top: 1rem;
  }

  p {
    font-weight: 700;
    color: var(--col-rose-5);

    @media screen and (min-width: 786px) {
      font-size: 18px;
    }
  }
`;

const EmptyCart = () => {
  return (
    <SEmptyCart>
      <img alt="cake" src="/images/illustration-empty-cart.svg" />

      <p>Your added items will appear here</p>
    </SEmptyCart>
  );
};

export default EmptyCart;
