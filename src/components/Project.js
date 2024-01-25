import React, { useState } from "react";
import { Card } from "react-bootstrap"; // Assuming you have React Bootstrap installed

import weatherAppLogo from "../assets/Weatherapp-logo.png";
import { Laptop } from "react-bootstrap-icons";

const Project = () => {
  const styles = {
    paddingTop: "5%",
    height: "100vh",
    width: "100%",
  };

  const cardStyle = {
    textDecoration: "none",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section id="project" style={styles}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="text-center">
                <Laptop />
              </h1>
              <h1 className="text-center">Projects</h1>
              <h5 className="text-center">Check some of my recent works</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 offset-lg-2 offset-md-2">
              <div
                className="card"
                style={{ width: "18rem" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={weatherAppLogo}
                  className={`card-img-top ${isHovered ? 'hovered' : ''}`}
                  alt="Weather App"
                />
                <div className="card-body">
                  <h5 className="card-title ">Weather Web APP</h5>
                  <p className={`card-text ${isHovered ? '' : 'd-none'}`}>
                    This Weather App provides real-time weather information for
                    a given location. It fetches data from a reliable weather
                    API and presents it in a user-friendly interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 offset-lg-2 offset-md-2">
              <div
                className="card"
                style={{ width: "18rem" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={weatherAppLogo}
                  className={`card-img-top ${isHovered ? 'hovered' : ''}`}
                  alt="Weather App"
                />
                <div className="card-body">
                  <h5 className="card-title ">This Portfolio</h5>
                  <p className={`card-text ${isHovered ? '' : 'd-none'}`}>
                  This portfolio showcases my skills, projects, and experiences in the field of programming. It is designed to provide an overview of my expertise and serve as a platform to demonstrate my work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
