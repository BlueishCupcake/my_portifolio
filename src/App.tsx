import Header from "./components/header";
import UpperBody from "./components/upperBody";
import About from "./components/about";
import Container from "./components/container";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Skills from "components/skills";
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
          <Projects />
          <Skills />
          <Contacts />
        </>
      </Container>
    </>
  );
};

export default App;
