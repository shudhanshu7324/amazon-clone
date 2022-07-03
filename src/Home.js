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
          <Product
            id="456"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={14.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id="345454"
            title="Zebronics ZEB-FIT280CH Smart Watch with Screen Size 3.55cm 12 Sports Modes, IP68 Waterproof, Heart Rate, BP, SpO2, Caller ID"
            price={120.49}
            image="https://m.media-amazon.com/images/I/61VxuGKibQL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="5467"
            title="Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 5nm Processor | 6000mAh Battery |"
            price={450}
            image="https://m.media-amazon.com/images/I/81I3w4J6yjL._SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="6567"
            title="Artis BT600 Wireless Bluetooth Trolley Speaker with 7 Colours LED Lights (80W RMS Output)"
            price={450.89}
            image="https://m.media-amazon.com/images/I/81yUSEM4cnL._SX679_.jpg"
            rating={4}
          />

          <Product
            id="4556778"
            title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip, 16GB RAM, 512GB SSD) - Space Grey"
            price={1800.99}
            image="https://m.media-amazon.com/images/I/61vFO3R5UNL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="456785"
            title="Martucci 15.6 inch 30 L Casual Waterproof Laptop Backpack/Office Bag/ Unisex Travel Backpack(Black)"
            price={130.59}
            image="https://m.media-amazon.com/images/I/71i3dEmHwqL._SX679_.jpg"
            rating={3}
          />
          <Product
            id="234568734"
            title="Adidas Men's Duramo 9 Running Shoes"
            price={219.0}
            image="https://m.media-amazon.com/images/I/51QUw4yRCkL._UY695_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="5344567"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={980.99}
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
