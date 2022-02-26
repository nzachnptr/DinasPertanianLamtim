import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// import { Fragment, useState,useEffect } from "react/cjs/react.production.min";

const Gallery = () => {
  const [DataGallery, setDataGallery] = useState(null);
  const [DataVideoGallery, setDataVideoGallery] = useState(null);
  const [DataVideoGalleryUrl, setDataVideoGalleryUrl] = useState(null);
  const [CustomDataGallery, setCustomDataGallery] = useState(null);
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2")
      .then(function (Umum) {
        setDataGallery(Umum.data.data.data);
        test(Umum.data.data.data);
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
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=5")
      .then(function (response) {
        // setDataVideoGallery(response.data.data.data);
        convertVideoGallery(response.data.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function convertVideoGallery(response) {
    let videoContainer = [];
    let videoUrl = []
    for (let i = 0; i < response.length; i++) {
      for (let k = 0; k < response[i].image_gallery_item.length; k++) {
        videoContainer.push({
          thumbnail: response[i].image_gallery_item[k].thumbnail_url,
          url: response[i].image_gallery_item[k].video_url,
          description: response[i].image_gallery_item[k].description,
          created_by: response[i].image_gallery_item[k].created_by
        });
      }
    }

    setDataVideoGallery(videoContainer);
  }

  // useEffect(() => { }, [CustomDataGallery]);
  return (
    <Fragment>
      <div className="wrapper">
        {console.log("DataVideoGallery", DataVideoGallery)}
        <h1 className="font-color">Gallery Dinas Pertanian</h1>
        <p>Foto Seputar Dinas Pertanian</p>
        <div className="grid">
          {CustomDataGallery &&
            CustomDataGallery.map((item, index) => {
              return (
                <div className="grid-item">
                  <figure>
                    <img src={item} alt="" />
                    <figcaption>Image Title</figcaption>
                  </figure>
                </div>
              );
            })}
        </div>
      </div>
      <div className="content">
        <div className="section-header">
          <h1 className="font-video">Video Seputar Dinas Pertanian</h1>
        </div>
        <div className="video-gallery">
          {DataVideoGallery &&
            DataVideoGallery.map((item, index) => {
              return (
                <div className="gallery-item ">
                  <img
                    src={item.thumbnail}
                    alt="Mount Rainier"
                  />
                  <div className="gallery-item-caption">
                    {/*<div>*/}
                    <h2>{item.description}</h2>
                    <p>{item.created_by}</p>
                    {/*</div>*/}
                    <a
                      className="vimeo-popup"
                      href={'https://www.youtube.com/watch?v=' + item.url}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
