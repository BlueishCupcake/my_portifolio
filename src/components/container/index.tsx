import * as Styled from "./style";

interface ContainerProps {
  children: JSX.Element | string;
}

const Container = ({ children }: ContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Container;
