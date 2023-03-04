import React from "react";
import Footer from "../../../components/Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <Navbar>
      <Home />
      <Footer />
    </Navbar>
  );
};

export default Main;
