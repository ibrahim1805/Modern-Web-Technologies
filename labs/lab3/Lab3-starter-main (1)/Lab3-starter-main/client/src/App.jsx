import { useState } from "react";
import "./App.css"; 

const App = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [displayDogImage, setDisplayDogImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  const handleMultipleFileChange = (e) => {
    setMultipleFiles([...e.target.files]);
  };

  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);
  
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }
  
      const imageBlob = await response.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };
  
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", singleFile);
      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchMultipleFiles = async () => {
    const formData = new FormData();

    multipleFiles.forEach((file) => {
      formData.append("files", file);
    });
  
    try {
      const response = await fetch(`http://localhost:8000/save/multiple`, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Images upload failed");
      }
      fetchMultipleImages();
    } catch (error) {
      console.log("Error uploading files:", error);
    }
  };

  const fetchMultipleImages = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/multiple`);
      const data = await response.json();
      const imageUrls = data.map((filename) => `http://localhost:8000/fetch/file/${filename}`);
      setDisplayImages(imageUrls);  
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  };

  const fetchDogImage = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      setDisplayDogImage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Image Fetch & Upload</h1>
      <p className="message">{message}</p>
      
      <div className="section">
        <h2>Fetch Single Random Image</h2>
        <button onClick={fetchSingleFile} className="btn">Fetch Single File</button>
        {displayImage && <img src={displayImage} alt="Single File" className="image" />}
      </div>

      <div className="section">
        <h2>Upload Single File</h2>
        <form onSubmit={handleSubmitSingleFile}>
          <input type="file" onChange={handleSingleFileChange} className="file-input" />
          <button type="submit" className="btn">Upload Single File</button>
        </form>
      </div>

      <div className="section">
        <h2>Upload Multiple Files</h2>
        <input
          type="file"
          onChange={handleMultipleFileChange}
          className="file-input"
          multiple
        />
        <button onClick={fetchMultipleFiles} className="btn">Upload Multiple Files</button>
      </div>

      <div className="section">
        <h2>Fetch Multiple Files</h2>
        <button onClick={fetchMultipleImages} className="btn">Fetch Multiple Files</button>
        <div className="image-grid">
          {displayImages.length > 0 ? (
            displayImages.map((imageUrl, index) => (
              <img key={index} src={imageUrl} className="image" alt={`File ${index}`} />
            ))
          ) : (
            <p>No images to display yet.</p>
          )}
        </div>
      </div>

      <div className="section">
        <h2>Fetch Random Dog Image</h2>
        <button onClick={fetchDogImage} className="btn">Fetch Dog</button>
        {displayDogImage && <img src={displayDogImage} className="image" alt="Dog" />}
      </div>
    </div>
  );
};

export default App;


