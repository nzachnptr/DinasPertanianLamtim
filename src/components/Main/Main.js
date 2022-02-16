import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";

const Main = () => {
  return (
    <Fragment>
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
      <div className="container-home-main">
        <div className="row mb-5">
          <div className="col-md-4">
            <img
              src="https://pertanian.jatimprov.go.id/wp-content/uploads/2019/10/kadis.jpg"
              width={"100%"}
              className="foto-kepala"
              alt="Foto Kepala"
            />
          </div>
          <div className="col-md-8 rest">
            <h2 className="kata-pembuka-news">
              Assalamu'alaikum Warahmatullahi Wabarakatuh
            </h2>
            <p>Salam Sejahtera untuk Kita Semua</p>
            <p>
              Puji syukur ke hadirat Allah Subhanallahu Wa Taala, karena atas
              ridho-Nya Dinas Pertanian dan Ketahanan Pangan Provinsi Jawa Timur
              berupaya memberikan informasi-informasi terkait dunia pertanian
              dan pangan melalui media website. Hal ini selaras dengan Visi Misi
              Ibu Gubernur dan Bapak Wakil Gubernur Jawa Timur yang tertuang
              dalam Nawa Bhakti Satya di Bidang Pertanian dan Ketahanan Pangan
              yaitu Jatim Agro, maka pelayanan publik baik berupa informasi,
              program, maupun layanan diharapkan dapat disajikan ke publik
              secara Cepat, Efektif, Tanggap, Transparan, dan Responsif..
            </p>
            <h2 className="kata-penutup-news">
              Wassalamu 'Alaikum Warahmatullahi Wabarakatuh
            </h2>
            <div className="nama-kpla">
              <h2 className="kata-penutup-news">
                Kepala Dinas Pertanian dan Ketahanan Pangan Provinsi Jawa Timur
              </h2>
              <h2 className="kepala-dinas">Dr. Ir. Hadi Sulistyo, M.Si</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <h2 className="berita title-home-news">News</h2>
            <div className="row">
              <div className="col-md-4">
                <Card className="isi no-padding">
                  <Card.Img
                    variant="top"
                    className="radius-10"
                    src="slide1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Padi Layu</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Card.Text>
                    <Card.Link href="#">Selengkapnya...</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card className="isi no-padding">
                  <Card.Img
                    variant="top"
                    className="radius-10"
                    src="slide1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Padi Layu</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Card.Text>
                    <Card.Link href="#">Selengkapnya...</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card className="isi no-padding">
                  <Card.Img
                    variant="top "
                    className="radius-10"
                    src="slide1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Padi Layu</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Card.Text>
                    <Card.Link href="#">Selengkapnya...</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="berita title-home-news">Berita Terbaru</h2>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <h2 className="berita title-home-news">Gallery</h2>
        <InfiniteCarousel
          className="galeri"
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
          <div>
            <img alt="" src="moon.jpg" />
          </div>
        </InfiniteCarousel>
      </div>
    </Fragment>
  );
};

export default Main;
