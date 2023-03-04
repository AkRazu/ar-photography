import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import RecentWeddings from "../RecentWeddings/RecentWeddings";

const Main = () => {
  return (
    <Navbar>
      <Home />
      <RecentWeddings/>
    </Navbar>
  );
};

export default Main;
