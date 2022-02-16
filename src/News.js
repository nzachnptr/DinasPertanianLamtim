import React, { Fragment, useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";

const News = () => {
  const [Items, setItems] = useState([]);
  const [DataResponse, setDataResponses] = useState([]);
  let items = [];
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  let tooglePaginate = true;
  function getData(page) {
    axios
      .get(
        "http://adminmesuji.embuncode.com/api/article?instansi_id=2&per_page=4&page=" + page)
      .then(function (response) {
        setDataResponses(response.data.data.data);
        if (tooglePaginate) {
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
            tooglePaginate = false;
          }
        }
        forceUpdate();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData(2);
  }, [axios]);

  return (
    <Fragment>
      <Container>
        <div>
          <div className="row">
            <div className="col-md-9">
              <h2 className="berita title-home-news">Artikel</h2>
              <div className="row">
                <div className="blog-card">
                  <div className="meta">
                    <div
                      className="photo"
                      style={{
                        backgroundImage:
                          "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
                      }}
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
                    <h1>Learning to Code</h1>
                    <h2>Opening a door to the future</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p className="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
                <div className="blog-card alt">
                  <div className="meta">
                    <div
                      className="photo"
                      style={{
                        backgroundImage:
                          "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)",
                      }}
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
                    <h1>Mastering the Language</h1>
                    <h2>Java is not the same as JavaScript</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p className="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
                <div className="blog-card">
                  <div className="meta">
                    <div
                      className="photo"
                      style={{
                        backgroundImage:
                          "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
                      }}
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
                    <h1>Learning to Code</h1>
                    <h2>Opening a door to the future</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p className="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
                <div className="blog-card alt">
                  <div className="meta">
                    <div
                      className="photo"
                      style={{
                        backgroundImage:
                          "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)",
                      }}
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
                    <h1>Mastering the Language</h1>
                    <h2>Java is not the same as JavaScript</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p className="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
                <div className="blog-card">
                  <div className="meta">
                    <div
                      className="photo"
                      style={{
                        backgroundImage:
                          "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
                      }}
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
                    <h1>Learning to Code</h1>
                    <h2>Opening a door to the future</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p className="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
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
        </div>
      </Container>
      {console.log("items", Items)}
      <Pagination>{Items}</Pagination>
    </Fragment>
  );
};

export default News;
