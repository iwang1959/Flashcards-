import React from "react";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <video autoPlay loop muted className="loading-video">
        <source src="/loading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingScreen;
