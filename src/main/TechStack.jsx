import React, { useState } from "react";
import { Line } from "../assets/Logos";
import "./Services.css";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Backend");

  // Filter the items based on the selected category
  const filteredItems = upperLine.filter((item) => {
    // if (selectedCategory === "All") {
    //   return true;
    // } else {
    //   return item.category === selectedCategory;
    // }
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <>
      <div>
        <div className="lg:mt-[80px] md:mt-[60px] sm:mt-[50px] mt-[40px]">
          <div className="flex justify-center">
            <Line />
          </div>
          <p className="lg:mt-[20px] md:mt-[15px] sm:mt-[12px] text-[#1A202C] lg:text-[35px] md:text-[28px] sm:text-[23px] text-[20px] mt-[10px] lg:leading-[55px] md:leading-[45px] font-inter font-[400] text-center">
            Our
            <span className="md:font-[700] font-[600]">
              <br /> Tech Stack
            </span>
          </p>
          <ul className="flex justify-center mt-[38px] xl:gap-x-[60px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[20px]">
            <li
              className={`lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] ${
                selectedCategory === "Backend"
                  ? "text-color font-[600]"
                  : "text-[#1A202C]"
              }`}
              onClick={() => setSelectedCategory("Backend")}
            >
              Backend
            </li>
            <li
              className={`lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] ${
                selectedCategory === "Frontend"
                  ? "text-color font-[600]"
                  : "text-[#1A202C]"
              }`}
              onClick={() => setSelectedCategory("Frontend")}
            >
              Frontend
            </li>
            <li
              className={`lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] ${
                selectedCategory === "Database"
                  ? "text-color font-[600]"
                  : "text-[#1A202C]"
              }`}
              onClick={() => setSelectedCategory("Database")}
            >
              Database
            </li>
            <li
              className={`lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] ${
                selectedCategory === "CMS"
                  ? "text-color font-[600]"
                  : "text-[#1A202C]"
              }`}
              onClick={() => setSelectedCategory("CMS")}
            >
              CMS
            </li>
            <li
              className={`lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] ${
                selectedCategory === "CloudTesting"
                  ? "text-color font-[600]"
                  : "text-[#1A202C]"
              }`}
              onClick={() => setSelectedCategory("CloudTesting")}
            >
              Cloud Testing
            </li>
            <li
              className={`lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] ${
                selectedCategory === "DevOps"
                  ? "text-color font-[600]"
                  : "text-[#1A202C]"
              }`}
              onClick={() => setSelectedCategory("DevOps")}
            >
              DevOps
            </li>
          </ul>
          <div className="max-w-[1064px] mx-auto mt-[72px]">
            {filteredItems.length > 0 && (
              <div className="flex flex-wrap justify-center">
                {filteredItems.map((e, i) => (
                  <div key={i} className="w-[calc(20% - 20px)] mb-4">
                    <img src={e.logo} alt="" className="w-full" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;

const upperLine = [
  {
    logo: "/images/node.png",
    category: "Backend",
  },
  {
    logo: "/images/php.png",
    category: "Backend",
  },
  {
    logo: "/images/php.png",
    category: "Frontend",
  },
  {
    logo: "/images/sql.png",
    category: "Database",
  },
  {
    logo: "/images/node.png",
    category: "Database",
  },
  {
    logo: "/images/java.png",
    category: "Backend",
  },
  {
    logo: "/images/net.png",
    category: "Backend",
  },
  {
    logo: "/images/python.png",
    category: "Backend",
  },
  {
    logo: "/images/rails.png",
    category: "Database",
  },
  {
    logo: "/images/rails.png",
    category: "Backend",
  },
  {
    logo: "/images/go.png",
    category: "Backend",
  },
  {
    logo: "/images/mongo.png",
    category: "Database",
  },
  {
    logo: "/images/python.png",
    category: "Backend",
  },
  {
    logo: "/images/go.png",
    category: "Frontend",
  },
  {
    logo: "/images/rails.png",
    category: "Frontend",
  },
  {
    logo: "/images/angular.png",
    category: "Frontend",
  },
  {
    logo: "/images/rails.png",
    category: "Fronend",
  },
  {
    logo: "/images/mongo.png",
    category: "Frontend",
  },
  {
    logo: "/images/php.png",
    category: "DevOps",
  },
  {
    logo: "/images/sql.png",
    category: "DevOps",
  },
  {
    logo: "/images/rails.png",
    category: "DevOps",
  },
  {
    logo: "/images/rails.png",
    category: "CloudTesting",
  },
  {
    logo: "/images/go.png",
    category: "CloudTesting",
  },
  {
    logo: "/images/mongo.png",
    category: "CloudTesting",
  },
  {
    logo: "/images/python.png",
    category: "CloudTesting",
  },
  {
    logo: "/images/go.png",
    category: "CloudTesting",
  },
 
  {
    logo: "/images/php.png",
    category: "CMS",
  },
  {
    logo: "/images/mongo.png",
    category: "CMS",
  },
  {
    logo: "/images/sql.png",
    category: "CMS",
  },
  {
    logo: "/images/rails.png",
    category: "CMS",
  },
  {
    logo: "/images/node.png",
    category: "CMS",
  },
  {
    logo: "/images/go.png",
    category: "CMS",
  },
];
