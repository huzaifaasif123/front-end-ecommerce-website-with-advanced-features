import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-screen bg-palette3 flex flex-col md:flex-row items-center justify-evenly relative z-0 min-h-[50vh] md:min-h-[60vh] lg:min-h-[80vh] overflow-visible">
       
        <div className="w-full min-h-[18vh] md:w-2/5 flex items-center justify-center mb-8 md:mb-0 lg:min-h-[80vh] lg:min-w-[40vw] md:min-h-[30vh] md:min-w-[40vw] ">
          <h1 className="w-3/5 text-center text-xl justify-center font-bold text-palette1 shadow-palette1 p-4 bg-palette9 rounded-3xl cursor-pointer h-4/5 flex items-center shadow-inner transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-palette9 hover:bg-palette1 hover:shadow-xl hover:shadow-palette9 z-10 md:w-4/5 md:h-2/5 md:font-bold md:text-3xl lg:text-4xl lg:w-4/5 lg:min-h-[40vh] md:min-h-[33vh] md:min-w-[33vw]">
            Upgrade Your Wardrobe Today
          </h1>
        </div>

        
        <div className="w-full md:w-2/5 flex items-center justify-center overflow-visible">
          <figure className="relative flex items-center justify-center rounded-full shadow-2xl shadow-palette1 w-[70vw] max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto">
            <img
              className="rounded-full object-cover w-full h-auto"
              src="src/images/Wavy_Bus-17_Single-06.jpg"
              alt="Wardrobe Upgrade"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Hero;
