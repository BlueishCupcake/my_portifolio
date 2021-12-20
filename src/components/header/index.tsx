import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Container from "components/container";
import * as Styled from "./style";

const Header = () => {
  const [buttonLang, setButtonLang] = useState("pt");
  const { t } = useTranslation();

  const handlerLanguageChange = (lang: string) => {
    i18next.changeLanguage(lang, (err, t) => {
      if (err) return console.log("something went wrong loading", err);
      t("key"); // -> same as i18next.t
    });

    setButtonLang(lang);
  };

  return (
    <Styled.HeaderContainer>
      <Container>
        <Styled.HeaderHrapper>
          <Styled.HeaderTitle>Portfólio</Styled.HeaderTitle>

          <Styled.HeaderNav>
            <Styled.HeaderLinks href="#">{t("menu-about")}</Styled.HeaderLinks>

            <Styled.HeaderLinks href="#">
              {t("menu-projects")}
            </Styled.HeaderLinks>

            <Styled.HeaderLinks href="#">
              {t("menu-services")}
            </Styled.HeaderLinks>

            <Styled.HeaderLinks href="#">{t("menu-skills")}</Styled.HeaderLinks>

            <Styled.Btndiv>
              <Styled.LangBtn
                isActive={buttonLang === "pt"}
                onClick={() => handlerLanguageChange("pt")}
              >
                PT
              </Styled.LangBtn>
              <Styled.LangBtn
                isActive={buttonLang === "en"}
                onClick={() => handlerLanguageChange("en")}
              >
                EN
              </Styled.LangBtn>
            </Styled.Btndiv>
          </Styled.HeaderNav>
        </Styled.HeaderHrapper>
      </Container>
    </Styled.HeaderContainer>
  );
};

export default Header;