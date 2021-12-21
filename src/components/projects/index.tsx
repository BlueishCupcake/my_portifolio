import { useTranslation } from "react-i18next";
import { SectionTitle } from "GlobalStyles";
import * as Styled from "./style";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Work in progress :3",
      image: "cat-memes.gif",
    },
    {
      title: "Work in progress :3",
      image: "cat-memes.gif",
    },
    {
      title: "Work in progress :3",
      image: "cat-memes.gif",
    },
    {
      title: "Work in progress :3",
      image: "cat-memes.gif",
    },
  ];

  return (
    <Styled.SectionProjectsContainer>
      <SectionTitle id="projects"> {t("projects-title")}</SectionTitle>

      <Styled.ProjectList>
        {projects.map((project) => {
          return (
            <Styled.ProjectBorder>
              <Styled.ProjectImg alt="Project img" src={project.image} />
              <Styled.ProjectTitle>{project.title}</Styled.ProjectTitle>
            </Styled.ProjectBorder>
          );
        })}
      </Styled.ProjectList>
    </Styled.SectionProjectsContainer>
  );
};

export default Projects;
