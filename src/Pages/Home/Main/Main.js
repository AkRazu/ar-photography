import React from "react";
import Footer from "../../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <Navbar>
      <Outlet />
      <Footer />
    </Navbar>
  );
};

export default Main;
