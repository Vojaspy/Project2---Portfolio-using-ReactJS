import {Braces,BoxArrowUpRight,Link45deg} from  'react-bootstrap-icons'
const About = () => {
  const styles = {
    paddingTop: "5%",
    backgroundColor:'#E8F3D6',
    // backgroundColor:'#73b1c8'
  };

  return (
    <>
      <section id="about" style={styles}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className='text-center'>
                <Braces/>
              </h1>
              <h2 className="text-center" style={{textDecoration:'underline'}}>About Me</h2>
              <h4 className="text-center fst-italic">
                Hi I am Vojas Gonnade, I am a Web developer and a coding
                Enthusiast
              </h4>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row pt-1 d-flex justify-content-evenly">
            <div className="col-12 mb-lg-3">
              <h2 style={{textDecoration:'underline'}} className='fst-italic'>Education</h2>
            </div>
            <div className="col-12 col-md-4 col-lg-3 border border-2 mt-sm-3 mt-lg-0">
              <h3>Shri Ramdeobaba College of Engineering and Management</h3>
              <h5>
                BTech in Computer Science and Engineering with Specialization in
                Data Science
              </h5>
              <h5>CGPA: 7.97</h5>
            </div>
            <div className="col-12 col-md-4 col-lg-3 border border-2 mt-sm-3 mt-lg-0">
              <h3>Dinanath High School and Junior College</h3>
              <h5>HSC</h5>
              <h5>Percentage: 93.8%</h5>
            </div>
            <div className="col-12 col-md-4 col-lg-3 border border-2 mt-sm-3 mt-lg-0 mb-sm-1">
              <h3>Bhavan's B.P Vidya Mandir</h3>
              <h5>SSC</h5>
              <h5>Percentage: 92.6%</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 col-md-12 col-lg-12 mb-3 mt-3">
              <h2 className='fst-italic' style={{textDecoration:'underline'}}>My coding profiles</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-evenly">
            <div className="col-12 col-md-5 col-lg-3 offset-md-0 mb-5 mb-sm-1 border border-2 mt-sm-3 mt-lg-0">
              <a
                href="https://www.hackerrank.com/profile/vojasgonnade07"
                target="_blank"
                style={{ textDecoration: "none",color:'black' }}
              >
                <h2 className="ps-2 pt-2">Hackerrank <Link45deg/></h2>
                <h5 className="ps-2 pb-2">5★ C++ | 2★ Python</h5>
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-3 offset-md-0 mb-5 mb-sm-1 border border-2 mt-sm-3 mt-lg-0">
              <a
                href="https://www.codechef.com/users/vojasgonnade"
                target="_blank"
                style={{ textDecoration: "none",color:'black' }}
              >
                <h2 className="ps-2 pt-2">codechef <Link45deg/></h2>
                <h5 className="ps-2 pb-2">Current Highest Rating: 1185</h5>
                
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-3 offset-md-0 mb-5 mb-sm-1 border border-2 mt-sm-3 mt-lg-0">
              <a
                href="https://leetcode.com/Vojas_Gonnade/"
                target="_blank"
                style={{ textDecoration: "none",color:'black' }}
              >
                <h2 className="ps-2 pt-2">Leetcode <Link45deg/></h2>
                <h5 className="ps-2 pb-2">10+ questions solved</h5>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
