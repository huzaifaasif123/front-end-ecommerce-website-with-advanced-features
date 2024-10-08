import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Applayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ProductDetailsPage = ({ setToggleDetailPage, singleProductDetail }) => {
  const { cart, setCart } = useContext(Context);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const addToCart = () => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(
        (item) => item.id === singleProductDetail.id
      );

      if (productInCart) {
        return prevCart.map((item) =>
          item.id === singleProductDetail.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...singleProductDetail,
            id: singleProductDetail.id || Date.now(),
            quantity: 1,
          },
        ];
      }
    });

    setShowAddedMessage(true);
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 1000);
  };

  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  return (
    <div className="w-full absolute top-16 bg-palette3 h-full flex items-center justify-center">
      <div className="bg-palette9 shadow-inner shadow-palette1 rounded-3xl flex items-center justify-evenly w-11/12 md:w-5/6 lg:w-3/4 h-4/5 lg:h-3/5 relative flex-col lg:flex-row p-4">
        {/* Close Button */}
        <button
          onClick={() => setToggleDetailPage(false)}
          className="font-bold text-3xl text-palette1 absolute top-4 right-4"
        >
          <FontAwesomeIcon icon={faClose} className="text-palette1" />
        </button>

        {/* Product Image */}
        <figure className="flex items-center justify-center w-full lg:w-2/5 h-3/6 lg:h-4/5">
          <img
            className="max-w-full max-h-full object-contain rounded-3xl"
            src={singleProductDetail.img}
            alt={singleProductDetail.title}
          />
        </figure>

        {/* Product Details */}
        <div className="w-full lg:w-2/4 flex flex-col gap-4 items-center justify-start p-4 lg:p-0">
          <h2 className="text-sm md:text-lg lg:text-xl font-bold w-full mt-4 min-h-12 max-h-32 text-center lg:text-left break-words">
            {singleProductDetail.title}
          </h2>
          <p className="text-xs md:text-sm lg:text-base leading-5 w-full min-h-[150px] h-auto lg:h-5/6 p-2 rounded-xl shadow-inner shadow-palette1 bg-palette3 text-white overflow-y-auto">
            {singleProductDetail.description}
          </p>

          <button
            onClick={addToCart}
            className="px-3 py-2 w-3/4 sm:w-2/3 lg:w-1/2 min-h-[40px] max-h-[50px] text-sm lg:text-base text-palette9 rounded-3xl bg-palette1 shadow-inner shadow-palette1 hover:text-palette1 hover:bg-palette5 flex items-center justify-center transition-all duration-300 ease-in-out"
          >
            Add to cart
          </button>

          {showAddedMessage && (
            <div className="absolute top-2 left-2 text-xs md:text-sm lg:text-lg font-bold shadow-inner shadow-palette1 bg-orange-600 p-2 rounded-2xl text-white w-36">
              Product Added to Cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
