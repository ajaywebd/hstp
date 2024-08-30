import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css"; // Link to your custom CSS file

const Contact = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Replace with your actual API call
    fetch("https://api.example.com/user?email=prajaymaurya@gmail.com")
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <section id="contact" className="contact mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2>Contact</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.863337526027!2d-74.00601528459333!3d40.71277597933081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b0075bd%3A0x3f9b7e6fbe2c7e27!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sus!4v1649182331327!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "350px" }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"></iframe>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="info">
              <div className="address mb-4">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{userInfo ? userInfo.location : "Loading..."}</p>{" "}
                {/* Dynamically display location */}
              </div>

              <div className="phone mb-4">
                <i className="bi bi-phone"></i>
                <h4>Call Us:</h4>
                <p>{userInfo ? userInfo.phone : "+1 5589 55488 55"}</p>{" "}
                {/* Dynamically display phone */}
              </div>

              <div className="email mb-4">
                <i className="bi bi-envelope"></i>
                <h4>Email Us:</h4>
                <p>prajaymaurya@gmail.com</p> {/* Static email */}
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
