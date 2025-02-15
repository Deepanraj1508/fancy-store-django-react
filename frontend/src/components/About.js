import React from "react";
import "./styles/About.css"; 
import image from "./Assets/about-left-image.jpg";


const About = () => {
  return (
    <>
      {/* Main Banner Area */}
      <div className="page-heading about-page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>About Our Shop</h2>
                <span>Awesome, clean &amp; creative HTML5 Template</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Area */}
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src={image} alt="About Us" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <h4>About Us</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod kon tempor incididunt ut labore.
                </span>
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiuski smod kon tempor incididunt ut labore.
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod kon tempor incididunt ut labore et dolore magna
                  aliqua ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
