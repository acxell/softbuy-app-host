import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    dispatch({ type: "DRAWER", payload: !isCartOpen });
    setIsCartOpen(!isCartOpen);
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-x-hidden">
      <section className="relative mx-auto my-12">
        <nav className="flex justify-between  w-screen fixed z-50 top-0 bg-custom-white light:bg-custom-light ">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <a className="font-ibmplex text-lg" href="#">
              SOFTBUY
            </a>

            <ul className="hidden md:flex flex-1 justify-center font-poppins space-x-8 mt-1">
              <li>
                <a className="hover:text-green-600" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-600" href="#">
                  Collections
                </a>
              </li>
              <li>
                <a className="hover:text-gray-600" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="hidden xl:flex items-center space-x-5 ">
              {/* Shopping Cart */}
              <a
                className="flex items-center hover:text-gray-600 cursor-pointer"
                onClick={handleCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems && cartItems?.length <= 0 ? (
                  <span className="flex absolute -mt-5 ml-4"></span>
                ) : (
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 justify-center">
                      <span className="text-white self-center text-[8px]">
                        {cartItems?.length}
                      </span>
                    </span>
                  </span>
                )}
              </a>
            </div>
          </div>
          {/*Shopping Cart Responsive*/}
          <a
            className="xl:hidden flex mr-6 items-center cursor-pointer"
            onClick={handleCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItems && cartItems?.length <= 0 ? (
              <span className="flex absolute -mt-5 ml-4"></span>
            ) : (
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 justify-center">
                  <span className="text-white self-center text-[8px]">
                    {cartItems?.length}
                  </span>
                </span>
              </span>
            )}
          </a>
          {/*Responsive Menu Icon*/}
          <button
            className="navbar-burger self-center mr-12"
            onClick={handleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 z-40 ${isOpen ? "block" : "hidden"}`}>
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
            ></div>
            <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-custom-white overflow-y-auto">
              <div className="flex items-center mb-8">
                <button
                  className="navbar-close"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul className="font-poppins space-y-6">
                  <li>
                    <a
                      className="block text-custom-dark hover:text-green-600"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-custom-dark hover:text-gray-600"
                      href="#"
                    >
                      Collections
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-custom-dark hover:text-gray-600"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <Categories></Categories>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
