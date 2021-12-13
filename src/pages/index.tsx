import Hero from "../components/hero";
import * as React from "react";
import "../styles/main.scss";
import Header from "../components/header";
import AnimatedBackground from "../components/animated-background";

const IndexPage = () => {
  return (
    <main>
      <AnimatedBackground />
      <Header></Header>
      <Hero></Hero>
    </main>
  );
};

export default IndexPage;
