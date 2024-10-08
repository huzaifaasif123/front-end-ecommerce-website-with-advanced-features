import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export const Context = createContext();
const Applayout = () => {
  const [searchVal, setSearchVal] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Context.Provider
        value={{
          searchVal,
          setSearchVal,
          cart,
          setCart,
          isCartOpen,
          setIsCartOpen,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </Context.Provider>
    </>
  );
};

export default Applayout;
