import styled from "styled-components";

export const SectionProjectsContainer = styled.div``;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 2em;
  grid-column-gap: 2em;

  @media (max-width: 414px) {
    display: flex;
    flex-flow: column wrap;
  }
`;

export const ProjectBorder = styled.a`
  background-color: var(--gray-2);
  padding-top: 2.5vh;
  display: flex;
  flex-flow: wrap;
  place-content: center;
  cursor: pointer;
  border: none;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0.5em 1em var(--pink-2);
    transform: translateY(-0.5em);
  }

  @media (max-width: 414px) {
    margin: 1em;
  }
`;

export const ProjectImg = styled.img`
  background-color: var(--gray-1);
  width: 93%;
  aspect-ratio: 16/9;
`;

export const ProjectTitle = styled.h3`
  color: var(--white);
  font-size: 25px;
  padding: 15px;
  font-family: DM Sans;
`;
