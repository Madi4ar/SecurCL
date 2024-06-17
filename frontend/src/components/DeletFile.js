import axios from 'axios';

async function deleteFile(fileId) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/main/${fileId}`
    );

    return response;
  } catch (error) {
    throw error;
  }
}

export default deleteFile;
