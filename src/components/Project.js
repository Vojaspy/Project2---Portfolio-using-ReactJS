import weatherAppLogo from "../assets/Weatherapp-logo.png";

const Project = () => {
  const styles = {
    paddingTop: "5%",
    height: "100vh",
    width: "100%",
  };

  return (
    <>
      <section id="project" style={styles}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Projects</h1>
              <h3 className="text-center">Check some of my recent works</h3>
            </div>
          </div>
        </div>

        
      </section>
      {/* <div className="col-12 col-md-6">
                <a
                  href="https://github.com/Vojaspy/Project1---Weather-APP"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="card"
                    style={{ width: "18rem", cursor: "pointer" }}
                  >
                    <img
                      src={weatherAppLogo}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        This Weather App provides real-time weather information
                        for a given location. It fetches data from a reliable
                        weather API and presents it in a user-friendly
                        interface. Users can quickly check the current weather
                        conditions, temperature, wind speed, visibility, and
                        pressure for any desired location.
                      </p>
                    </div>
                  </div>
                </a>
              </div> */}
    </>
  );
};

export default Project;
