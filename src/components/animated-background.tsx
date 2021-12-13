import React from "react";
import styled from "styled-components";
import GradientVideo from "../videos/GradientBackground.mp4";

const AnimatedBackground: React.FC = () => {
  return (
    <BackgroundVideo className="hide" autoPlay preload="auto" playsInline={true} muted={true} loop={false}>
      <source src={GradientVideo} />
    </BackgroundVideo>
  );
};

const BackgroundVideo = styled.video`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 10000;
`;

export default AnimatedBackground;
