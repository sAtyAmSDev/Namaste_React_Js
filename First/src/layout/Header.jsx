import { useContext, useState } from "react";
import { Link } from "react-router";
import { MdClose, MdMenu } from "react-icons/md";
import UserContext from "../Components/Utils/UserContext.jsx";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const { logInUser } = useContext(UserContext);

  const fullState = useSelector((store) => store);
  console.log("Redux State:", fullState);

  const cartItems = useSelector((store) => store.cart.item);


  return (
    <div className="header lg:mx-auto lg:w-[1280px] flex items-center h-12 md:h-16 justify-between rounded-b-md  px-5 md:px-10 bg-white/80 shadow-md sticky top-0 z-10">
      <div className="logo">
        <h1 className=" text-3xl font-semibold text-orange-500 ">Gita</h1>
      </div>

      <ul className="hidden sm:flex gap-4 font-semibold text-md text-gray-700">
        <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md ">
          <Link onClick={() => setMenu(false)}>Home</Link>
        </li>
        <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md ">
          <Link onClick={() => setMenu(false)} to="/about">
            About
          </Link>
        </li>
        <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md ">
          <Link onClick={() => setMenu(false)} to="/contact">
            Contact
          </Link>
        </li>
        <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md ">
          <Link onClick={() => setMenu(false)} to="/books">
            Books
          </Link>
        </li>
        <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md  ">
          <Link onClick={() => setMenu(false)} to="/cart" className="relative">
            Cart ({cartItems.length  })
          </Link>
        </li>
        <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md ">
          <Link onClick={() => setMenu(false)} to="/">
            User : {logInUser}
          </Link>
        </li>
      </ul>

      <MdMenu
        className="sm:hidden block text-2xl cursor-pointer "
        onClick={() => setMenu(true)}
      />
      {menu && (
        <ul
          className={
            "flex px-5 left-0 flex-col h-screen w-full gap-4 font-semibold text-md  bg-white absolute z-20 top-0 transition-transform duration-300 transform ease-in-out "
          }
        >
          <MdClose
            className="absolute right-2 mt-5 text-4xl cursor-pointer"
            onClick={() => setMenu(false)}
          />
          <li className=" mt-10 hover:text-orange-500 transform duration-300 else-in-out text-md ">
            <Link onClick={() => setMenu(false)}>Home</Link>
          </li>
          <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md ">
            <Link onClick={() => setMenu(false)} to="/about">
              About
            </Link>
          </li>
          <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md ">
            <Link onClick={() => setMenu(false)} to="/contact">
              Contact
            </Link>
          </li>
          <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md ">
            <Link onClick={() => setMenu(false)} to="/books">
              Books
            </Link>
          </li>
          <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md  ">
            <Link
              onClick={() => setMenu(false)}
              to="/cart"
              className="relative"
            >
              Cart ({cartItems.length  })
            </Link>
          </li>
          <li className=" hover:text-orange-500 transform duration-300 else-in-out text-md ">
            <Link onClick={() => setMenu(false)} to="/">
              User : {logInUser}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
