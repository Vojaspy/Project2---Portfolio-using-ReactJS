import ReactTyped from "react-typed";
import ronaldo from "./testimage.webp";
import { Github, Envelope, Instagram, Linkedin } from "react-bootstrap-icons";

const Home = () => {
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
    paddingTop: "5%",
    height: "100vh",
    width: "100%",
  };

  return (
    <>
      <section id="home" style={styles}>
        <div className="container-fluid" style={{marginTop:'7%'}}>
          <div className="row d-flex align-items-center" style={typeStyles}>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mt-5 ">
              <img src={ronaldo} alt="cr7" className="sm-mt-5" style={{width:'500px'}}/>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mt-5">
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
              <div>
                <ul className="d-flex">
                  <li style={{ listStyleType: "none", width: "40px" }}>
                    <a
                      href="https://github.com/Vojaspy"
                      className="link-dark"
                      style={{ fontSize: "25px" }}
                      target="_blank"
                    >
                      <Github />
                    </a>
                  </li>
                  <li style={{ listStyleType: "none", width: "40px" }}>
                    <a
                      href="mailto:vojasgonnade07@gmail.com"
                      className="link-dark"
                      style={{ fontSize: "25px" }}
                      target="_blank"
                    >
                      <Envelope />
                    </a>
                  </li>
                  <li style={{ listStyleType: "none", width: "40px" }}>
                    <a
                      href="https://www.linkedin.com/in/vojas-gonnade-57523522a/"
                      className="link-dark"
                      style={{ fontSize: "25px" }}
                      target="_blank"
                    >
                      <Linkedin />
                    </a>
                  </li>
                  <li style={{ listStyleType: "none", width: "40px" }}>
                    <a
                      href="https://www.instagram.com/vojas.gonnade"
                      className="link-dark"
                      style={{ fontSize: "25px" }}
                      target="_blank"
                    >
                      <Instagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;