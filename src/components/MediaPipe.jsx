import React from "react";
import { useRef } from "react";

const MediaPipe = () => {
    const canvasRef=useRef(null);
    const inputVideoRef=useRef(null);
  return (
    <div style={{ position: "Relatvie" }}>
      <video
        id="webcam"
        style={{ position: "absolute" }}
        autoPlay
        playsInline
        ref={inputVideoRef}
      ></video>
      <canvas
        ref={canvasRef}
        id="output_canvas"
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      ></canvas>
    </div>
  );
};

export default MediaPipe;