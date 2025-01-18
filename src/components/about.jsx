import React from "react";
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
import ScrollReveal from "../scrollReveal";

import personImage from "../assets/img/mypic.jpg";

const About = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "R KRISHN VAIBHAV Developer.pdf";
    link.download = "R_KRISHN_VAIBHAV_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="vg-page page-about" id="about">
      <ScrollReveal>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 py-3">
              <div className="img-place wow fadeInUp ">
                <img src={personImage} alt="" className="vaibhavimg" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 wow fadeInRight">
              <h1 className="fw-light">R Krishn Vaibhav</h1>
              <h5 className="fg-theme mb-3">Developer / Pentester</h5>
              <p className="text-muted">
                I am a highly motivated cybersecurity student with a strong
                computer science background and a passion for offensive
                security. I thrive in emulating attacker methodologies to
                identify and exploit vulnerabilities in systems and networks. My
                problem-solving skills are honed through actively learning and
                applying red team tactics for penetration testing and adversary
                simulations. As a quick learner with an insatiable curiosity for
                emerging threats, I stay current on the latest hacking
                techniques and defensive strategies
              </p>
              <ul className="theme-list">
                <li>{/* <b>From:</b> Kerala, India */}</li>
                <li>
                  <b>Lives In:</b> Adelaide, Australia
                </li>
                <li>
                  <b>Age:</b> 21
                </li>
                <li>
                  <b>Gender:</b> Male
                </li>
              </ul>
              <button onClick={downloadCV} className="btn btn-theme-outline">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="container py-5">
          <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
          <div className="row py-3">
            <div className="col-md-6">
              <div className="px-lg-3">
                <h4 className="wow fadeInUp text-center m-2 p-2 ">Coding</h4>
                <div className="progress-wrapper wow fadeInUp skillbox">
                  <span className="caption">Python</span>
                </div>
                <div className="progress-wrapper wow fadeInUp skillbox">
                  <span className="caption">React</span>
                </div>
                <div className="progress-wrapper wow fadeInUp skillbox">
                  <span className="caption">Flutter</span>
                </div>
                <div className="progress-wrapper wow fadeInUp skillbox">
                  <span className="caption">Javascript</span>
                </div>
                <div className="progress-wrapper wow fadeInUp skillbox">
                  <span className="caption">SQL</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="px-lg-3">
                <h4 className="wow fadeInUp text-center m-2 p-2">
                  Cyber Security
                </h4>
                <div className="progress-wrapper wow fadeInUp skillbox">
                  <span className="caption">Web Pentesting</span>
                </div>
                <div className="progress-wrapper wow fadeInUp skillbox">
                  <span className="caption">Cryptography</span>
                </div>
                <div className="progress-wrapper wow fadeInUp skillbox">
                  <span className="caption">OSINT</span>
                </div>
                <div className="progress-wrapper wow fadeInUp skillbox">
                  <span className="caption">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 wow fadeInRight">
              <h2 className="fw-normal">Education</h2>
              <ul className="timeline mt-4 pr-md-5">
                <li>
                  <div className="title">2024-2026</div>
                  <div className="details">
                    <h5>Masters in Cybersecurity</h5>
                    <small className="fg-theme">University of Adelaide</small>
                    <p>
                      I am currently pursuing this degree as a recipient of the
                      prestigious Global Citizenship Scholarship.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2021-2024</div>
                  <div className="details">
                    <h5>Bachelors in Computer Application</h5>
                    <small className="fg-theme">Christ University</small>
                    <p>
                      I graduated with a CGPA of 9.21/10, demonstrating
                      consistent academic excellence and strong performance
                      throughout my degree program.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2019-2021</div>
                  <div className="details">
                    <h5>High School Diploma</h5>
                    <small className="fg-theme">Bhavans Vidya Mandir</small>
                    <p>
                      I graduated with 93.8% in Commerce with Informatics
                      Practice, showcasing my proficiency in both business and
                      technology.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
              <h2 className="fw-normal">Experience</h2>
              <ul className="timeline mt-4 pr-md-5">
                <li>
                  <div className="title">2024</div>
                  <div className="details">
                    <h5>Mobile Developer intern</h5>
                    <small className="fg-theme">
                      MariApps Marine Solutions
                    </small>
                    <p>
                      During my internship in mobile development, I worked on
                      Flutter for a project named Eyesea, developing multiple
                      features.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2023</div>
                  <div className="details">
                    <h5>Technical Team Lead (Intern)</h5>
                    <small className="fg-theme">Ambimed Healthcare</small>
                    <p>
                      Led cross-platform app development with React Native and
                      Firebase, recruited top talent, designed data dashboards,
                      collaborated with diverse teams, utilized agile methods,
                      integrated third-party APIs, and ensured high-quality
                      code.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2023</div>
                  <div className="details">
                    <h5>Lead Developer (Intern)</h5>
                    <small className="fg-theme">Upedian</small>
                    <p>
                      Lead developer responsible for backend functions for
                      transcribers and image-to-text features, bypassed Google's
                      API limits, enhanced UX with JavaScript, managed team
                      tasks, recruited developers, and guided junior members.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default About;
