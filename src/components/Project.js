import { Cpu } from "react-bootstrap-icons";
import weatherLogo from "../assets/Weatherapp-logo.png";
import Sitegenie from "../assets/Sitegenie.jpg";

const Project = () => {
  const styles = {
    paddingTop: "5%",
    // backgroundColor:'#FFEEBB'
    backgroundColor:'#abb2e6'
  };

  const cardStyle = {
    textDecoration: "none",
  };

  return (
    <>
      <section id="project" style={styles}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="text-center">
                <Cpu />
              </h1>
              <h1 className="text-center" style={{textDecoration:'underline'}}>Projects</h1>
              <h5 className="text-center fst-italic">Take a look at my recent works</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-4">
          <div className="row ">
            <div className="col-9 col-md-5 col-lg-3 offset-sm-3 offset-lg-1 offset-md-0">
              <div className="card mb-3" style={{ width: "20rem" }}>
                <img src={weatherLogo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Weather Web APP</h5>
                  <p className="card-text">
                    This Weather App provides real-time weather information for
                    a given location. It fetches data from a reliable weather
                    API and presents it in a user-friendly interface. Users can
                    quickly check the current weather conditions, temperature,
                    wind speed,visibility and pressure for any desired location.
                  </p>
                  <a
                    href="https://github.com/Vojaspy/Project1---Weather-APP"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    To Github
                  </a>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-5 col-lg-3 offset-sm-3 offset-lg-1 offset-md-1 mt-sm-2 mt-lg-0">
              <div className="card mb-3" style={{ width: "20rem" }}>
                <img src={weatherLogo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">This Portfolio</h5>
                  <p className="card-text">
                    Welcome to my portfolio! I am Vojas Gonnade, passionate about web developement
                    and problem solving. This portfolio showcases my skills, projects, and
                    experiences in the field. From innovative projects to a
                    diverse skill set, explore the various facets of my journey.
                  </p>
                  <a
                    href="https://github.com/Vojaspy/Project2---Portfolio-using-ReactJS"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    To Github
                  </a>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-5 col-lg-3 offset-sm-3 offset-lg-1 offset-md-0 mt-sm-2 mt-lg-0">
              <div className="card mb-3" style={{ width: "20rem" }}>
                <img src={Sitegenie} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">SiteGenie</h5>
                  <p className="card-text">
                    Tired of providing the same answers to your questions over
                    and over again? Introducing SiteGenie Your Web-Based AI
                    Chatbot. Elevate your online presence with the power of
                    artificial intelligence at your fingertips. SiteGenie is not
                    just a chatbot; it's your virtual assistant for creating
                    engaging and personalized interactions on your website.
                  </p>
                  <a
                    href="https://github.com/vedanti-u/site-frontend"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    To Github
                  </a>
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
