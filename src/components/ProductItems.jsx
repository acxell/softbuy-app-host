import React, { useState } from "react";
import { cartAction } from "../redux/actions/cart";
import { useDispatch } from "react-redux";

function ProductItems({ val }) {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

  const addCart = () => {
    dispatch(cartAction(val.id, 1));
    dispatch({ type: "DRAWER", payload: true });
  };
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          aria-hidden="true"
          className={`w-5 h-5 ${
            i <= fullStars
              ? "text-yellow-300"
              : i === fullStars + 1 && hasHalfStar
              ? "text-yellow-300/50"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{`Star ${i}`}</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="mt-12 mx-2">
      <div className="w-72 h-[500px] max-w-sm rounded-lg shadow light:shadow-slate-500 m-4 hover:border">
       <a className="flex justify-center bg-white rounded-lg mb-10">
          {!imageLoaded && (
            <div className="animate-pulse bg-gray-200 light:bg-gray-700 w-full h-64 rounded-t-lg"></div>
          )}
          <img
            className={`p-8 rounded-t-lg h-64 transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={val?.image}
            alt={val?.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </a>
        <div className="px-5 pb-5">
          <a>
            <h5 className="text-base font-semibold tracking-tight ">
              {val?.title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5">
            {renderStars(val?.rating?.rate)}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded light:bg-green-200 light:text-green-800 ml-3">
              {val?.rating?.rate?.toFixed(1)} ({val?.rating?.count})
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center mx-10 justify-between relative bottom-20">
        <span className="text-xl font-poppins ">{val?.price}$</span>
        <a
          className="text-black bg-custom-green hover:bg-custom-light-green focus:ring-2 focus:outline-none focus:bg-custom-light-green font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
          onClick={() => addCart()}
        >
          Add to cart
        </a>
      </div>
    </div>
  );
}

export default ProductItems;
