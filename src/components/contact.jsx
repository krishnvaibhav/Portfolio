import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../assets/favicon.ico";
import "../assets/css/themify-icons.css";
import "../assets/css/bootstrap.css";
import "../assets/css/virtual.css";
import "../assets/css/topbar.virtual.css";
import "../assets/vendor/animate/animate.css";
import "../assets/vendor/owl-carousel/owl.carousel.css";
import "../assets/vendor/nice-select/css/nice-select.css";
import "../assets/vendor/fancybox/css/jquery.fancybox.min.css";
import "../assets/css/mobile.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_w4n49ek", // Replace with your EmailJS Service ID
        "template_z8ai5cf", // Replace with your EmailJS Template ID
        {
          from_name: formData.Name,
          from_email: formData.Email,
          subject: formData.Subject,
          message: formData.Message,
        },
        "v51TaUxskoOo5P2z0" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ Name: "", Email: "", Subject: "", Message: "" }); // Reset form
        },
        (error) => {
          alert(`Failed to send the message, please try again later.${error}`);
        }
      );
  };

  return (
    <div className="vg-page page-contact" id="contact">
      <div className="container-fluid">
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead">Contact</div>
        </div>
        <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
        <div className="row py-5 flex align-items-center justify-content-lg-center">
          <div className="col-lg-5">
            <form className="vg-contact-form" onSubmit={sendEmail}>
              <div className="form-row">
                <div className="col-12 mt-3 wow fadeInUp">
                  <input
                    className="form-control"
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    value={formData.Name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input
                    className="form-control"
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input
                    className="form-control"
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    value={formData.Subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mt-3 wow fadeInUp">
                  <textarea
                    className="form-control"
                    name="Message"
                    rows="6"
                    placeholder="Enter message here.."
                    value={formData.Message}
                    onChange={handleChange}
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
