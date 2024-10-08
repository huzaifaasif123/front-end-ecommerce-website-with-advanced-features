import React from "react";

const Filters = ({ setSelectedCategory, setSortingOption , ToggleDetailPage}) => {
  return (
    <>
      <div className={`filters w-screen bg-palette3 flex items-center justify-around ${ToggleDetailPage && `hidden`}`}>
        <div className="Category flex flex-col items-center justify-center">
          <label
            htmlFor="Category"
            className="text-palette1 rounded-3xl p-1 shadow-palette1 bg-palette9 mb-1 font-bold shadow-inner"
          >
            Select Category:{" "}
          </label>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="Category"
            className="Category rounded-3xl shadow-inner shadow-palette1 outline-none bg-palette9 text-palette1 p-2"
          >
            <option>All</option>
            <option>men's clothing</option>
            <option>jewelery</option>
            <option>electronics</option>
            <option>women's clothing</option>
          </select>
        </div>
        <div className="Sorting flex flex-col items-center justify-center">
          <label
            htmlFor="Sorting"
            className="text-palette1 rounded-3xl p-1 shadow-palette1 bg-palette9 mb-1 font-bold shadow-inner"
          >
            Sort By:{" "}
          </label>
          <select
            onChange={(e) => setSortingOption(e.target.value)}
            name="Sorting"
            className="Sorting rounded-3xl shadow-inner shadow-palette1 outline-none bg-palette9 text-palette1 p-2"
          >
            <option>Alphabet ( A to Z )</option>
            <option>Price (Low to High)</option>
            <option>Price (High to Low)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
