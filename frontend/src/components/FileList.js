import { useState, useEffect } from 'react';
import axios from 'axios';
import File from './File';
import deleteFile from './DeletFile';

export default function FileList({ file }) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/main');

        if (response.status === 200) {
          const filesWithSize = response.data.map((file) => ({
            ...file,
            fileSizeBytes: file.data.data.length,
          }));
          setFiles(filesWithSize);
        } else {
          setError('Failed to fetch files');
        }
      } catch (error) {
        console.error('Error fetching files:', error);
        setError('Error fetching files');
      }
    };

    fetchFiles();
  }, []);

  const handleDelete = async (fileId) => {
    try {
      const response = await deleteFile(fileId);
      if (response.status === 200) {
        const updatedFiles = files.filter((file) => file.id !== fileId);
        setFiles(updatedFiles);
      } else {
        setError('Failed to delete file');
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      setError('Error deleting file');
    }
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {files.length === 0 ? (
        <p className="font-bold text-center text-xl mt-3">No data</p>
      ) : (
        <ul className="flex flex-wrap w-full">
          {files.map((file) => (
            <File
              onDelete={() => handleDelete(file.id)}
              key={file.id}
              title={file.file}
              size={file.fileSizeBytes}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
