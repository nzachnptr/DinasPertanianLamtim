import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { AiOutlineMail } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";

export const Header = (params) => {
  const [DataResponse, setDataResponses] = useState(0);
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/menus?instansi_id=8")
      .then(function (response) {
        setDataResponses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <marquee className="runtext" style={{ marginTop: "20px" }}>
        <p>Selamat Datang di Website Dinas Pertanian Kabupaten Lampung Timur</p>
      </marquee>
      <div className="margin">
        <Row>
          <Col>
            <img className="logo" src="Dinas Pertanian.svg"></img>
          </Col>
          <Col className="emailaddress">
            <div className="email flek">
              <AiOutlineMail size={35} className="icon" />
              <div className="textbox">
                <span style={{ fontWeight: "700" }}> Email</span>
                <p a href="#email">
                  distanikab.lamtim@gmail.com
                </p>
              </div>
            </div>
            <div className="alamat flek">
              <SiGooglemaps size={35} className="icon2" />
              <div className="textbox">
                <span style={{ fontWeight: "700" }}> Alamat</span>
                <p a href="alamat">
                  Jl.Manggis Purnawirawan IIV No.4 Lampung Timur
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="me-auto">
            {DataResponse &&
              DataResponse.map((m, i) => {
                console.log("DataResponse22", DataResponse);
                return (
                  <>
                    {m.children.length > 0 ? (
                      <>
                        <NavDropdown title={m.name}>
                          {m.children &&
                            m.children.map((h, k) => {
                              {
                                console.log("Nama Children " + h.name);
                              }
                              return (
                                <NavDropdown.Item eventKey="4.1">
                                  {h.name}
                                </NavDropdown.Item>
                              );
                            })}
                        </NavDropdown>
                      </>
                    ) : (
                      <Nav.Link href={m.url}>{m.name}</Nav.Link>
                    )}
                  </>
                );
              })}
          </Nav>
        </Navbar>
      </>
    </Fragment>
  );
};
export default Header;
