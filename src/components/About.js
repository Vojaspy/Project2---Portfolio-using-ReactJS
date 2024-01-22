import ReactTyped from "react-typed";
import ronaldo from "./ronaldo.png";
import Router from "react-router-dom";

const About = () => {
  const textStyles = {
    textDecoration: "underline",
    textDecorationColor: "#33ccff",
    fontFamily: "Noto Sans",
  };

  const typeStyles = {
    justifyContent: "center",
    alignItems: "center",
  };

  const styles = {
    paddingTop : '5%',
    height:'100vh',
    width:'100%',
  }

  return (
    <>
      <section id="about" style={styles}>
        <div className="container-fluid">
          <div className="row d-flex" style={typeStyles}>
            <div className="col-6 col-md-6 col-lg-4 offset-lg-2">
              <h1 className="mt-2">Vojas Gonnade</h1>
              <h3>
                I am a {""}
                <ReactTyped
                  style={textStyles}
                  strings={["Web Developer", "Coder", "Designer", "Footballer"]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                  showCursor={true}
                />
              </h3>
            </div>
            <div className="col-6 col-md-6 col-lg-6">
              <img src={ronaldo} alt="cr7" className="mt-3 sm-mt-5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
