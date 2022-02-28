import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const Main = () => {
	const [DataUmum, setDataUmum] = useState(0);
	const [DataGallery, setDataGallery] = useState(null);
	const [CustomDataGallery, setCustomDataGallery] = useState(null);
	const [dataKategori, setDataKategori] = useState();
	const [DataDokumen, setDataDokumen] = useState();
	const [ArtikelByKategori, setArtikelByKategori] = useState();
	const axios = require("axios");
	const [getData] = useState();
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [DataArticle, setDataArticle] = useState(null);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	useEffect(() => {
		axios
			.get(
				"http://adminmesuji.embuncode.com/api/article?instansi_id=2&per_page=3"
			)
			.then(function (repsonse) {
				setDataArticle(repsonse.data.data.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		getDataNews();
	}, []);

	function getDataNews(slug) {

		let url = '';

		if (slug == null) {
			slug = "s";
			url = "http://adminmesuji.embuncode.com/api/news?instansi_id=2"
		} else {
			url = "http://adminmesuji.embuncode.com/api/news?instansi_id=2&slug=" + slug
		}
		setDataUmum(null);
		axios
			.get(
				url
			)
			.then(function (Umum) {
				setDataUmum(Umum.data.data.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	useEffect(() => {
		axios
			.get(
				"http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2&per_page=2"
			)
			.then(function (Umum) {
				setDataGallery(Umum.data.data.data);
				test(Umum.data.data.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		console.log("Masuk");
		axios
			.get("http://adminmesuji.embuncode.com/api/news/categories/2")
			.then(function (response) {
				setDataKategori(response.data.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		axios
			.get("http://adminmesuji.embuncode.com/api/dokumen?instansi_id=8")
			.then(function (response) {
				setDataDokumen(response.data.data.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	function test(response) {
		let imageContainer = [];
		for (let i = 0; i < response.length; i++) {
			for (let k = 0; k < response[i].image_gallery_item.length; k++) {
				imageContainer.push(response[i].image_gallery_item[k].image_file_data);
			}
		}

		setCustomDataGallery(imageContainer);
	}

	useEffect(() => { }, [CustomDataGallery]);

	useEffect(() => { }, []);

	function handleArticleChange(artikelSlug) {
		console.log("artikelSlug", artikelSlug);
		getDataNews(artikelSlug);
		setArtikelByKategori(artikelSlug);
	}

	return (
		<Fragment>
			<div className="container-slideshow">
				<Carousel fade>
					{
						DataArticle && DataArticle.map((item, index) => {
							return (
								<Carousel.Item>
									<img className="slideshow" src={item.image_file_data} alt="First slide" />
									<Carousel.Caption>
										<h3>{item.title}</h3>
										<p>{item.intro}</p>
									</Carousel.Caption>
								</Carousel.Item>
							)
						})
					}
					
					{/* <Carousel.Item>
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
					</Carousel.Item> */}
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
							{DataUmum &&
								DataUmum.map((item, index) => {
									return (
										<>
											<>
												<div className="col-md-4">
													<Card className="isi no-padding">
														<Card.Body>
															<Card.Img
																variant="top"
																className="radius-10"
																src={item.image_file_data}
															/>
															<Card.Title>{item.title}</Card.Title>
															<Card.Text>{item.intro}</Card.Text>
															<Link to={"/news/" + item.id}>Read More</Link>
														</Card.Body>
													</Card>
												</div>
											</>
										</>
									);
								})}
						</div>
					</div>
					<div className="col-md-3">
						<h2 className="berita title-home-news">Kategori News</h2>
						<ListGroup as="ol" numbered>
							{dataKategori &&
								dataKategori.map((item, index) => {
									return (
										<>
											{(ArtikelByKategori === item.slug) ? <ListGroup.Item as="li" onClick={() => handleArticleChange(item.slug)} className="d-flex justify-content-between align-items-start kategori-list-article kategori-list-article-active"><div className="ms-2 me-auto"><div className="fw-bold">{item.nama_kategori}</div></div><Badge variant="primary" pill>{item.news_count}</Badge></ListGroup.Item> : <ListGroup.Item as="li" onClick={() => handleArticleChange(item.slug)} className="d-flex justify-content-between align-items-start kategori-list-article"><div className="ms-2 me-auto"><div className="fw-bold">{item.nama_kategori}</div></div><Badge variant="primary" pill>{item.news_count}</Badge></ListGroup.Item>}
										</>
									);
								})}
						</ListGroup>
						<h2 className="berita title-home-news">Dokumen</h2>
						<ListGroup>
							{DataDokumen &&
								DataDokumen.map((item, index) => {
									return (
										<>
											{item.dokumen_item.map((item2, index2) => {
												return (
													<Fragment>
														<a
															href={
																"/pdf/" +
																item.slug +
																"/" +
																item2.dokumen_file_name.replace(/\s/g, "")
															}
														>
															{item2.dokumen_file_name}
														</a>
													</Fragment>
												);

												// <a href={item2.dokumen_file_data}>{item2.dokumen_file_name}</a>;
											})}
										</>
									);
								})}
						</ListGroup>
					</div>
				</div>
				<h2 className="berita title-home-news">Gallery</h2>

				{CustomDataGallery != null ? (
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
						slidesToScroll={5}
						slidesToShow={4}
						scrollOnDevice={true}
					>
						{CustomDataGallery.map((item, index) => {
							return (
								<div>
									<img src={item} />
								</div>
							);
						})}
					</InfiniteCarousel>
				) : (
					"Loading .."
				)}
			</div>
		</Fragment>
	);
};

export default Main;
