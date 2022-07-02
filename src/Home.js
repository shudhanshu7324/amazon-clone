import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/July/deals_3000x1200._CB634379291_.jpg"
          alt="home-img"
          className="home__image"
        />

        <div className="home__row">
          {/* product */}
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          {/* product */}
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
