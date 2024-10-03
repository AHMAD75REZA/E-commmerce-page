import React from "react";
import heroImage  from '../assets/images/Ahm.jpg';

function Hero() {
    return (
        <section className="hero">
            <div className="container3">
                <div className="hero-image">
                    <img src={heroImage} alt="Hero Banner"/>
                </div> 
                <div className="hero-content"> 
                    <h1 className="hero-title">
                       ---- Stylish ---- <br /> Male Clothes
                    </h1>
                    <p>30% off Summer Vacation</p>
                    <button className="btn">SHOP NOW</button>
                </div>
            </div>
        </section>
    );
}
export default Hero;