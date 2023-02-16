import React from "react";
import Appbar from "../Appbar/Appbar";
import CardCarousel from "../Carousel/CardCarousel";
import WelcomeDashboard from "../Carousel/WelcomeDashboard";
import Footer from "../Footer/Footer";
import AppConfig from "../template/AppConfig";
import Home from "./Home/Home";
import Router from "./_routes";

const App = (): JSX.Element => {
  return (
    <>
      <Home />
    </>
    // <AppConfig>
    //   <Router />
    // </AppConfig>
  );
};

export default App;
