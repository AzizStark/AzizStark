import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "./fragments/container";
import Logo from "./icons/logo";
import { introLogoAnimate } from "../utils/animations";

interface LoaderProps {
  finishLoading: () => void;
}

const Loader: React.FC<LoaderProps> = (props) => {
  useEffect(() => {
    introLogoAnimate(props.finishLoading);
  }, []);

  return (
    <Container height="100vh">
      <StyledLogo />
    </Container>
  );
};

const StyledLogo = styled(Logo)`
  height: 8rem;
  max-width: 50px;
`;

export default Loader;
