import React, { useState } from "react";
import "../assets/favicon.ico";
import "../assets/css/themify-icons.css";
import "../assets/css/bootstrap.css";
import "../assets/css/virtual.css";
import "../assets/css/topbar.virtual.css";
import certificate1 from "../assets/img/badges/certificates/Coursera ml course1-1.png";
import certificate2 from "../assets/img/badges/certificates/Foundation of cyber security-1.png";
import certificate3 from "../assets/img/badges/certificates/Generative_AI_Certificate-1.png";
import certificate4 from "../assets/img/badges/certificates/ML TRAINING CERTIFICATES-883-1.png";
import certificate5 from "../assets/img/badges/certificates/Python_certificate-1.png";
import certificate6 from "../assets/img/badges/certificates/THM-2AUQGZH9IR-1.png";
// import certificate7 from "../assets/img/badges/certificates/Tableau certificate-1.png";
import certificate8 from "../assets/img/badges/certificates/flutter_certificate-1.png";
import certificate9 from "../assets/img/badges/certificates/football analytics-1.png";
import certificate10 from "../assets/img/badges/certificates/html and css-1.png";
import certificate11 from "../assets/img/badges/certificates/python_swayam-1.png";
import certificate12 from "../assets/img/badges/certificates/javascript certificate-1.png";

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const posts = [
    {
      image: certificate1,
      category: "AI/ML",
    },
    {
      image: certificate2,
      category: "Cyber Security",
    },
    {
      image: certificate3,
      category: "AI/ML",
    },
    {
      image: certificate4,
      category: "AI/ML",
    },
    {
      image: certificate5,
      category: "AI/ML",
    },
    {
      image: certificate6,
      category: "AI/ML",
    },
    // {
    //   image: certificate7,
    //   category: "AI/ML",
    // },
    {
      image: certificate8,
      category: "AI/ML",
    },
    {
      image: certificate9,
      category: "AI/ML",
    },
    {
      image: certificate10,
      category: "AI/ML",
    },
    {
      image: certificate11,
      category: "AI/ML",
    },
    {
      image: certificate12,
      category: "AI/ML",
    },
  ];

  const displayedPosts = showAll ? posts : posts.slice(0, 3);

  return (
    <div className="vg-page page-blog" id="certifications">
      <div className="container">
        <div className="text-center">
          <div className="badge badge-subhead wow fadeInUp">Certificates</div>
        </div>
        <div className="row post-grid">
          {displayedPosts.map((post, index) => (
            <div className="col-md-6 col-lg-4 wow fadeInUp" key={index}>
              <div className="card">
                <div className="img-place">
                  <img src={post.image} alt="" />
                </div>
                {/* <div className="caption">
                  <p className="post-category">{post.category}</p>
                  <p className="post-title">{post.title}</p>
                  <span className="post-date">
                    <span className="sr-only">Published on</span> {post.date}
                  </span>
                </div> */}
              </div>
            </div>
          ))}
          <div className="col-12 text-center py-3 wow fadeInUp">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-theme"
            >
              {showAll ? "Show Less" : "Show All Certificates"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
