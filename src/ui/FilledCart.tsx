import styled from "styled-components";

import Modal from "./Modal";
import { useState } from "react";
import Summary from "./Summary";

const StyledFilledCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Declare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: var(--col-rose-2);
  padding: 8px;
  border-radius: 5px;
  font-size: 14px;
`;

const ConfirmBtn = styled.button`
  border-radius: 20px;
  width: 100%;
  background-color: var(--col-red);
  color: var(--col-rose-1);
  padding-block: 1rem;
`;

const FilledCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseMdal = () => setIsModalOpen(false);
  return (
    <StyledFilledCart>
      <Summary isFinal={false} />

      <Declare>
        <img src="/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
        <p>
          This is a <b>carbon-neutral</b> delivery.
        </p>
      </Declare>
      <ConfirmBtn onClick={() => setIsModalOpen(true)}>
        Confirm Order
      </ConfirmBtn>
      {isModalOpen && <Modal handleCloseMdal={handleCloseMdal} />}
    </StyledFilledCart>
  );
};

export default FilledCart;
