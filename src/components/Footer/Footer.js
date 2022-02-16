import React from "react";
import { HiHome } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import { Fragment } from "react/cjs/react.production.min";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Fragment className="container">
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>Dinas Pertanian</Heading>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">Kepala Dinas</FooterLink>
              <FooterLink href="#">Struktur Organisasi</FooterLink>
            </Column>
            <Column>
              <Heading>News</Heading>
              <FooterLink href="#">News</FooterLink>
              <FooterLink href="#">Berita Populer</FooterLink>
              <FooterLink href="#">Coding</FooterLink>
            </Column>
            <Column>
              <Heading>Tentang Kami</Heading>
              <FooterLink href="#">Profil</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Lokasi</FooterLink>
            </Column>
            <Column>
              <Heading>Hubungi Kami</Heading>
              <FooterLink href="#"><HiHome size={30}/> Telephone/WhatsApp</FooterLink>
              <FooterLink href="#"><BiPhoneCall size={30}/> 0813 - 8435 - 5674</FooterLink>
              <FooterLink><MdAccessTimeFilled size={30}/> 10.00 - 17.00 WIB</FooterLink>
            </Column>
            {/* <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column> */}
          </Row>
        </Container>
      </Box>
      <footer className="text-center" style={{ marginTop: "10px"}}>
        <p>
          &copy;{new Date().getFullYear()} Dinas Perhubungan Kabupaten Lampung
          Timur | All rights reserved
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
