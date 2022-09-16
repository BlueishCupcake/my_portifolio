import styled, { css } from "styled-components";

interface ButtonProps {
  isActive: boolean;
}

const ActiveButtonStyle = css`
  border: none;

  &:hover {
    animation: pulse 1s;
    box-shadow: inset 0 -3.25em 0 0 var(--pink-2);
  }
`;

const InacctiveButtonStyle = css`
  border: 1px var(--gray-1) solid;
  background-color: var(--black);
  color: var(--white);

  &:hover {
    animation: pulse 1s;
    box-shadow: inset 0 -3.25em 0 0 var(--pink-2);
  }
`;

export const HeaderContainer = styled.div`
  background-color: var(--gray-2);
  color: var(--white);
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  place-items: center;
  place-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 428px) {
    width: 100%;
    place-items: space-between;
  }

  @media (max-width: 810px) {
    place-items: center;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  padding: 35px 0;
  line-height: 34px;

  @media (max-width: 428px) {
    width: 100vw;
    text-align: center;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  place-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 428px) {
    place-content: center;
  }

  @media (max-width: 375px) {
    place-content: space-between;
    height: 150px;
  }
`;

export const HeaderLinks = styled.span`
  text-decoration: none;
  width: 75px;
  margin: 0 1.4rem;
  color: var(--white);
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--pink-1);
  }

  @media (max-width: 428px) {
    padding: 4px;
  }
`;

export const Btndiv = styled.div`
  display: flex;
  margin-left: 1rem;

  @media (max-width: 428px) {
    padding: 1em;
  }

  @media (max-width: 810px) {
    padding: 16px;
  }
`;

export const LangBtn = styled.button<ButtonProps>`
  display: flex;
  place-content: center;
  place-items: center;
  width: 3rem;
  font-family: DM Sans;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.3s;

  ${({ isActive }) => (isActive ? ActiveButtonStyle : InacctiveButtonStyle)}
`;
