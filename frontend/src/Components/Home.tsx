import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div>

    <div className="home-wrapper">
      <h1 className="home-title">Welcome to Customer Support</h1>
      <p className="home-subtitle">How can we help?</p>

      <div className="home-card-container">

        {/* Software & Drivers */}
        <div className="support-card">
          <div className="image-wrapper">
            <Link to="/softwaredriver"> 
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Software & Drivers"
            />
            </Link>
          </div>
         <div className="card-info">
            <span className="card-title">Software and Drivers</span>
            <span className="card-arrow">➜</span>
          </div>
        </div>

        {/* Printer Support */}
        <div className="support-card">
          <div className="image-wrapper">
            <img
            src="./src/images/image1.jpg"
            alt="Printer Support"
            />
          </div>
          <div className="card-info">
            <span className="card-title">Printer Support</span>
            <span className="card-arrow">➜</span>
          </div>
        </div>

        {/* Computer Support */}
        <div className="support-card">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              alt="Computer Support"
            />
          </div>
          <div className="card-info">
            <span className="card-title">Computer Support</span>
            <span className="card-arrow">➜</span>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Home;
