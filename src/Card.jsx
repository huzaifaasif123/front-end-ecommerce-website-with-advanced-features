import React from "react";

const Card = ({ title, price, img, category, description, id, setToggleDetailPage, setSingleProductDetail }) => {
  const handleCardClick = () => {
    setToggleDetailPage(true); 
    setSingleProductDetail({ title, price, img, description, id });
  };

  return (
    <div
      category={category}
      id={id}
      className="w-64 rounded-3xl h-80 flex items-center flex-col shadow-palette1 justify-start shadow-2xl mt-8 mb-10 cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-palette3 hover:bg-gradient-to-r from-palette1 via-palette6 to-palette9"
      onClick={handleCardClick} 
    >
      <figure className="w-full flex items-center justify-center min-h-44 max-h-44 overflow-hidden rounded-tl-3xl rounded-tr-3xl shadow-inner shadow-palette1 bg-palette9 transition-all duration-500 ease-in-out hover:bg-palette1">
        <img
          className="min-h-full min-w-full max-h-full max-w-full object-fill transition-transform duration-500 hover:scale-110"
          src={img}
          alt={title}
        />
      </figure>
      <div className="bg-palette9 w-full h-full shadow-inner shadow-palette1 p-1 flex flex-col items-center justify-center group transition-colors duration-500 ease-in-out hover:bg-palette1">
        <p className="text-palette1 mt-px text-xs font-bold w-full min-h-9 text-center overflow-hidden transition-colors duration-500 ease-in-out group-hover:text-palette9">
          {title}
        </p>
        <h1 className="font-bold text-palette1 mb-px overflow-hidden transition-colors duration-500 ease-in-out group-hover:text-palette9">
          ${price}
        </h1>
        <button className="font-bold text-white p-2 shadow-inner bg-palette1 rounded-3xl overflow-hidden transition-all duration-500 ease-in-out hover:bg-palette6 hover:text-palette1 hover:shadow-lg">
          Product Details
        </button>
      </div>
    </div>
  );
};

export default Card;
