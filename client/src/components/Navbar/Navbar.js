import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <section className="sticky-top">
      <nav  className="navbar navbar-light bg-white navbar-expand-lg" >
      <a className="navbar-brand" href="/">
        <img className="teamLogo"
          src="../../../images/logos/teamX_Logo.png" />
      </a>
        <button className="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#navToggle"
          aria-controls="navToggle" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navToggle">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-center">

            <li className="options">
              <a className="nav-link" href="/services">

              Services

              </a>
            </li>

            <li className="options">
              <a className="nav-link" href="/#client" >

              Clients

              </a>
            </li>

            <li className="options">
              <a className="nav-link" href="/work">

              Projects

              </a>
            </li>

            <li className="options">
              <a className="nav-link" href="/about">

              About

              </a>
            </li>

            <li className="options Rectangle-4">
              <a id="Contact" className="nav-link" href="/#contact">

              Contact

              </a>
            </li>

          </ul>

        </div>
      </nav>
    </section>
  );
};

export default Navbar;
