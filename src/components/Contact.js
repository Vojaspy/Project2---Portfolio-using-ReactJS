import { PersonAdd } from "react-bootstrap-icons";

const Contact = () => {
  const styles = {
    paddingTop: "5%",
    backgroundColor: "#EAE0DA",
    // backgroundColor:'#D8B5FF '
    // backgroundColor:'#c4b4f3'
  };
  return (
    <>
      <section id="contact" style={styles}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="text-center">
                <PersonAdd />
              </h1>
              <h1
                className="text-center"
                style={{ textDecoration: "underline" }}
              >
                Get in touch
              </h1>
              <h5 className="text-center fst-italic">Say Hello</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-12 col-md-11 col-lg-4 offset-md-1 offset-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119065.02905823676!2d78.99010825797474!3d21.161065901994068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1706713731386!5m2!1sen!2sin"
                width="800"
                height="600"
                style={{border:"0"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 col-md-12 col-lg-4 offset-lg-3">
              <div>
                <h1>Any message here</h1>
              </div>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputName"
                  />
                </div>
                <div>
                  <label for="exampleInputMessage" className="form-label">
                    Any message?
                  </label>
                  <textarea
                    placeholder="message here"
                    className="form-control"
                    style={{ width: "480px", height: "200px" }}
                    id="exampleInputMessage"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-success mt-2 mb-5"
                    style={{ width: "480px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer className="mt-3 pb-1">
          <p className="text-center">
            &copy; 2021-2025 Vojas Gonnade | All rights reserved
          </p>
        </footer>
      </section>
    </>
  );
};

export default Contact;
