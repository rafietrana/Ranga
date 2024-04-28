import React from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
    
      <Fade>
      <Helmet>
          <title>Ranga-404</title>
        </Helmet>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center">
            <img src="https://i.ibb.co/KGfkypW/404.gif" alt="gift" />
            <Link to="/">
              <button className="btn btn-neutral">Back to home</button>
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ErrorPage;
