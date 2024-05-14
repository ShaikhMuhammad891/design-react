import React from "react";
import TopFront from "./TopFront";
import Services from "./Services";
import Trust from "./Trust";
import Customer from "./Customer";
import CaseStudies from "./CaseStudies";
import GreatSoftwares from "./GreatSoftwares";
import Approach from "./Approach";
import TechStack from "./TechStack";
import Alcline from "./Alcaline";
import Resources from "./Resources";
import Footer from "./Footer";
// import SimplePagination from "./SimplePagination";
import Test from "./Test";

const LandingPage = () => {
  return (
    <>
      <div className="">
        <TopFront />
        <Services />
        {/* <Test /> */}
        <Trust />
        <Customer />
        <CaseStudies />
        <GreatSoftwares />
        <Approach />
        <TechStack />
        <Alcline />
        <Resources />
        {/* <SimplePagination /> */}
      </div>
    </>
  );
};

export default LandingPage;
