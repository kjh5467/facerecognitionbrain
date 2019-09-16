import React from "react";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          src={"imageUrl"}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.topRow,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
