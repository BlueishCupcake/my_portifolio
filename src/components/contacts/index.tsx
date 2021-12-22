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
        <Styled.Icon href="https://github.com/BlueishCupcake" target="_blank">
          <Github />
        </Styled.Icon>

        <Styled.Icon
          href="https://www.linkedin.com/in/sophie-quines/"
          target="_blank"
        >
          <Linkedin />
        </Styled.Icon>
      </Styled.IconsList>
    </>
  );
};

export default Contacts;
