import React from "react";
import "../assets/favicon.ico";
import "../assets/css/themify-icons.css";
import "../assets/css/bootstrap.css";
import "../assets/css/virtual.css";
import "../assets/css/topbar.virtual.css";
import "../assets/vendor/animate/animate.css";
import "../assets/vendor/owl-carousel/owl.carousel.css";
import "../assets/vendor/nice-select/css/nice-select.css";
import "../assets/vendor/fancybox/css/jquery.fancybox.min.css";

const Contact = () => {
  return (
    <div className="vg-page page-contact" id="contact">
      <div className="container-fluid">
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead">Contact</div>
        </div>
        <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
        <div className="row py-5 flex align-items-center justify-content-lg-center">
          <div className="col-lg-5">
            <form className="vg-contact-form">
              <div className="form-row">
                <div className="col-12 mt-3 wow fadeInUp">
                  <input
                    className="form-control"
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input
                    className="form-control"
                    type="text"
                    name="Email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input
                    className="form-control"
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12 mt-3 wow fadeInUp">
                  <textarea
                    className="form-control"
                    name="Message"
                    rows="6"
                    placeholder="Enter message here.."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-theme mt-3 wow fadeInUp ml-1"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
