import { PersonAdd } from "react-bootstrap-icons";

const Contact = () => {
  const styles = {
    paddingTop: "5%",
    height: "100vh",
    width: "100%",
  };
  return (
    <>
      <section id="contact" style={styles}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
                <h1 className="text-center"><PersonAdd/></h1>
              <h1 className="text-center">Get in touch</h1>
              <h5 className="text-center">Tagline</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
