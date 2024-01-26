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
            <h1>This is projects</h1>
            <h5>Tagliin here</h5>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Project;
