import Hero from "../components/hero";
import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import Header from "../components/header";
import AnimatedBackground from "../components/animated-background";
import Loader from "../components/loader";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // In case if video failed to start/load
    const timeout = setTimeout(() => {
      if (isVideoLoaded === false) {
        setIsVideoLoaded(true);
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <Loader finishLoading={() => setIsLoading(false)} />
  ) : (
    <>
      <AnimatedBackground onStart={() => setIsVideoLoaded(true)} />
      {isVideoLoaded && (
        <>
          <Header></Header>
          <Hero></Hero>
        </>
      )}
    </>
  );
};

export default IndexPage;
