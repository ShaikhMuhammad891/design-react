import React from "react";
import Header from "./common/Header";
import LandingPage from "./main/LandingPage";

const App = () => {
  return (
    <>
      <div className="  mx-auto max-w-[1440px]">
        <Header />
        <LandingPage />
      </div>
    </>
  );
};

export default App;
