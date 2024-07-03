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
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import PasswordIcon from "@mui/icons-material/Password";
import SchoolIcon from "@mui/icons-material/School";
const Service = () => {
  return (
    <div className="vg-page page-service" id="services">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead">Service</div>
        </div>
        <h1 className="fw-normal text-center wow fadeInUp">What can I do?</h1>
        <div className="row mt-5">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <CodeIcon />
              </div>
              <div className="caption">
                <h4 className="fg-theme">Web Development</h4>
                <p>
                  I can create robust, scalable web applications tailored to
                  your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <PasswordIcon />
              </div>
              <div className="caption">
                <h4 className="fg-theme">Pentesting</h4>
                <p>
                  I identify and address security vulnerabilities through
                  comprehensive penetration testing
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <DeveloperModeIcon />
              </div>
              <div className="caption">
                <h4 className="fg-theme">App Development</h4>
                <p>
                  I develop user-friendly and efficient mobile applications
                  using Flutter.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <SchoolIcon />
              </div>
              <div className="caption">
                <h4 className="fg-theme">Tutoring</h4>
                <p>
                  I offer personalized tutoring services to help you master new
                  skills inlucing Flutter,Python and react.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
