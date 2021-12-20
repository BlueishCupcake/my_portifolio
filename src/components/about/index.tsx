import Github from "assets/icons/github";
import Linkedin from "assets/icons/linkedin";
import Mail from "assets/icons/mail";
import Phone from "assets/icons/phone";

import * as Styled from "./style";

const About = () => {
  return (
    <Styled.AboutContainer>
      <Styled.AboutTitle>About myself</Styled.AboutTitle>

      <Styled.AboutText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident
      </Styled.AboutText>

      <Styled.IconsList>
        <Styled.Icon>
          <Github />
        </Styled.Icon>

        <Styled.Icon>
          <Linkedin />
        </Styled.Icon>

        <Styled.Icon>
          <Mail />
        </Styled.Icon>

        <Styled.Icon>
          <Phone />
        </Styled.Icon>
      </Styled.IconsList>
    </Styled.AboutContainer>
  );
};

export default About;