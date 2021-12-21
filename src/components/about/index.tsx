import { useTranslation } from "react-i18next";
import * as Styled from "./style";

const About = () => {
  const { t } = useTranslation();

  return (
    <Styled.AboutContainer id="about">
      <Styled.AboutTitle> {t("about-title")}</Styled.AboutTitle>

      <Styled.AboutText>{t("about-text")}</Styled.AboutText>
    </Styled.AboutContainer>
  );
};

export default About;
