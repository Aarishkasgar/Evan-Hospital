import React from "react";

const GalleryCard = ({ id, image }) => {
  return (
    <div className="gallery-card">
      <img src={image} className="gallery-img" alt="img" />
    </div>
  );
};

export default GalleryCard;
