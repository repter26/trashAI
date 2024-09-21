// src/Camera.js
import React, { useEffect, useRef } from 'react';

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera: ", error);
      }
    };

    getVideo();

    return () => {
      if (videoRef.current) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop()); // Stop all video tracks
      }
    };
  }, []);

  return (
    <div>
      <h1>Live Camera Feed</h1>
      <video ref={videoRef} 
      autoPlay 
      style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Camera;
