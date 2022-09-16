import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 4rem;
  max-width: 100vw;
`;

export const AboutTitle = styled.h2`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.6rem;
  text-align: center;
  color: var(--black);

  @media (max-width: 428px) {
    margin-right: 10px;
  }
`;

export const AboutText = styled.p`
  font-family: DM Sans;
  font-size: 1.2rem;
  line-height: 2rem;
  color: var(--black);

  margin: 0 auto;
  width: 100%;
  white-space: pre-line;

  @media (max-width: 428px) {
    padding-right: 40px;
    text-align: center;
  }
`;
