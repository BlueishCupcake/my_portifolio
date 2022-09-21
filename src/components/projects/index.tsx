import { useTranslation } from "react-i18next";
import { SectionTitle } from "GlobalStyles";
import * as Styled from "./style";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Minimalist Libary",
      image: "minimalist_libary.png",
      link: "https://github.com/BlueishCupcake/MinimalistLibary",
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
        {projects.map((project, key) => {
          return (
            <Styled.ProjectBorder
              href={project.link || "#"}
              target="_blank"
              key={`${project} ${key}`}
            >
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
