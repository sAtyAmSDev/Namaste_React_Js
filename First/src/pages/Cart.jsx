import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Components/Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState([]);
  const [data, setData] = useState([]);

 // const fullState = useSelector((store) => store);
 // console.log("Redux State:", fullState);
console.log(totalPrice);

  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="mt-5 flex flex-col bg-white/80 lg:w-1/2 mx-auto shadow-sm shadow-gray-400/40 rounded-md p-2 sm:p-4 md:p-6">
      <h1 className="text-2xl font-semibold mb-4 ">Cart</h1>

      <div>
        {cartItems.length == 0 ? (
          <h1 className="text-sm mb-4 text-gray-500 ">
            Add The Book{" "}
          </h1>
        ) : (
          <div className="flex flex-col gap-5 mt-5">
            {cartItems.map((items, index) => {
              const { title, subtitle, id, enumMask, quantity } = items;
              const { subContents } = enumMask;
              const { domain, basePath, qualities, key } =
                enumMask.value.thumbnails[0];
              
              return (
                <div
                  key={index}
                  className=" flex justify-around items-center gap-2 cursor-pointer border-2 border-gray-400/40 rounded-md p-2 text-sm w-full hover:border-orange-500"
                >
                  <img
                    src={`${domain}/${basePath}/${qualities[1]}/${key}`}
                    alt=""
                    className="w-20 h-30 rounded-md "
                  />
                  <div>
                    <h2 className="text-md font-semibold">
                      {title?.english || title?.hindi || "N/A"}
                    </h2>
                    <p>
                      <span className="text-sm text-gray-400">Price:</span>{" "}
                      {quantity * subContents[1]?.amount?.originalAmount ||
                        "N/A"}
                    </p>
                  </div>

                  <div className="flex gap-2 items-center border border-gray-400/50 p-1 rounded-md   ">
                    <button
                      className=" bg-orange-600 text-white  cursor-pointer px-3 py-1 rounded-md "
                    >
                      -
                    </button>
                    <span className=" text-md   font-semibold  ">
                      {quantity || "N/A"}
                    </span>
                    <button
                  
                      className=" bg-orange-600 text-white  cursor-pointer px-3 py-1 rounded-md "
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col gap-2 mt-8">
              <h1 className="text-2xl font-semibold  text-gray-500 ">
                Total Price : {totalPrice}
              </h1>
              <button className="bg-orange-600 text-white  cursor-pointer px-3 py-1 rounded-md ">
                Buy Now
              </button>
              <button
                className="bg-red-500 text-white  cursor-pointer px-3 py-1 rounded-md "
                onClick={handleClearCart}
              >
                Clear All Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
