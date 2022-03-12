import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./Static.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Contact from "../../Contact";
import { Card, Container, Col, Row, TabContainer } from "react-bootstrap";

const Static = () => {
  const { id } = useParams();
  console.log("first", id);
  const axios = require("axios");
  const [StaticPage, setStaticPage] = useState(0);
  const [Instansi, setInstansi] = useState(0);

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/static-page/" + id)
      .then(function (response) {
        console.log("console detail: " + response.data.data);
        setStaticPage(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [axios]);

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/instansi/detail/8")
      .then(function (response) {
        setInstansi(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Untitled</title>
        <section className="article-clean">
          <div className="row">
            <div className="col-lg-10 col-xl-8 content-static">
              <div className="intro">
                <h1 className="text-center">{StaticPage.title}</h1>
                <p className="text-center">
                  <span className="by">Dibuat Oleh: </span>
                  <a href="#">{StaticPage.created_by}</a>
                  <span className="date"> | {StaticPage.created_at}</span>
                </p>
              </div>
              <div className="text isi-static">
                <p>{StaticPage.intro}</p>
                <p>
                  <div
                    className="isi-static"
                    dangerouslySetInnerHTML={{
                      __html: StaticPage.content,
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="team-clean">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Kestrukturan Dinas Pertanian</h2>
            </div>
            <div className="row people">
              <div className="col-md-6 col-lg-4 item">
                <img className="rounded-circle" src={Instansi.foto_kepala} />
                <h3 className="name">{Instansi.nama_kepala}</h3>
                <p className="title">Kepala Dinas</p>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <img
                  className="rounded-circle"
                  src={Instansi.foto_wakil_kepala}
                />
                <h3 className="name">{Instansi.nama_wakil_kepala}</h3>
                <p className="title">Wakil Kepala Dinas</p>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <img
                  className="rounded-circle"
                  src={Instansi.foto_sekretaris}
                />
                <h3 className="name">{Instansi.nama_sekretaris}</h3>
                <p className="title">Sekretaris</p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-clean" />
      </div>
    </Fragment>
  );
};

export default Static;
