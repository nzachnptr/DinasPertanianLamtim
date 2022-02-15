import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";
import CardGroup from "react-bootstrap/CardGroup";

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
						<img src="https://pertanian.jatimprov.go.id/wp-content/uploads/2019/10/kadis.jpg" width={'100%'} className="foto-kepala" alt="Foto Kepala" />
					</div>
					<div className="col-md-8 rest">
						<h2 className="kata-pembuka-news">Assalamu'alaikum Warahmatullahi Wabarakatuh</h2>
						<p>Salam Sejahtera untuk Kita Semua</p>
						<p>Puji syukur ke hadirat Allah Subhanallahu Wa Taala, karena atas ridho-Nya Dinas Pertanian dan Ketahanan Pangan Provinsi Jawa Timur berupaya memberikan informasi-informasi terkait dunia pertanian dan pangan melalui media website. Hal ini selaras dengan Visi Misi Ibu Gubernur dan Bapak Wakil Gubernur Jawa Timur yang tertuang dalam Nawa Bhakti Satya di Bidang Pertanian dan Ketahanan Pangan yaitu Jatim Agro, maka pelayanan publik baik berupa informasi, program, maupun layanan diharapkan dapat disajikan ke publik secara Cepat, Efektif, Tanggap, Transparan, dan Responsif..</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-9">
						<h2 className="berita title-home-news">News</h2>
						<div className="row">
						<div className="col-md-4">
								<Card className="isi no-padding">
									<Card.Img variant="top" className="radius-10" src="slide1.jpg" />
										<Card.Body>
											<Card.Title>Padi Layu</Card.Title>
											<Card.Text>
												Lorem Ipsum is simply dummy text of the printing and typesetting
												industry. Lorem Ipsum has been the industry's standard dummy
												text ever since the 1500s, when an unknown printer took a galley
												of type and scrambled it to make a type specimen book.
											</Card.Text>
											<Card.Link href="#">Selengkapnya...</Card.Link>
										</Card.Body>
									</Card>
							</div>
							<div className="col-md-4">
								<Card className="isi no-padding">
									<Card.Img variant="top" className="radius-10" src="slide1.jpg" />
										<Card.Body>
											<Card.Title>Padi Layu</Card.Title>
											<Card.Text>
												Lorem Ipsum is simply dummy text of the printing and typesetting
												industry. Lorem Ipsum has been the industry's standard dummy
												text ever since the 1500s, when an unknown printer took a galley
												of type and scrambled it to make a type specimen book.
											</Card.Text>
											<Card.Link href="#">Selengkapnya...</Card.Link>
										</Card.Body>
									</Card>
							</div>
							<div className="col-md-4">
								<Card className="isi no-padding">
									<Card.Img variant="top " className="radius-10" src="slide1.jpg" />
										<Card.Body>
											<Card.Title>Padi Layu</Card.Title>
											<Card.Text>
												Lorem Ipsum is simply dummy text of the printing and typesetting
												industry. Lorem Ipsum has been the industry's standard dummy
												text ever since the 1500s, when an unknown printer took a galley
												of type and scrambled it to make a type specimen book.
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
				
				<CardGroup>
					<Card className="isi ">
						<Card.Img variant="top" src="slide1.jpg" />
						<Card.Body>
							<Card.Title>Padi Layu</Card.Title>
							<Card.Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</Card.Text>
							<Card.Link href="#">Selengkapnya...</Card.Link>
						</Card.Body>
					</Card>
					<Card className="isi">
						<Card.Img variant="top" src="slide2.jpg" />
						<Card.Body>
							<Card.Title>Padi Diserang Hama</Card.Title>
							<Card.Text>
								It has survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum.{" "}
							</Card.Text>
							<Card.Link href="#">Selengkapnya...</Card.Link>
						</Card.Body>
					</Card>
					<Card className="isi">
						<Card.Img variant="top" src="slide1.jpg" />
						<Card.Body>
							<Card.Title>Petani Kekeringan</Card.Title>
							<Card.Text>
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45 BC, making it over 2000 years old.
							</Card.Text>
							<Card.Link href="#">Selengkapnya...</Card.Link>
						</Card.Body>
					</Card>
				</CardGroup>
				<Container>
					<Row>
						<Col sm={7}>
							<h2 className="judul">Artikel</h2>
							<Card className="imgartikel bg-light text-white">
								<Card.Img src="artikel.png" alt="Card image" />
								<Card.ImgOverlay>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
									<Card.Text>Last updated 3 mins ago</Card.Text>
								</Card.ImgOverlay>
							</Card>
							<Card className="imgartikel bg-light text-white">
								<Card.Img src="artikel.png" alt="Card image" />
								<Card.ImgOverlay>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
									<Card.Text>Last updated 3 mins ago</Card.Text>
								</Card.ImgOverlay>
							</Card>
							<Card className="imgartikel bg-light text-white">
								<Card.Img src="artikel.png" alt="Card image" />
								<Card.ImgOverlay>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
									<Card.Text>Last updated 3 mins ago</Card.Text>
								</Card.ImgOverlay>
							</Card>
						</Col>
						<Col sm={4}>
							<h2 className="judul">Informasi</h2>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<Card border="light" style={{ width: "18rem" }}>
										<Card.Header>Header</Card.Header>
										<Card.Body>
											<Card.Title>Light Card Title</Card.Title>
											<Card.Text>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</Card.Text>
										</Card.Body>
									</Card>
								</ListGroup.Item>
								<ListGroup.Item>
									<Card border="light" style={{ width: "18rem" }}>
										<Card.Header>Header</Card.Header>
										<Card.Body>
											<Card.Title>Light Card Title</Card.Title>
											<Card.Text>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</Card.Text>
										</Card.Body>
									</Card>
								</ListGroup.Item>
								<ListGroup.Item>
									<Card border="light" style={{ width: "18rem" }}>
										<Card.Header>Header</Card.Header>
										<Card.Body>
											<Card.Title>Light Card Title</Card.Title>
											<Card.Text>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</Card.Text>
										</Card.Body>
									</Card>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Container>
				<h2 className="berita">Galeri</h2>
				<InfiniteCarousel className="galeri"
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
