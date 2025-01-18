import React from "react";
// import "./Client.css"; // Create and import your CSS file for styles
import "../assets/favicon.ico";
import "../assets/css/themify-icons.css";
import "../assets/css/bootstrap.css";
import "../assets/vendor/animate/animate.css";
import "../assets/vendor/owl-carousel/owl.carousel.css";
import "../assets/vendor/nice-select/css/nice-select.css";
import "../assets/vendor/fancybox/css/jquery.fancybox.min.css";
import "../assets/css/virtual.css";
import "../assets/css/topbar.virtual.css";
import "../assets/css/portfolio.css";
import "../assets/css/mobile.css";

import Badge1 from "../assets/img/badges/firstfour.svg";
import Badge2 from "../assets/img/badges/howthewebworks.svg";
import Badge3 from "../assets/img/badges/linux.svg";
import Badge4 from "../assets/img/badges/networkfundamentals.svg";
import Badge5 from "../assets/img/badges/streak30.svg";
import Badge6 from "../assets/img/badges/streak7.svg";
import Badge7 from "../assets/img/badges/webbed.svg";

const Badges = () => {
  const badges = [
    { src: Badge2, alt: "Badge 2" },
    { src: Badge3, alt: "Badge 3" },
    { src: Badge4, alt: "Badge 4" },
    { src: Badge5, alt: "Badge 5" },
    { src: Badge6, alt: "Badge 6" },
    { src: Badge7, alt: "Badge 7" },
    { src: Badge1, alt: "Badge 1" },
  ];

  return (
    <div className="vg-page page-client badges">
      <div className="slider">
        <img src={Badge1} alt="" />
        <img src={Badge2} alt="" />
        <img src={Badge3} alt="" />
        <img src={Badge4} alt="" />
        <img src={Badge5} alt="" />
        <img src={Badge6} alt="" />
        <img src={Badge7} alt="" />
      </div>
      <div className="slider">
        <img src={Badge1} alt="" />
        <img src={Badge2} alt="" />
        <img src={Badge3} alt="" />
        <img src={Badge4} alt="" />
        <img src={Badge5} alt="" />
        <img src={Badge6} alt="" />
        <img src={Badge7} alt="" />
      </div>
    </div>
  );
};

export default Badges;
