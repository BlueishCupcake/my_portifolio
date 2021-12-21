import styled from "styled-components";

export const IconsList = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.8rem auto;
  width: 30rem;
`;

export const Icon = styled.a`
  background-color: #212121;
  width: 4rem;
  height: 4rem;
  display: flex;
  place-content: center;
  place-items: center;
  border-radius: 100%;
  border: 0;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0.5em 1em var(--pink-2);
    transform: translateY(-0.5em);
  }
  > svg {
    fill: var(--pink-1);
  }
`;
