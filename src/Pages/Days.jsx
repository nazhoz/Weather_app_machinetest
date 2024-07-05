import React from "react";

const Days = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-full lg:w-[50%] h-full lg:h-auto mr-5 sm:mr-10 lg:mr-20">
      <div className="backdrop-blur-sm bg-orange-200/50 w-[90%] sm:w-[75%] lg:w-[70%] h-[30vh] sm:h-[30vh] lg:h-[30vh] flex flex-col justify-around items-center rounded-md">
        <div className="flex justify-around items-center w-full">
          <div>
            <span className="text-white">Now</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
          <div>
            <span className="text-white">2 Am</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
          <div>
            <span className="text-white">3 Am</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
          <div>
            <span className="text-white">4 Am</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
          <div>
            <span className="text-white">5 Am</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
        </div>

        <div className="flex justify-around items-center w-full">
          <div>
            <span className="text-white">6 Am</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
          <div>
            <span className="text-white">7 Am</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
          <div>
            <span className="text-white">8 Am</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
          <div>
            <span className="text-white">9 Am</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
          <div>
            <span className="text-white">10 Am</span>
            <img className="w-8 h-8" src={require("../Assets/cloud.png")} alt="Cloud" />
          </div>
        </div>
      </div>
      <div className="w-[90%] sm:w-[75%] lg:w-[70%]">
        <span className="text-white text-center">Random Text</span><br />
        <span className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, iure!</span>
      </div>
    </div>
  );
};

export default Days;
