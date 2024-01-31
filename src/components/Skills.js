import { Code, CodeSlash, Skill ,Database} from "react-bootstrap-icons";
import ml from "../assets/Machine.jpg";

const Skills = () => {
  const styles = {
    paddingTop: "5%",
    // backgroundColor:'#A7ECEE'
    backgroundColor:'#90b2d7'
  
  };

  const imgStyles = {
    width: "4%",
    height: "4%",
  };
  return (
    <>
      <section id="skills" style={styles}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="text-center ">
                <CodeSlash />
              </h1>
              <h2 className="text-center" style={{textDecoration:'underline'}}>Skills and Technologies</h2>
              <h5 className="text-center mt-3 fst-italic">
                Elevating Ideas, Crafting Experiences: Explore My Diverse
                Portfolio of Creative Ventures
              </h5>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mt-sm-3 mb-5">
              <div className="card">
                <div className="card-header fw-bold">Languages</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                      style={imgStyles}
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                      style={imgStyles}
                    />
                    <span className="ps-3">C/C++</span>
                  </li>
                  <li className="list-group-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      style={imgStyles}
                    />
                    <span className="ps-3">JavaScript</span>
                  </li>
                  
                  <li className="list-group-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      style={imgStyles}
                    />
                    <span className="ps-3">Python</span>
                  </li>
                  <li className="list-group-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      style={imgStyles}
                    />
                    <span className="ps-3">HTML</span>
                  </li>
                  <li className="list-group-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      style={imgStyles}
                    />

                    <span className="ps-3">CSS</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-sm-3 mb-5">
              <div className="card ">
                <div className="card-header fw-bold">Technologies</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      style={imgStyles}
                    />
                    <span className="ps-3">ReactJS</span>
                  </li>
                  <li className="list-group-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                      style={imgStyles}
                    />
                    <span className="ps-3">Bootstrap 5</span>
                  </li>
                  <li className="list-group-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                      style={imgStyles}
                    />

                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                      style={imgStyles}
                    />

                    <span className="ps-3">PowerBI, Tableau</span>
                  </li>

                  <li className="list-group-item">
                    <img src={ml} style={imgStyles} />
                    <span className="ps-3">Machine learning</span>
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

export default Skills;
