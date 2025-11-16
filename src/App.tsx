import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import Menu from "./ui/Menu";
import CartCard from "./ui/CartCard";

const StyledAppWrapper = styled.main`
  width: 95vw;
  margin: 0 auto;
  max-width: 1440px;
  padding: 1rem;

  @media screen and (min-width: 786px) {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 0.3rem;
    padding: 2rem 0;
  }
`;

function App() {
  return (
    <StyledAppWrapper>
      <GlobalStyles />
      <Menu />
      <CartCard />
    </StyledAppWrapper>
  );
}

export default App;
