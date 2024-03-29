import ReactTyped from "react-typed";
import ronaldo from "./testimage.webp";
import { Github, Envelope, Instagram, Linkedin,Link45deg } from "react-bootstrap-icons";
// import styles from '../components/newStyles.css';
import resume from '../assets/VojasGonnade.pdf';

const Home = () => {
  const textStyles = {
    textDecoration: "underline",
    textDecorationColor: "#33ccff",
  };

  const typeStyles = {
    justifyContent: "center",
    alignItems: "center",
    // fontFamily:'Noto Sans',
  };

  const styles = {
    paddingTop: "5%",
    height: "100vh",
    width: "100%",
    // backgroundColor:'#8EA7E9'
    // backgroundColor:'#48b0af'
    backgroundColor:'#78b1ca'
  };

  return (
    <>
      <section id="home" style={styles}>
        <div className="container-fluid" style={{ marginTop: '7%' }}>
          <div className="row d-flex align-items-center justify-content-center text-lg-center" style={typeStyles}>
            <div className="col-12 col-md-7 col-lg-5  mt-5 text-center">
              <img src={ronaldo} alt="cr7" className="sm-mt-5 img-fluid" />
            </div>
            <div className="col-12 col-md-5 col-lg-5 mt-5 text-center">
              <h1 className="mt-2 fst-italic">Vojas Gonnade</h1>
              <h3>
                I am a {""}
                <ReactTyped
                  style={textStyles}
                  strings={["Web Developer", "Coder", "Designer", "Footballer"]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                  showCursor={true}
                  className="fw-bolder"
                />
              </h3>
              <div>
                <ul className="d-flex justify-content-center">
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
              <a href={resume} download="VojasGonnadeRESUME" target="_blank">
                <button style={{backgroundColor:'#2b5a6e',color:'white'}}>Resume <Link45deg/></button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
