import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('User is not authenticated');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', '1');

    try {
      const response = await axios.post(
        'http://localhost:3000/api/main',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setMessage('File uploaded successfully');
      } else {
        setError('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file');
    }
  };

  return (
    <div className="w-full border border-[#ccc] py-2 h-80 mt-3 flex flex-col items-center justify-center rounded-xl border-dotted">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="file" onChange={handleFileChange} />
        <Button title="Upload" className="" type="submit">
          Upload
        </Button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}
