import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import styled, { keyframes } from "styled-components";
import astronaut from "../assets/images/spaceman.png";

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 20%;
  right: 0%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 60%;
    height: auto;
    z-index: -20;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Spaceman>
        <img src={astronaut} alt="spaceman" />
      </Spaceman>
      <Footer />
    </>
  );
};

export default Home;
