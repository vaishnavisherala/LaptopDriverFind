import React from "react";
import "./Accessories.css";
// import image from "../images/image.png"

export default function Accessories() {

  const accessories = [
    {
      title: "Mice",
      price: "₹385",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTf0_mo7ibCGlw1QL35rwmIy0ofuswHQTK4wsFyNfR1oaHomiuEcoc3XzMqPaLdMPNKfY9W55JEmPHXNvJMU-vX08_gyqm7l2r8eU2D3oDase4hb6JNcCJHMw"
    },
    {
      title: "Batteries, Chargers & Adapters",
      price: "₹1,150",
      img: "./src/images/image.png"
    },
    {
      title: "Gaming Accessories",
      price: "₹1,090",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbqWsR87MNa5QsJCzHukqE7TwRIpieg_gxJ_8y7nNL5tMx2ahqzdQxGjdQABUzRfxtiFnu3J-sehmCXppDnWz7ehVeHgYzjXVnb4tFRZ96FzYEmoRjRHohkA"
    },
    {
      title: "Speakers & Headphones",
      price: "₹499",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUYWn0nx9IJ-x4XNFNOMAY37NnGU9N4ctEKWK_M9pKYCkavd-095X5SBHBK7YbC5IrRdkdhcM0JW6J429Hc2AvgWvJgQGm7rE4aXrUcnk6jT1kRRO_wChh-w"
    },
    {
      title: "Memory & Storage",
      price: "₹650",
      img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07899201.png"
    },
    
  ];

  const handleShop = (itemName: string) => {
    alert(` Successfully Purchased: ${itemName}`);
  };

  return (
    <div className="accessories-container">
      <h2 className="accessories-title">Accessories Range</h2>
      <p className="subtitle">
        Elevate your computing experience with PC peripherals, exceptional mice & keyboards,
        and stay powered anywhere with reliable batteries and chargers.
      </p>

      <div className="accessories-grid">
        {accessories.map((item, index) => (
          <div className="accessory-card" key={index}>
            <div className="image-box">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="content-box">
              <h3>{item.title}</h3>
              <p className="price">Starting from <b>{item.price}</b></p>

              <button className="shop-btn" onClick={() => handleShop(item.title)}>
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
