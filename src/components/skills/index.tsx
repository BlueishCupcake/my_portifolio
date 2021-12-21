import { useTranslation } from "react-i18next";
import { SectionTitle } from "GlobalStyles";
import * as Styled from "./style";

const Skills = () => {
  const { t } = useTranslation();

  const skillsInfo = [
    {
      img: "html-icon.png",
      title: "HTML 5",
    },
    {
      img: "css-icon.png",
      title: "CSS E",
    },
    {
      img: "js-icon.png",
      title: "Javascript",
    },
    {
      img: "ts-icon.png",
      title: "Typescript",
    },
    {
      img: "react-icon.png",
      title: "React & React Native",
    },
    {
      img: "flutter-icon.png",
      title: "Flutter",
    },
  ];

  return (
    <>
      <SectionTitle id="skills"> {t("skills-title")}</SectionTitle>
      <Styled.SkillsContainer>
        {skillsInfo.map((skill) => {
          return (
            <Styled.SkillFrame>
              <Styled.ImgWrapper>
                <Styled.SkillImg src={skill.img} alt="Skill" />
              </Styled.ImgWrapper>
              <Styled.SkillName>{skill.title}</Styled.SkillName>
            </Styled.SkillFrame>
          );
        })}
      </Styled.SkillsContainer>
    </>
  );
};

export default Skills;
