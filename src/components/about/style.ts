import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 4rem;
`;

export const AboutTitle = styled.h2`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.6rem;
  text-align: center;
  color: var(--white);
  margin: 1.8rem;
`;

export const AboutText = styled.p`
  font-family: DM Sans;
  font-size: 1.2rem;
  line-height: 2rem;
  color: var(--gray-3);
  width: 45rem;
  margin: 0 auto;
  white-space: pre-line;

  @media (max-width: 414px) {
    width: 15em;
  }
`;
