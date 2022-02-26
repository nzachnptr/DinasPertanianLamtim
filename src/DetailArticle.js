import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { browserName, browserVersion } from "react-device-detect";

const DetailArticle = () => {
  const [DataResponse, setDataResponses] = useState([]);

  let url = window.location.href;
  let fixedUrl = url.split("/").pop();
  console.log("fixedUrl", fixedUrl);

  function getData() {
    setDataResponses(null);
    axios
      .get("http://adminmesuji.embuncode.com/api/article/" + fixedUrl)
      .then(function (response) {
        setDataResponses(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData(1);
  }, [axios]);

  useEffect(() => {
    const getIPAddress = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");
      // console.log('IP' + res.data);
      // setIP(res.data.IPv4)

      axios
        .post(
          "http://adminmesuji.embuncode.com/api/article/hit?artikel_id=" +
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
    <Fragment>
      {DataResponse != null ? (
        <div>
          {console.log(DataResponse)}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          />
          <title>{DataResponse.title}</title>
          <section className="article-dual-column">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="intro">
                    <h1 className="text-center">{DataResponse.title}</h1>
                    <p className="text-center">
                      <span className="by">by </span>
                      <a>{DataResponse.created_by}</a>
                      <span> | </span>
                      <span className="date"> {DataResponse.created_at}</span>
                    </p>
                    <img
                      className="img-fluid"
                      src={DataResponse.image_file_data}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 col-lg-3 offset-md-1">
                  <div className="toc">
                    <p>Kategori Artikel</p>
                    <ul>
                      <li>
                        <a href="#">{DataResponse.news_category_id}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-10 col-lg-7 offset-md-1 offset-lg-0">
                  <div className="text">
                    <p>{DataResponse.intro}</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DataResponse.content,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        "loading ..."
      )}
    </Fragment>
  );
};

export default DetailArticle;
