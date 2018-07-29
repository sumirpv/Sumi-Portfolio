import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="footer-container">
        <div className="row">
          <div className="col-md-4 pt-4 footerSec">
            <h4 className="footerTitle">Our Mission</h4><hr/>
            <p className="At-TeamX">
              At TeamX, we strive to give our clients the best
              experience possible.  We take pride in our comprehensive
              approach to development and design and place a strong
              emphasis on communication throughout the entire process.
              Your vision will always come first; we'll just help you
              get there.
            </p>
          </div>
          <div className="col-md-3 offset-md-2 pt-4 footerSec">
            <h4 className="footerTitle">Resources</h4><hr/>
            <div className="resources"><a href="#clients">Services</a></div>
            <div className="resources"><a href="#services">About</a></div>
            <div className="resources"><a href="#work">Clients</a></div>
            <div className="resources"><a href="#">Careers</a></div>
            <div className="resources"><a href="#">Projects</a></div>
          </div>
          <div className="col-md-3 pt-4 footerSec">
            <h4 className="footerTitle">Connect</h4><hr/>
            <div className="contactInfo">info@theteamx.com</div>
            <div className="contactInfo">555-999-0000</div>
            <p>
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-github-square"></i>
              </a>
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
