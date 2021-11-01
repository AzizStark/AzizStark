import React from "react";
import styled from "styled-components";
import { FontSize, FontWeight } from "../constants/typography";
import { TextColors } from "../constants/colors";
import Container from "./fragments/container";
import Section from "./fragments/section";
import Text, { TextProps } from "./fragments/text";
import Img from "../images/Glow.png";
import Keys from "../images/Keys.png";
import { AlignItem, JustifyContent } from "../constants/flexbox";

const Hero: React.FC = () => {
  return (
    <Section>
      <Container flex={4} fullHeight fullWidth>
        <GradientBackground src={Img} />
        <Container align={AlignItem.flexStart} column>
          <Text color={TextColors.color2} fontSize={FontSize.large} fontWeight={FontWeight.light} secondaryFont>
            Hi there, I’m
          </Text>
          <Text color={TextColors.white} fontSize={FontSize.xxl}>
            Aziz Rahman
          </Text>
          <Text color={TextColors.color1} fontSize={FontSize.xl}>
            Developer + Designer
          </Text>
          <Container margin="30px 0px 0px 0px">
            <Text color={TextColors.color3} fontSize={FontSize.large} fontWeight={FontWeight.light} secondaryFont>
              I’m a full-stack engineer with experience in design and development of user-centered web and mobile
              applications. I am also focussing on mastering UI/UX design. Currently, I’m working on building cloud
              solutions at <CompanyName as="a">Presidio</CompanyName>.
            </Text>
          </Container>
        </Container>
      </Container>
      <Container justify={JustifyContent.flexEnd} flex={3} fullHeight fullWidth>
        <img src={Keys} width={500} />
      </Container>
    </Section>
  );
};

const GradientBackground = styled.img`
  position: absolute;
  width: 50vw;
  filter: blur(60px);
  transform: translate(30px, -30px);
`;

const CompanyName = styled(Text).attrs(() => ({
  href: "https://presidio.com/",
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: ${(props: TextProps) => props.theme.colors.color2};
  text-decoration: none;
`;

export default Hero;
