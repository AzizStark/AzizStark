import { BackgroundColors } from "../../constants/colors";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${BackgroundColors.primary};
  max-width: 100vw;
  height: 100vh;
  padding: 0px 200px;
`;

export default Section;
