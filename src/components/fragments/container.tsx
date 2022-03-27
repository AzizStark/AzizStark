import { AlignItem, JustifyContent } from "../../constants/flexbox";
import styled from "styled-components";
import { BackgroundColors } from "../../constants/colors";

const Container = styled.div<ContainerProps>`
  display: flex;
  flex: ${(props) => props.flex};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  flex-direction: ${(props) => props.row && "row"};
  flex-direction: ${(props) => props.column && "column"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  height: ${(props) => props.height || (props.fullHeight && "100%")};
  width: ${(props) => props.width || (props.fullWidth && "100%")};
`;

Container.defaultProps = {
  theme: {
    bgColor: BackgroundColors,
    alignItem: AlignItem,
    justifyContent: JustifyContent,
  },
};

export interface ContainerProps {
  align?: string;
  flex?: number | string;
  justify?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  column?: boolean;
  row?: boolean;
  width?: string;
  fullWidth?: boolean;
  height?: string;
  fullHeight?: boolean;
  theme: {
    bgColor: typeof BackgroundColors;
    alignItem: typeof AlignItem;
    justifyContent: typeof JustifyContent;
  };
}

export default Container;
