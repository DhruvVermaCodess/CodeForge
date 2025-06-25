import React, { useState } from 'react';

const AdminPage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith('.zip')) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please upload a valid .zip file');
    }
  };

  const handleUpload = () => {
    if (!file) {
      setError('No file selected');
      return;
    }
    // TODO: Upload logic goes here (e.g., FormData + fetch/axios)
    console.log('Uploading:', file);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Upload ZIP File</h1>
      
      <input
        type="file"
        accept=".zip"
        onChange={handleFileChange}
        className="mb-4"
      />

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Upload
      </button>

      {file && (
        <p className="mt-4 text-sm text-gray-700">
          Selected: <strong>{file.name}</strong>
        </p>
      )}
    </div>
  );
};

export default AdminPage;
