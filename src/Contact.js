import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <h2 className="text-center">Kontak Kami</h2>
            <div className="social-icons">
            <a href="#" className="container-icon">
                <RiWhatsappFill size={35} className="icon-c" />
              </a>
              <a href="#" className="container-icon">
                <MdEmail size={35} className="icon-c" />
              </a>
              <a href="#" className="container-icon">
                <AiFillYoutube size={35} className="icon-c" />
              </a>
              <a href="#" className="container-icon">
                <AiFillFacebook size={35} className="icon-c" />
              </a>
              <a href="#" className="container-icon">
                <AiFillInstagram size={35} className="icon-c" />
              </a>
              <section className="map-clean">
                <div className="container">
                  <div className="intro">
                    <h2 className="text-center">Location </h2>
                    <p className="text-center">
                      Nunc luctus in metus eget fringilla. Aliquam sed justo
                      ligula. Vestibulum nibh erat, pellentesque ut laoreet
                      vitae.{" "}
                    </p>
                  </div>
                </div>
                <iframe
                  allowFullScreen
                  frameBorder={0}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63593.80124592769!2d105.26000675613997!3d-5.00383420721576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4090a2a53cc503%3A0x61af279ae7304292!2sDinas%20Pertanian%20Dan%20Pangan!5e0!3m2!1sen!2sid!4v1645245682313!5m2!1sen!2sid"
                  width="100%"
                  height={450}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
