import * as S from "./style";

const UpperBody = () => {
  return (
    <S.UpperBodyContainer>
      <S.LeftContentDiv>
        <S.UpperBodyTitle>Hello, I'm Sophie!</S.UpperBodyTitle>

        <S.UpperBodySub> Front-End Developer</S.UpperBodySub>

        <S.ButtonDiv>
          <S.PrimaryButton target="_blank" href="/Resume.pdf">
            Donwload CV
          </S.PrimaryButton>

          <S.SecondaryButton href="https://wa.me/555198060191">
            Get in touch
          </S.SecondaryButton>
        </S.ButtonDiv>
      </S.LeftContentDiv>
      <S.StyledImg src="rem-rezero.gif" alt="Dancing Rem Gif" />
    </S.UpperBodyContainer>
  );
};

export default UpperBody;
