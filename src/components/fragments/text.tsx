import { TextColors } from "../../constants/colors";
import styled from "styled-components";
import { FontWeight, FontSize, FontFamily } from "../../constants/typography";

const Text = styled.p<TextProps>`
  z-index: 10;
  font-smooth: auto;
  -webkit-font-smoothing: auto;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  font-family: ${(props) => props.primaryFont && FontFamily.primary};
  font-family: ${(props) => props.secondaryFont && FontFamily.secondary};
`;

Text.defaultProps = {
  theme: {
    font: {
      weight: FontWeight,
      size: FontSize,
    },
    colors: TextColors,
  },
};

export interface TextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: number;
  primaryFont?: boolean;
  secondaryFont?: boolean;
  theme: {
    font: {
      weight: typeof FontWeight;
      size: typeof FontSize;
    };
    colors: typeof TextColors;
  };
}

export default Text;
