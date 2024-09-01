import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css"; // Link to your custom CSS file
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const Contact = () => {
  const [userInfo, setUserInfo] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g3pvc06",
        "template_1p956fq",
        form.current,
        "LG5PWlj04rb8TkwlD"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    // Replace with your actual API call
    fetch("https://api.example.com/user?email=prajaymaurya@gmail.com")
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <>
      <ToastContainer />
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

          <div className="row mb-4">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.863337526027!2d-74.00601528459333!3d40.71277597933081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b0075bd%3A0x3f9b7e6fbe2c7e27!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sus!4v1649182331327!5m2!1sen!2sus"
                style={{ border: 0, width: "100%", height: "350px" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"></iframe>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="info">
                <div className="address mb-4">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>{userInfo ? userInfo.location : "Loading..."}</p>
                </div>

                <div className="phone mb-4">
                  <i className="bi bi-phone"></i>
                  <h4>Call Us:</h4>
                  <p>{userInfo ? userInfo.phone : "+1 5589 55488 55"}</p>
                </div>

                <div className="email mb-4">
                  <i className="bi bi-envelope"></i>
                  <h4>Email Us:</h4>
                  <p>prajaymaurya@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form ref={form} onSubmit={sendEmail} className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      name="from_name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="from_email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
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

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/916394746719?text=Hello%2C%20I%20have%20a%20query"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon">
          <FaWhatsapp size={50} />
        </a>
      </section>
    </>
  );
};

export default Contact;
