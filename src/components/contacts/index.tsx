import { useTranslation } from "react-i18next";

import Github from "assets/icons/github";
import Linkedin from "assets/icons/linkedin";
import Mail from "assets/icons/mail";
import Phone from "assets/icons/phone";

import { SectionTitle } from "GlobalStyles";
import * as Styled from "./style";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle id="contacts"> {t("contacts-title")}</SectionTitle>

      <Styled.IconsList>
        <Styled.Icon href="https://github.com/BlueishCupcake">
          <Github />
        </Styled.Icon>

        <Styled.Icon href="https://www.linkedin.com/in/sophie-quines/">
          <Linkedin />
        </Styled.Icon>

        <Styled.Icon href="mailto:sophiequines@gmail.com">
          <Mail />
        </Styled.Icon>

        <Styled.Icon href="https://wa.me/555198060191">
          <Phone />
        </Styled.Icon>
      </Styled.IconsList>
    </>
  );
};

export default Contacts;
