import React from "react";
import Client from "../Client/Client";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import RecentWeddings from "../RecentWeddings/RecentWeddings";

const Main = () => {
  return (
    <Navbar>
      <Home />
      <RecentWeddings/>
      <Client/>
    </Navbar>
  );
};

export default Main;
