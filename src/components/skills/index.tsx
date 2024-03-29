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
      title: "CSS 3",
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
  ];

  return (
    <>
      <SectionTitle id="skills"> {t("skills-title")}</SectionTitle>
      <Styled.SkillsContainer>
        {skillsInfo.map((skill, key) => {
          return (
            <Styled.SkillFrame key={`${skill} ${key}`}>
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
