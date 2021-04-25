import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="navbar-dark bg-dark p-4 pb-2 align-items-center justify-content-center">
      <div className="text-success text-center fs-5 pb-1">
        Created by team at FastDev.
      </div>
      <div className="p-0 m-0 flex-column flex-md-row d-flex align-items-center justify-content-center fs-6">
        <a
          className="text-success mx-2 text-decoration-none"
          href="https://www.linkedin.com/in/sombuddha-chakravarty-9482b5131/"
        >
          Sombuddha Chakravarthy
        </a>
        <a
          className="text-success mx-2 text-decoration-none"
          href="https://www.linkedin.com/in/harshit--shukla/"
        >
          Harshit Shukla
        </a>
        <a
          className="text-success mx-2 text-decoration-none"
          href="https://www.linkedin.com/in/tejas-deshpande-a14b351a7/"
        >
          Tejas Deshpande
        </a>
        <a
          className="text-success mx-2 text-decoration-none"
          href="https://www.linkedin.com/in/abhijit-kumar-983546170/"
        >
          Abhijit Kumar
        </a>
      </div>
      <div className="p-0 m-0 flex-column flex-md-row d-flex align-items-center justify-content-center fs-6">
        <Link to="/disclaimer" className="lead text-success">
          Disclaimer
        </Link>
      </div>
      <br />
      <div className="text-success text-center mt-0 pt-0">© 2021 FastAid</div>
    </div>
  );
};

export default Footer;
