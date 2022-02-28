import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const ArticleList = () => {
  const [Items, setItems] = useState([]);
  const [DataResponse, setDataResponses] = useState([]);
  let items = [];
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [dataKategori, setDataKategori] = useState();
  const [DataDokumen, setDataDokumen] = useState();
  const [ArtikelByKategori, setArtikelByKategori] = useState('');
  const [ActiveArtikelClassname, setActiveArtikelClassname] = useState('d-flex justify-content-between align-items-start kategori-list-article');

 

  let tooglePaginate = true;
  function getData(page) {

    if (page == null) {
      page = 1
    }
    setDataResponses(null);
    axios
      .get(
        "http://adminmesuji.embuncode.com/api/article?instansi_id=2&slug="+ ArtikelByKategori +"&per_page=4&page=" +
          page
      )
      .then(function (response) {
        setDataResponses(response.data.data.data);
        // if (tooglePaginate) {
        items = [];
        for (let number = 1; number <= response.data.data.last_page; number++) {
          items.push(
            <Pagination.Item
              onClick={() => getData(number)}
              key={number}
              active={number === response.data.data.current_page}
            >
              {number}
            </Pagination.Item>
          );
          setItems(items);
          // tooglePaginate = false;
        }
        // }
        forceUpdate();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData(1);
  }, [ArtikelByKategori]);

  function handleLength(value, lengths) {
    if (value.length < lengths) {
      return value;
    } else {
      return value.substring(0, lengths);
    }
  }

  useEffect(() => {
    axios
      .get(
        "http://adminmesuji.embuncode.com/api/article/categories/2"
      )
      .then(function (response) {
        console.log("response 55", response);
        setDataKategori(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/dokumen?instansi_id=8")
      .then(function (response) {
        setDataDokumen(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleArticleChange(artikelSlug) {
    console.log('artikelSlug', artikelSlug)
    // getData(1, artikelSlug)
    setArtikelByKategori(artikelSlug);
    setActiveArtikelClassname('d-flex justify-content-between align-items-start kategori-list-article kategori-list-article-active')
  }

  return (
    <Fragment>
      <Container>
        <div>
          <div className="row">
            <div className="col-md-9">
              <h2 className="berita title-home-news">Artikel</h2>
              <div className="row">
                {DataResponse != null
                  ? DataResponse.map((item, index) => {
                      return index % 2 === 0 ? (
                        <div
                          style={{ paddingLeft: "0px" }}
                          className="blog-card"
                        >
                          <div className="meta">
                            <img
                              className="image-size"
                              src={item.image_file_data}
                              alt=""
                            />
                            <ul className="details">
                              <li className="author">
                                <a href="#">John Doe</a>
                              </li>
                              <li className="date">Aug. 24, 2015</li>
                              <li className="tags">
                                <ul>
                                  <li>
                                    <a href="#">Learn</a>
                                  </li>
                                  <li>
                                    <a href="#">Code</a>
                                  </li>
                                  <li>
                                    <a href="#">HTML</a>
                                  </li>
                                  <li>
                                    <a href="#">CSS</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="description">
                            <h1>{handleLength(item.title, 28)}</h1>
                            <h2>{handleLength(item.intro, 20)}</h2>
                            <p>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: handleLength(item.content, 300),
                                }}
                              />
                              {/* {handleLength(item.content, 300)} */}
                            </p>
                            <p className="read-more">
                              <Link to={"/article/" + item.id}>Read More</Link>
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{ paddingLeft: "0px" }}
                          className="blog-card alt"
                        >
                          <div className="meta">
                            <img
                              className="image-size"
                              src={item.image_file_data}
                              alt=""
                            />
                            <ul className="details">
                              <li className="author">
                                <a href="#">Jane Doe</a>
                              </li>
                              <li className="date">July. 15, 2015</li>
                              <li className="tags">
                                <ul>
                                  <li>
                                    <a href="#">Learn</a>
                                  </li>
                                  <li>
                                    <a href="#">Code</a>
                                  </li>
                                  <li>
                                    <a href="#">JavaScript</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="description">
                            <h1>{handleLength(item.title, 28)}</h1>
                            <h2>{handleLength(item.intro, 20)}</h2>
                            <p>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: handleLength(item.content, 300),
                                }}
                              />
                            </p>
                            <p className="read-more">
                              <Link to={"/article/" + item.id}>Read More</Link>
                            </p>
                          </div>
                        </div>
                      );
                    })
                  : "Loading ..."}

                {/*  */}
              </div>
            </div>
            <div className="col-md-3">
              <h2 className="berita title-home-news">Kategori Artikel</h2>
              <ListGroup as="ol" numbered>
                {dataKategori &&
                  dataKategori.map((item, index) => {
                    console.log("test kategori" + item);
                    return (
                      <>
						{(ArtikelByKategori === item.slug) ? <ListGroup.Item as="li" onClick={() => handleArticleChange(item.slug)} className="d-flex justify-content-between align-items-start kategori-list-article kategori-list-article-active"><div className="ms-2 me-auto"><div className="fw-bold">{item.nama_kategori}</div></div><Badge variant="primary" pill>{item.artikel_count}</Badge></ListGroup.Item> : <ListGroup.Item as="li" onClick={() => handleArticleChange(item.slug)} className="d-flex justify-content-between align-items-start kategori-list-article"><div className="ms-2 me-auto"><div className="fw-bold">{item.nama_kategori}</div></div><Badge variant="primary" pill>{item.artikel_count}</Badge></ListGroup.Item>}
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
        </div>
      </Container>
      <Row>
        <Col className="costum-center-paginasi">
          <Pagination>{Items}</Pagination>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ArticleList;
