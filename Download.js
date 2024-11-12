import React, { useState } from 'react';

const Download = () => {
  const [filename, setFilename] = useState('');

  const handleDownload = async () => {
    window.location.href = `http://localhost:3001/api/files/download/${filename}`;
  };

  return (
    <div style={styles.container}>
      {/* Download Section */}
      <div style={styles.content}>
        <h2 style={styles.heading}>Download File</h2>
        <input
          type="text"
          placeholder="Enter file name"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleDownload} style={styles.button}>Download</button>
      </div>
    </div>
  );
};

// Internal CSS Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: '20px',
  },
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
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
};

export default Download;
