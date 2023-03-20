import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://m.media-amazon.com/images/I/61l4i7aoY2L._SX3000_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home_row">

      <Product 
        id="784603"
        title="Boult Audio Newly Launched X10 True Wireless in Ear Earbuds "
        price={1299}
        rating={5}
        image="https://m.media-amazon.com/images/I/31Ox8rLtIpL._AC_SR400,600_.jpg"
        />
      <Product 
        id="384603"
        title="Titan Analog Men's Watch (Dial Colored Strap)"
        price={1299}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41zElMkV0lL._AC_SX368_.jpg"
        />
        </div>
        <div className="home_row">
        <Product 
        id="484603"
        title="Centrino Mens Formal Shoes"
        price={1299}
        rating={5}
        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61AjKQSFMhL._UL1500_.jpg"
        />
        <Product 
        id="584603"
        title="Manyavar Kurta Jacket Set for Men"
        price={1299}
        rating={5}
        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71PZt82qYAL._AC_AA360_.jpg"
        />
        <Product 
        id="684603"
        title="Lenovo Casual Laptop Backpack B210 39.62 cm (15.6)"
        price={1299}
        rating={5}
        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71OboCuNnAL._AC_UL480_FMwebp_QL65_.jpg"
        />
        </div>
        <div className="home_row">
        <Product 
        id="884603"
        title="Lenovo V15 (2021) Intel Core i3 10th Gen 39.63cm (15.6) FHD Thin and Light Laptop (4GB RAM/ 256GB SSD/ Windows 10 Home/ Iron Grey/ 1.85 kg), 82C500XXIH"
        price={1299}
        rating={5}
        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41ahkQ1wRdS._SY300_SX300_QL70_FMwebp_.jpg"
        />
        </div>
      
      {/* Product */}
    </div>
  );
}

export default Home;