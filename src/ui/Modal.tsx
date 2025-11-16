import { createPortal } from "react-dom";
import styled from "styled-components";
import Summary from "./Summary";
import { useCart } from "../state/CartContextProvider";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: black;
  opacity: 90%;
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 2000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 90vw;
  max-width: 400px;
  border-radius: 5px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Tick = styled.img`
  width: 25px;
  object-fit: cover;
  @media screen and (min-width: 786px) {
    width: 45px;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  @media screen and (min-width: 786px) {
    font-size: 20px;
  }
`;

const Subtext = styled.p`
  font-size: 14px;
  color: var(--col-rose-4);
  @media screen and (min-width: 786px) {
    font-size: 16px;
  }
`;

const SummaryWrapper = styled.div`
  background-color: var(--col-rose-2);
  padding: 0.5rem;
  border-radius: 5px;
`;

const FinalButton = styled.button`
  border-radius: 20px;
  width: 100%;
  background-color: var(--col-red);
  color: var(--col-rose-1);
  padding-block: 0.5rem;
  @media screen and (min-width: 786px) {
    padding: 1rem;
    font-size: 16px;
  }
`;
const Modal = ({ handleCloseMdal }: { handleCloseMdal: () => void }) => {
  const { dispatch } = useCart();
  return createPortal(
    <>
      <Overlay onClick={handleCloseMdal} />
      <Wrapper>
        <Tick alt="confirm" src="/images/icon-order-confirmed.svg" />
        <Title>Order Confirmed</Title>
        <Subtext>We hope you enjoy your food</Subtext>
        <SummaryWrapper>
          <Summary isFinal={true} />
        </SummaryWrapper>
        <FinalButton onClick={() => dispatch({ type: "cart/clear" })}>
          Start New Order
        </FinalButton>
      </Wrapper>
    </>,
    document.body
  );
};

export default Modal;
