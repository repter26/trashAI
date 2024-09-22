import React, { useRef, useState, useEffect } from "react";

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null); // To store the captured image
  const [data, setData] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    // Access the webcam stream
    const getWebcamStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the webcam: ", err);
      }
    };

    getWebcamStream();

    // Cleanup: stop the video stream when the component is unmounted
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const takePicture = async () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      // Set canvas width and height to match the video dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current video frame onto the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas content to a data URL (image)
      const imageDataUrl = canvas.toDataURL("image/png");
      setImageSrc(imageDataUrl); // Save the image for display

      try {
        const response = await fetch(
          "https://d51d-2001-569-58a1-8500-7cc8-ef3c-b866-f059.ngrok-free.app/",
          {
            method: "POST",
            headers: {
              "ngrok-skip-browser-warning": "anything",
            },
            body: imageDataUrl, // The FormData object contains the file
          }
        );

        if (!response.ok) {
          throw new Error("Error uploading the image");
        } else {
          let answer = await response.text();
          console.log(answer);
          setData(answer);
        }
      } catch (error) {
        setResponseMessage("Error: " + error.message);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center align-center">
      <h2>Trash Screen</h2>
      <video ref={videoRef} autoPlay playsInline className="w-auto" />
      <button onClick={takePicture}>Take Picture</button>
      <div className="relative mt-6">
        <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-xl animate-pulse"></div>
        <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulseCircle"></div>
      </div>
      <canvas ref={canvasRef} style={{ display: "none" }} />{" "}
      {/* Hidden canvas */}
      {/* Display the captured image */}
      {imageSrc && (
        <div className="flex flex-col items-center mt-4">
          <h3>Captured Image:</h3>
          <img
            src={imageSrc}
            alt="Captured"
            style={{ maxWidth: "500px", marginTop: "10px" }}
          />
          <p>{data}</p>

          {/* Siri-like Response Circle */}
        </div>
      )}
    </div>
  );
};

export default Camera;
