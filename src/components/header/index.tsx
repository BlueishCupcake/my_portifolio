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

  const clickHandler = (section: string) => {
    const sections: HTMLElement | null = document.querySelector(`#${section}`);

    if (!sections) {
      return;
    }

    window.scrollTo({
      top: sections.offsetTop - 160,
      behavior: "smooth",
    });
  };

  return (
    <Styled.HeaderContainer>
      <Container>
        <Styled.HeaderHrapper>
          <Styled.HeaderTitle id="beggining">Portfólio</Styled.HeaderTitle>

          <Styled.HeaderNav>
            <Styled.HeaderLinks onClick={() => clickHandler("beggining")}>
              {t("menu-beggining")}
            </Styled.HeaderLinks>

            <Styled.HeaderLinks onClick={() => clickHandler("about")}>
              {t("menu-about")}
            </Styled.HeaderLinks>

            <Styled.HeaderLinks onClick={() => clickHandler("projects")}>
              {t("menu-projects")}
            </Styled.HeaderLinks>

            <Styled.HeaderLinks onClick={() => clickHandler("skills")}>
              {t("menu-skills")}
            </Styled.HeaderLinks>

            <Styled.HeaderLinks onClick={() => clickHandler("contacts")}>
              {t("menu-contacts")}
            </Styled.HeaderLinks>

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
