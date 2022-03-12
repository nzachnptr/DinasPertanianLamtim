import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { AiOutlineMail } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";

export const Header = (params) => {
  const [DataResponse, setDataResponses] = useState(0);
  const [DataHeader, setDataHeader] = useState([]);
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

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/instansi/detail/8")
      .then(function (header) {
        setDataHeader(header.data.data);
        console.log("console header: " + header.data.data);
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
            <div className="logo-full">
              <div className="logo-header">
                <img className="logo" src={DataHeader.logo_instansi}></img>
              </div>
              <h1 className="text-logo">
                {DataHeader.nama_instansi} Kabupaten Lampung Timur
              </h1>
            </div>
          </Col>
          <Col className="emailaddress">
            <div className="email flek">
              <AiOutlineMail size={35} className="icon" />
              <div className="textbox">
                <span style={{ fontWeight: "700" }}> Email</span>
                <p a href="#email">
                  {DataHeader.email}
                </p>
              </div>
            </div>
            <div className="alamat flek">
              <SiGooglemaps size={35} className="icon2" />
              <div className="textbox">
                <span style={{ fontWeight: "700" }}> Alamat</span>
                <p a href="alamat">
                  {DataHeader.alamat}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <>
        <Navbar
          style={{ backgroundColor: "#212529", position: "sticky" }}
          variant="dark"
          fixed="top"
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {DataResponse &&
                  DataResponse.map((m, i) => {
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
                                    <>
                                      {h.children.length > 0 ? (
                                        <>
                                          <NavDropdown title={h.name}>
                                            {h.children &&
                                              h.children.map((j, o) => {
                                                return (
                                                  <>
                                                    {j.children.length > 0 ? (
                                                      <>
                                                        <NavDropdown
                                                          title={j.name}
                                                        >
                                                          {j.children &&
                                                            j.children.map(
                                                              (k, l) => {
                                                                return (
                                                                  <Nav.Link
                                                                    eventKey="4.1"
                                                                    href={k.url}
                                                                  >
                                                                    {k.name}
                                                                  </Nav.Link>
                                                                );
                                                              }
                                                            )}
                                                        </NavDropdown>
                                                      </>
                                                    ) :  m.static_page != null ? (
                                                      <Nav.Link href={'static/' + j.static_page}>{j.name}</Nav.Link>
                                                      ) : (
                                                        <Nav.Link href={j.url}>{j.name}</Nav.Link>
                                                    )
                                                    }
                                                  </>
                                                );
                                              })}
                                          </NavDropdown>
                                        </>
                                      ) :  m.static_page != null ? (
                                        <Nav.Link href={'static/' + h.static_page}>{h.name}</Nav.Link>
                                        ) : (
                                          <Nav.Link href={h.url}>{h.name}</Nav.Link>
                                      )
                                      }
                                    </>
                                  );
                                })}
                            </NavDropdown>
                          </>
                        ) :  m.static_page != null ? (
                          <Nav.Link href={'static/' + m.static_page}>{m.name}</Nav.Link>
                          ) : (
                            <Nav.Link href={m.url}>{m.name}</Nav.Link>
                        )
                      }
                      </>
                    );
                  })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </Fragment>
  );
};
export default Header;
