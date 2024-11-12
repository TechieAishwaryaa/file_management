import React, { useEffect, useState } from 'react';

const AllFiles = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/files/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setFiles(data))
      .catch((error) => {
        console.error('Error fetching files:', error);
        setError(error.message); // Store the error message in state
      });
  }, []);

  return (
    <div style={styles.content}>
      <h2 style={styles.heading}>All Files</h2>
      {error ? ( // Render error message if exists
        <p style={styles.error}>{error}</p>
      ) : (
        <ul style={styles.fileList}>
          {files.map((fileName, index) => ( // Directly use fileName since it's a string
            <li key={index} style={styles.fileItem}>
              <span>{fileName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Add your styles here or reuse from Download.js
const styles = {
  content: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  fileList: {
    listStyleType: 'none',
    padding: 0,
  },
  fileItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '16px',
  },
};

export default AllFiles;
