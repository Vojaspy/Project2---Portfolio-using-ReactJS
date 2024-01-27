import {Braces} from  'react-bootstrap-icons'
const About = () => {
  const styles = {
    paddingTop: "5%",
  };

  return (
    <>
      <section id="about" className="mb-5" style={styles}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className='text-center'>
                <Braces/>
              </h1>
              <h1 className="text-center">About Me</h1>
              <h4 className="text-center">
                Hi i am Vojas Gonnade, I am a Web developer and a coding
                Enthusiast
              </h4>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row pt-1">
            <div className="col-12 mb-3">
              <h1>Education</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-4 border rounded-5">
              <h2>Shri Ramdeobaba College of Engineering and Management</h2>
              <h5>
                BTech in Computer Science and Engineering with Specialization in
                Data Science
              </h5>
              <h5>CGPA: 7.97</h5>
            </div>
            <div className="col-12 col-md-6 col-lg-4 border rounded-5">
              <h2>Dinanath High School and Junior College</h2>
              <h5>HSC</h5>
              <h5>Percentage: 93.8%</h5>
            </div>
            <div className="col-12 col-md-6 col-lg-4 border rounded-5">
              <h2>Bhavan's B.P Vidya Mandir</h2>
              <h5>SSC</h5>
              <h5>Percentage: 92.6%</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-3 mb-5">
          <div className="row">
            <div className="col mb-3 mt-3">
              <h1>My coding profiles</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-4 col-lg-3 border rounded-3">
              <a
                href="https://www.hackerrank.com/profile/vojasgonnade07"
                target="_blank"
                style={{ textDecoration: "none",color:'black' }}
              >
                <h2 className="ps-2 pt-2">Hackerrank</h2>
                <h5 className="ps-2 pb-2">5★ C++ | 2★ Python</h5>
              </a>
            </div>
            <div className="col-4 col-md-4 col-lg-3 offset-lg-1 border rounded-3">
              <a
                href="https://www.codechef.com/users/vojasgonnade"
                target="_blank"
                style={{ textDecoration: "none",color:'black' }}
              >
                <h2 className="ps-2 pt-2">codechef</h2>
                <h5 className="ps-2 pb-2">Current Highest Rating: 1185</h5>
              </a>
            </div>
            <div className="col-4 col-md-4 col-lg-3 offset-lg-1 border rounded-3">
              <a
                href="https://leetcode.com/Vojas_Gonnade/"
                target="_blank"
                style={{ textDecoration: "none",color:'black' }}
              >
                <h2 className="ps-2 pt-2">Leetcode</h2>
                <h5 className="ps-2 pb-2"></h5>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
