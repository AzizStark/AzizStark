import Hero from "../components/hero";
import * as React from "react";
import "../styles/main.scss";
import Header from "../components/header";

const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
    </main>
  );
};

export default IndexPage;
