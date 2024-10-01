// src/components/ImageUpload.jsx
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaRegImages, FaTimesCircle } from "react-icons/fa";


const ImageUpload = ({ onChange, label, value, disabled }) => {
  const [base64, setBase64] = useState(value || "");
  const [error, setError] = useState(null);

  const handleChange = useCallback(
    (base64) => {
      onChange(base64);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        setError("Only JPEG and PNG images are allowed.");
        return;
      }

      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = (event) => {
          const result = event.target.result;
          setBase64(result);
          handleChange(result);
          setError(null);
        };
        reader.readAsDataURL(file);
      }
    },
    [handleChange]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
    onDrop: handleDrop,
    disabled: disabled,
  });

  const removeImage = () => {
    setBase64("");
    handleChange("");
    setError(null);
  };

  return (
    <div className="image-upload-container">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""} ${
          isDragReject ? "reject" : ""
        } ${disabled ? "disabled" : ""}`}
      >
        <input {...getInputProps()} />
        <FaRegImages size={50} />
        <p>{label}</p>
        {isDragActive && !isDragReject && <p className="feedback">Drop the image here...</p>}
        {isDragReject && <p className="feedback error">Unsupported file type.</p>}
      </div>
      {base64 && (
        <div className="preview">
          <img src={base64} alt="Uploaded" className="uploaded-image" />
          <button className="remove-button" onClick={removeImage} aria-label="Remove Image">
            <FaTimesCircle size={20} />
          </button>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ImageUpload;
