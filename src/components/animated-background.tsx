import React from "react";
import styled from "styled-components";
import GradientVideo from "../videos/GradientBackground.mp4";

interface Props {
  onStart: () => void;
}

const AnimatedBackground: React.FC<Props> = (props) => {
  return (
    <BackgroundVideo
      className="hide"
      onPlay={() => props.onStart()}
      preload="auto"
      autoPlay
      playsInline={true}
      muted={true}
      loop={false}
    >
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
  user-select: none;
  pointer-events: none;
`;

export default AnimatedBackground;
