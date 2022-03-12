import React from "react";
import { useEffect, useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import fixedUrl from "react";
import { browserName } from "react-device-detect";

const Contact = () => {
  const [DataResponse, setDataResponses] = useState(0);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/instansi/detail/8")
      .then(function (response) {
        setDataResponses(response.data.data); 
      console.log('first-saya', response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const getIPAddress = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");
      // console.log('IP' + res.data);
      // setIP(res.data.IPv4)

      axios
        .post(
          "http://adminmesuji.embuncode.com/api/news/hit?news_id=" +
            fixedUrl +
            "&ip=" +
            res.data.IPv4 +
            "&device=" +
            browserName
        )
        .then(function (response) {
          console.log("console ini2: " + response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getIPAddress();
  }, []);


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
            <h2 className="text-center contact">Kontak Kami</h2>
            <div className="social-icons">
              <div className="margin-contact">
                
              <a href={DataResponse.email} className="container-icon">
                <MdEmail size={35} className="icon-c" />
              </a>
              <a href={DataResponse.youtube} className="container-icon">
                <AiFillYoutube size={35} className="icon-c" />
              </a>
              <a href={DataResponse.facebook} className="container-icon">
                <AiFillFacebook size={35} className="icon-c" />
              </a>
              <a href={DataResponse.instagram} className="container-icon">
                <AiFillInstagram size={35} className="icon-c" />
              </a>
</div>
            </div>
              <section className="map-clean">
                <div className="container">
                  <div className="intro">
                    <h2 className="text-center">Temukan Kami </h2>
                    <p className="text-center">
                    XG3F+F88, Sukadana Ilir, Sukadana, Kabupaten Lampung Timur, Lampung 34194{" "}
                    </p>
                  </div>
                </div>
                <iframe
                  allowFullScreen
                  frameBorder={0}
                  src={DataResponse.google_map}
                  width="100%"
                  height={450}
                />
              </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
