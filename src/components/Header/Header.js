import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Carousel } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";

const Header = () => {
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
        <Navbar className="navbar-dark bg-dark" expand="lg">
          <Container>
            <Navbar.Brand href="#beranda">MENU</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#beranda">BERANDA</Nav.Link>
                <Nav.Link href="#berita">BERITA</Nav.Link>
                <Nav.Link href="#artikel">ARTIKEL</Nav.Link>
                <NavDropdown title="DOKUMEN" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>{" "}
                <NavDropdown title="INFORMASI" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#galeri">GALERI</Nav.Link>
                <Nav.Link href="#kontak">KONTAK KAMI</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      <div className="container-slideshow">
        <Carousel fade>
          <Carousel.Item>
            <img className="slideshow" src="slide1.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Padi Layu</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slideshow" src="slide2.jpg" alt="Second slide" />

            <Carousel.Caption>
              <h3>Padi Diserang Hama</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slideshow" src="slide3.jpg" alt="Third slide" />

            <Carousel.Caption>
              <h3>Petani Kekerangan</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Header;
