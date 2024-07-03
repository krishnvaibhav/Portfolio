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
const Footer = () => {
  return (
    <div className="vg-footer">
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-12">
            <p className="text-center mb-0 mt-4">
              Copyright &copy;2020. All right reserved | This template is made
              with <span className="ti-heart fg-theme-red"></span> by{" "}
              <a href="https://www.macodeid.com/">MACode ID</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
