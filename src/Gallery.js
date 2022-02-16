import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const Gallery = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <h1 className="font-color">Gallery Dinas Pertanian</h1>
        <p>Foto Seputar Dinas Pertanian</p>
        <div className="grid">
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=400" alt="" />
              <figcaption>Image Title</figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=401" alt="" />
              <figcaption color="light">Image Title</figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=403" alt="" />
              <figcaption>Image Title</figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=404" alt="" />
              <figcaption>Image Title</figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=405" alt="" />
              <figcaption>Image Title</figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=406" alt="" />
              <figcaption>Image Title</figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=407" alt="" />
              <figcaption>Image Title</figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=408" alt="" />
              <figcaption>Image Title</figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=409" alt="" />
              <figcaption>Image Title</figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <img src="https://unsplash.it/250/187?image=411" alt="" />
              <figcaption>Image Title</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="section-header">
          <h1 className="font-video">Video Seputar Dinas Pertanian</h1>
        </div>
        <div className="video-gallery">
          <div className="gallery-item ">
            <img
              src="https://assets.codepen.io/156905/rainier.jpg"
              alt="Mount Rainier"
            />
            <div className="gallery-item-caption">
              {/*<div>*/}
              <h2>Mount Rainier</h2>
              <p>14410 feet of adventure</p>
              {/*</div>*/}
              <a
                className="vimeo-popup"
                href="https://www.youtube.com/watch?v=Sy4eMiRM-N4"
              />
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://assets.codepen.io/156905/olympicnationalpark.jpg"
              alt="Olympic National Park"
            />
            <div className="gallery-item-caption">
              {/*<div>*/}
              <h2>Olympic National Park</h2>
              <p>Mountains, rain forests, wild coastlines</p>
              {/*</div>*/}
              <a className="vimeo-popup" href="https://www.youtube.com/watch?v=Sy4eMiRM-N4" />
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://assets.codepen.io/156905/northcascadespark.jpg"
              className="north-cascades-img"
              alt="North Cascades National Park"
            />
            <div className="gallery-item-caption">
              {/*<div>*/}
              <h2>North Cascades</h2>
              <p>The mountains are calling</p>
              {/*</div>*/}
              <a className="vimeo-popup" href="https://www.youtube.com/watch?v=Sy4eMiRM-N4" />
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://assets.codepen.io/156905/mountsthelens.jpg"
              alt="Mount St Helens"
            />
            <div className="gallery-item-caption">
              {/*<div>*/}
              <h2>Mount St. Helens</h2>
              <p>The one and only</p>
              {/*</div>*/}
              <a className="vimeo-popup" href="https://www.youtube.com/watch?v=Sy4eMiRM-N4" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
