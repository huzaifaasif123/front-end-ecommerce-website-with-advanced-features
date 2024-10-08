import React from "react";
import SearchIcon from "./Header Components/SearchIcon";
import MenuItemsHeader from "./Header Components/MenuItemsHeader";
import SearchBox from "./Header Components/SearchBox";
import { useContext } from "react";
import { Context } from "./Applayout";
import CartIcon from "./Header Components/CartIcon";

const Header = () => {
  const onSub = (e) => {
    e.preventDefault();
    console.log(searchVal);
  };

  const { searchVal, setSearchVal } = useContext(Context);

  return (
    <>
      <nav className="w-screen h-16 bg-palette3 flex items-center   text-white text-xl px-8 font-poppins justify-center gap-2  relative">
        <button className="p-1.5 rounded-3xl text-palette1 bg-palette9 shadow-inner shadow-palette1 hover:text-palette9 hover:bg-palette1 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 absolute left-4 text-sm font-normal md:p-2 md:text-lg md:font-bold">
          LOGO
        </button>
        <form
          onSubmit={(e) => onSub(e)}
          className="flex bg-palette9 w-64 rounded-3xl group  shadow-palette1 shadow-inner md:w-72 lg:w-96"
        >
          <SearchBox searchVal={searchVal} setSearchVal={setSearchVal} />
          <SearchIcon />
        </form>
        <MenuItemsHeader />
        <CartIcon />
      </nav>
    </>
  );
};

export default Header;
