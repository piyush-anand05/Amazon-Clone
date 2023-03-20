import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Varisu-Tamil/400x39-SWM_NP._CB614439071_.jpg"
          alt=""
        />
        {basket?.length === 0 /* ternary operator */ ? (
          <div>
            <h2>Your Amazon Cart is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

            {/* list out all the Checkout Products  */}
          </div>
        )}
      </div>
      {basket.length > 0 && 
       
        <div className="checkout_right">
          <Subtotal />
        </div>
      }
    </div>
  );
}

//react-currency-format
export default Checkout;
