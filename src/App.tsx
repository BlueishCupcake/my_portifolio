import Header from "./components/header";
import UpperBody from "./components/upperBody";
import About from "./components/about";
import Container from "./components/container";
import * as Styled from "./GlobalStyles";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <>
          <Styled.GlobalStyle />
          <UpperBody />
          <About />
        </>
      </Container>
    </>
  );
};

export default App;
