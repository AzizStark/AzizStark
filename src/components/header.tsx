import React, { useEffect } from "react";
import { FontSize, FontWeight } from "../constants/typography";
import styled from "styled-components";
import { TextColors } from "../constants/colors";
import Container, { ContainerProps } from "./fragments/container";
import Text, { TextProps } from "./fragments/text";
import { smoothDropAnimate } from "../utils/animations";
import { YAnimAxis } from "../enums/anims";

const Header: React.FC = () => {
  useEffect(() => {
    smoothDropAnimate("#name", 1000, YAnimAxis.bottom);
    smoothDropAnimate(".animated-text", 1200, YAnimAxis.bottom);
  }, []);

  return (
    <HeaderContainer fullWidth>
      <Container padding={"25px"}>
        <Text id="name" color={TextColors.color1} fontSize={FontSize.medium}>
          Aziz Stark
        </Text>
      </Container>
      <Container padding={"25px"}>
        <HeaderText fontWeight={FontWeight.semibold} link="#" fontSize={FontSize.medium}>
          WIP 🛠️
        </HeaderText>
        <HeaderText link={"https://deviantart.com/"} fontSize={FontSize.medium}>
          Works
        </HeaderText>
        <HeaderText link={"https://azizstarkblog.herokuapp.com/blog/"} fontSize={FontSize.medium}>
          Blog
        </HeaderText>
        <HeaderText link={"https://bio.azizstark.com/"} fontSize={FontSize.medium}>
          Contact
        </HeaderText>
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

const HeaderText = styled(Text).attrs((props: { link: string }) => ({
  className: "animated-text",
  onClick: () => {
    window.open(props.link, "_blank");
  },
}))<{ link: string }>`
  font-size: ${(props) => props.fontSize};
  color: ${(props: TextProps) => props.theme.colors.color1};
  font-weight: ${(props: TextProps) => props.theme.font.weight.light};
  margin-right: 3vw;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  :last-child {
    margin-right: 0px;
  }
`;

export default Header;
