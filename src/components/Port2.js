import React from "react";
import pic1 from "../assets/pic1.jpg";
import ss from "../assets/Screenshot (576).png";
import ss1 from "../assets/Screenshot (578).png";

const PortFolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pic1,
    },
    {
      id: 2,
      src: ss,
    },
    {
      id: 3,
      src: ss1,
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-900 to-gray-500 w-full text-gray-200
    md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full"
      >
        <div className=" pb-8">
          <p className="text-4xl font-semibold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works!</p>
        </div>

        <div
          className=" grid-sm:grid-cols-2 md:grid-cols-3 gap-8
             px-12 sm:px-0 "
        >
          {
          portfolios.map(({ id, src }) => {
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src} alt=""
                className="  rounded-md duration-200 hover:scale-105 cursor-pointer "
              />
              <div className="item-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  
                  Code
                </button>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
