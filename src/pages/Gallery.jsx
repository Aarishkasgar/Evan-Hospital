import React from "react";
import data from "../galleryData";
import GalleryCards from "../components/GalleryCards";

const Gallery = () => {
  const galleryData = data;
  return (
    <div>
      <div className="app">
        <GalleryCards galleryData={galleryData} />
      </div>
    </div>
  );
};

export default Gallery;
