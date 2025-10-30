import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCartAction } from "../redux/actions/cart";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [promoCode, setPromoCode] = useState("");
  const [isMember, setIsMember] = useState(false);

  const deleteItem = (id) => {
    dispatch(removeCartAction(id));
  };

  // Calculate subtotal
  let subtotal = 0;
  cartItems.map((product) => {
    subtotal += product.qty * product.price;
  });

  const calculateDiscount = (subtotal, isMember, promoCode) => {
    let totalDiscount = 0;

    if (subtotal > 1000) {
      totalDiscount += 0.1;
    }

    if (isMember) {
      totalDiscount += 0.05;
    }

    if (promoCode.toUpperCase() === "DISKON20") {
      totalDiscount += 0.2;
    }

    return Math.min(totalDiscount, 0.5);
  };

  const discount = calculateDiscount(subtotal, isMember, promoCode);
  const discountAmount = subtotal * discount;
  const finalTotal = subtotal - discountAmount;

  return (
    <div>
      <div className="fixed w-3/4 max-w-md p-4 border border-gray-500 rounded-lg shadow sm:p-8 right-2 top-24 bg-custom-white text-custom-light light:text-custom-white light:bg-custom-light overflow-y-auto h-4/6 z-20">
        <div className="flex items-center justify-between mb-4 ">
          <h5 className="text-xl font-bold leading-none select-none">
            Shopping Cart
          </h5>
          <div className="flex">
            <a className="self-center cursor-pointer">
              <AiOutlineClose
                onClick={() => dispatch({ type: "DRAWER", payload: false })}
              />
            </a>
          </div>
        </div>

        {cartItems?.map((cart, i) => (
          <div className="flow-root" key={i}>
            <ul
              role="list"
              className="divide-y divide-gray-200 light:divide-gray-800"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-16 h-16 bg-black" src={cart?.image} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium ">
                      {cart?.title} ({cart?.qty})
                    </p>
                    <p className="text-sm truncate text-gray-400 ">
                      {cart?.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold ">
                    {cart?.price}$
                  </div>
                  <div
                    className="underline text-red-500 cursor-pointer"
                    onClick={() => deleteItem(cart.id)}
                  >
                    Delete
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
        {/* Discount section */}
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="space-y-4">
            {/* Member checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="member"
                checked={isMember}
                onChange={(e) => setIsMember(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <label
                htmlFor="member"
                className="ml-2 text-sm text-gray-600 light:text-gray-300"
              >
                Member discount (5% off)
              </label>
            </div>

            {/* Promo code input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            {/* Price breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <p>Discount ({(discount * 100).toFixed(0)}%)</p>
                  <p>-${discountAmount.toFixed(2)}</p>
                </div>
              )}

              <div className="flex justify-between text-base font-medium text-gray-900 light:text-custom-white">
                <p>Total</p>
                <p>${finalTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>

          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-custom-green px-6 py-3 text-base font-medium text-custom-light shadow-sm hover:bg-custom-light-green"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
