import { React, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../Applayout";

const CartIcon = () => {
  const { setIsCartOpen } = useContext(Context);

  return (
    <div>
      <FontAwesomeIcon
        onClick={() => {
          console.log("Cart icon clicked!");
          setIsCartOpen(true);
        }}
        icon={faShoppingCart}
        className="p-3 rounded-xl text-palette1 bg-palette9 shadow-inner shadow-palette1 hover:text-palette9 hover:bg-palette1 flex items-center justify-center text-lg font-normal md:p-3 md:font-bold md:rounded-2xl md:text-2xl "
      />
    </div>
  );
};

export default CartIcon;
