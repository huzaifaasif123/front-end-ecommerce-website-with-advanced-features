import React, { useContext } from 'react';
import { Context } from './Applayout';

const CartPage = () => {
    const { setIsCartOpen, cart, setCart } = useContext(Context);

    const deleteItem = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    return (
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 absolute top-16 right-0 h-screen bg-palette9 p-4 rounded-l-3xl shadow-inner shadow-palette1">
            <button
                className="text-white mb-4 rounded-3xl p-2 shadow-2xl shadow-palette5 bg-red-600 text-xs sm:text-sm md:text-base lg:text-lg"
                onClick={() => setIsCartOpen(false)}
            >
                CLOSE
            </button>
            <div className="text-palette1">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div
                            key={item.id}
                            className="mb-4 border-b border-black pb-2 text-xs sm:text-sm md:text-base lg:text-lg"
                        >
                            <h2 className="font-bold">{item.title}</h2>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button
                                className="text-red-500 text-xs sm:text-sm md:text-base"
                                onClick={() => deleteItem(item.id)}
                            >
                                Delete item
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-sm md:text-base lg:text-lg">Your cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default CartPage;
