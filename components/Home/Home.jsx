"use client";

import React from "react";
import "../../Styles/Home.css";
import Me from "../../assets/avatar-1.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Image from "next/image";

const Home = () => {
  return (
    <section className="home container" id="Home">
      <div className="intro">
        <Image src={Me} alt="Me" className="home__img" />
        <h1 className="home__name">Ho Ngoc Hung Thinh</h1>
        <span className="home__education">I like coding</span>

        <HeaderSocials />

        <a href="#Contact" className="btn">
          Contact to Me
        </a>

        <ScrollDown />

        <Shapes />
      </div>
    </section>
  );
};

export default Home;
