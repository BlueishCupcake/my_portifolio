import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 8rem;
  height: 100000vh;
`;

export const AboutTitle = styled.h2`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.6rem;
  text-align: center;
  color: var(--white);
  margin-bottom: 1.8rem;
`;

export const AboutText = styled.p`
  font-family: DM Sans;
  font-size: 1.2rem;
  line-height: 2rem;
  color: var(--gray-3);
  text-align: center;
  width: 45rem;
  margin: 0 auto;
`;

export const IconsList = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.8rem auto;
  width: 30rem;
`;

export const Icon = styled.div`
  background-color: #212121;
  width: 4rem;
  height: 4rem;
  display: flex;
  place-content: center;
  place-items: center;
  border-radius: 100%;

  > svg {
    fill: var(--pink-1);
  }
`;
