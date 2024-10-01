// src/App.jsx
import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";

import "./App.css";

const App = () => {
  const [image, setImage] = useState("");

  const handleImageChange = (base64) => {
    setImage(base64);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Upload with Drag & Drop</h1>
      </header>
      <main>
        <ImageUpload
          label="Drag & Drop an Image Here"
          onChange={handleImageChange}
          value={image}
          disabled={false}
        />
        {image && (
          <div className="success-message">
            <p>Image uploaded successfully!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
