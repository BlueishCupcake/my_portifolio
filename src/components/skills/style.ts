import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  place-content: space-between;

  @media (max-width: 414px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    place-content: center;
    place-items: center;
  }
`;

export const SkillFrame = styled.div`
  width: 6em;
  display: flex;
  flex-flow: column;
  place-items: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 8em;
`;

export const SkillImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const SkillName = styled.span`
  color: var(--black);
  font-family: DM Sans;
  padding: 10px;
`;
