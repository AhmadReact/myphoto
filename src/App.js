import React from "react";
import img from "./assets/profileimage.png";

const DownloadImage = () => {
  const imageName = "profileimage.png"; // Replace with your image name
  const imagePath = `./assets/${imageName}`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imagePath;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Download Image
      </button>
    </div>
  );
};

export default DownloadImage;
