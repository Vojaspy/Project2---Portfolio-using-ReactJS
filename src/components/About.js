import ReactTyped from "react-typed";
import ronaldo from './ronaldo.png'

const About = () => {

  const styles = {
    textDecoration : 'underline',
    textDecorationColor : '#33ccff',
    fontFamily: 'Noto Sans',
  };

  const typeStyles = {
    justifyContent: 'center',
    alignItems: 'center',
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex" style={typeStyles}>
          <div className="col-10 col-md-6 col-lg-4 offset-lg-2">
            <h1 className="mt-2">
              Vojas Gonnade
            </h1>
            <h3>
              I am a {''}
            <ReactTyped 
            style={styles}
            strings={['Web Developer','Coder','Designer','Footballer']}
            typeSpeed={100}
            backSpeed={50}
            loop
            showCursor={true}
            />
            </h3>
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <img src={ronaldo} alt="cr7" className="mt-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
