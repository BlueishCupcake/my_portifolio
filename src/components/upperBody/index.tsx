import { useTranslation } from "react-i18next";
import * as S from "./style";

const UpperBody = () => {
  const { t } = useTranslation();

  return (
    <S.UpperBodyContainer>
      <S.LeftContentDiv>
        <S.UpperBodyTitle>{t("main-name")}</S.UpperBodyTitle>

        <S.UpperBodySub>{t("main-job")}</S.UpperBodySub>

        <S.ButtonDiv>
          <S.PrimaryButton target="_blank" href="/Resume.pdf">
            {t("main-cv")}
          </S.PrimaryButton>

          <S.SecondaryButton href="https://wa.me/555198060191">
            {t("main-contact")}
          </S.SecondaryButton>
        </S.ButtonDiv>
      </S.LeftContentDiv>
      <S.StyledImg src="rem-rezero.gif" alt="Dancing Rem Gif" />
    </S.UpperBodyContainer>
  );
};

export default UpperBody;
