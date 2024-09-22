import React, { useRef, useState, useEffect } from "react";

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null); // To store the captured image
  const [data, setData] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [isMovementDetected, setIsMovementDetected] = useState(false);
  const [lastMovementTime, setLastMovementTime] = useState(0);

  useEffect(() => {
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
        setResponseMessage("Error accessing the webcam: " + err.message);
      }
    };

    getWebcamStream();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  // Function to detect movement by comparing video frames
  const detectMovement = (prevImageData, currentImageData) => {
    if (!prevImageData || !currentImageData) return false;

    const pixelDiffThreshold = 100; // Sensitivity for movement detection
    let diffCount = 0;

    for (let i = 0; i < prevImageData.length; i += 4) {
      const rDiff = Math.abs(prevImageData[i] - currentImageData[i]);
      const gDiff = Math.abs(prevImageData[i + 1] - currentImageData[i + 1]);
      const bDiff = Math.abs(prevImageData[i + 2] - currentImageData[i + 2]);

      if (
        rDiff > pixelDiffThreshold ||
        gDiff > pixelDiffThreshold ||
        bDiff > pixelDiffThreshold
      ) {
        diffCount++;
      }

      if (diffCount > 100) {
        // Movement threshold
        return true;
      }
    }
    return false;
  };

  // Capture a picture 3 seconds after movement is detected
  useEffect(() => {
    let prevImageData = null;
    const interval = setInterval(() => {
      if (canvasRef.current && videoRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const currentImageData = ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        ).data;

        if (prevImageData && detectMovement(prevImageData, currentImageData)) {
          setIsMovementDetected(true);
          setLastMovementTime(Date.now());
        }

        prevImageData = currentImageData;
      }
    }, 100); // Check every 100ms for movement

    return () => clearInterval(interval);
  }, []);

  // Wait 3 seconds after movement detection to take a picture
  useEffect(() => {
    if (isMovementDetected) {
      const timeSinceLastMovement = Date.now() - lastMovementTime;

      if (timeSinceLastMovement >= 3000) {
        takePicture(); // Call the takePicture function after 3 seconds
        setIsMovementDetected(false); // Reset movement detection
      }
    }
  }, [isMovementDetected, lastMovementTime]);

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

      // Convert the canvas content to a data URL (image in base64)
      const imageDataUrl = canvas.toDataURL("image/png");
      setImageSrc(imageDataUrl); // Save the image for display

      try {
        const response = await fetch(
          "https://d51d-2001-569-58a1-8500-7cc8-ef3c-b866-f059.ngrok-free.app/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "anything",
            },
            body: JSON.stringify({ image: imageDataUrl }), // Send image as JSON
          }
        );

        if (!response.ok) {
          throw new Error("Error uploading the image");
        } else {
          const answer = await response.text();
          setData(answer); // Store the response data
        }
      } catch (error) {
        setResponseMessage("Error: " + error.message);
      }
    }
  };

  return (
    <div>
      <h2>Webcam Feed</h2>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "600px", height: "600px" }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />{" "}
      {/* Hidden canvas */}
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
      {responseMessage && <p>{responseMessage}</p>}{" "}
      {/* Error or response messages */}
    </div>
  );
};

export default Camera;
