import React from "react";
// import ComingSoon from "../assets/InternationalPage/comingsoon.jpg";
// import "../components/InternationalPatients.css";
import "../components/VideoGallery.css";
import "../components/TitleBanner.css";
// import banner from "../assets/AboutPage/banner.jpg";
// import videoData from '../data/videoData';
import videoData from "../videoData";

const VideoGallery = () => {
  return (
    <div className="video-gallery-container">
      <div
        className="video-gallery"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {videoData.map((video) => (
          <div key={video.id}>
            <iframe
              className="video-card"
              width="100%"
              height="350"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p style={{ textAlign: "center", marginTop: "8px" }}>
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
