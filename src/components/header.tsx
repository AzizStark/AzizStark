import React from "react";
import styled from "styled-components";
import { TextColors } from "../constants/colors";
import Container, { ContainerProps } from "./fragments/container";
import Text, { TextProps } from "./fragments/text";

const Header: React.FC = () => {
  return (
    <HeaderContainer fullWidth>
      <Container padding={"25px"}>
        <Text color={TextColors.color1}>Aziz Stark</Text>
      </Container>
      <Container padding={"25px"}>
        <HeaderText>About</HeaderText>
        <HeaderText>Work</HeaderText>
        <HeaderText>Blog</HeaderText>
        <HeaderText>Contact</HeaderText>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Container)`
  position: fixed;
  max-width: 100vw;
  background: ${(props: ContainerProps) => props.theme.bgColor.primary};
  justify-content: ${(props: ContainerProps) => props.theme.justifyContent.spaceBetween};
`;

const HeaderText = styled(Text)`
  font-size: ${(props: TextProps) => props.theme.font.size.medium};
  color: ${(props: TextProps) => props.theme.colors.color1};
  font-weight: ${(props: TextProps) => props.theme.font.weight.light};
  margin-right: 3vw;
  :last-child {
    margin-right: 0px;
  }
`;

export default Header;
