import { useTranslation } from "react-i18next";
import * as S from "./style";

const UpperBody = () => {
  const { t } = useTranslation();

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
    <S.UpperBodyContainer>
      <S.LeftContentDiv>
        <S.UpperBodyTitle>{t("main-name")}</S.UpperBodyTitle>

        <S.UpperBodySub>{t("main-job")}</S.UpperBodySub>

        <S.ButtonDiv>
          <S.PrimaryButton target="_blank" href="/Resume.pdf">
            {t("main-cv")}
          </S.PrimaryButton>

          <S.SecondaryButton onClick={() => clickHandler("contacts")}>
            {t("main-contact")}
          </S.SecondaryButton>
        </S.ButtonDiv>
      </S.LeftContentDiv>
      <S.StyledImg src="castellian_1.png" alt="Me drinking coffe" />
    </S.UpperBodyContainer>
  );
};

export default UpperBody;
