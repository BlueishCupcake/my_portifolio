import styled from "styled-components";

export const UpperBodyContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  padding-top: 1em;
`;

export const LeftContentDiv = styled.div`
  margin-top: 15rem;

  @media (max-width: 414px) {
    margin-left: 1em;
  }
`;

export const UpperBodyTitle = styled.h2`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 2.9rem;
  color: var(--white);

  @media (max-width: 414px) {
    font-size: 30px;
  }
`;

export const UpperBodySub = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: var(--gray-3);
`;

export const PrimaryButton = styled.a`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  width: 9rem;
  margin-right: 0.9rem;
  border: none;
  height: 2.6rem;
  line-height: 18px;
  background-color: var(--pink-1);
  color: var(--white);
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-flex;
  place-content: center;
  place-items: center;

  &:hover {
    background-color: var(--pink-2);
  }
`;

export const SecondaryButton = styled.a`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid var(--gray-1);
  width: 9rem;
  background: var(--black);
  height: 2.6rem;
  color: var(--white);
  cursor: pointer;
  transition: transform 0.3s;
  display: inline-flex;
  place-content: center;
  place-items: center;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em var(--pink-2);
    transform: translateY(-0.25em);
  }
`;

export const ButtonDiv = styled.div`
  margin: 0.5em auto;
`;

export const StyledImg = styled.img`
  width: 20rem;
  margin-top: 10rem;

  @media (max-width: 414px) {
    margin: 0 auto;
    width: 10rem;
  }
`;
