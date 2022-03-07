import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [DataFooter, setDataFooter] = useState([]);
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/instansi/detail/8")
      .then(function (footer) {
        setDataFooter(footer.data.data);
        console.log("console foter: " + footer.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        />
      </div>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <a href="#">
                  <img src={DataFooter.logo_instansi} alt="logo" />
                </a>
                <p>{DataFooter.alamat}</p>
                <div className="contact-social">
                  <ul>
                    <li>
                      <a href={DataFooter.facebook} className="hover-target">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href={DataFooter.youtube} className="hover-target">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href={DataFooter.instagram} className="hover-target">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============== 1.9 Contact Area End ====================*/}
      {/* =============== 1.9 Footer Area Start ====================*/}
      <footer>
        <p>
          Copyright © 2022 Dinas Pertanian Lampung Timur | All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};
export default Footer;
