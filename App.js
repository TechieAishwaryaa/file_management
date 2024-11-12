import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Upload from './components/Upload';
import Download from './components/Download';
import AllFiles from './components/AllFiles'; // Make sure to import this component

function App() {
  return (
    <Router>
      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <h1 style={styles.logo}>File Management System</h1>
          <nav style={styles.nav}>
            <Link to="/upload" style={styles.navLink}>Upload</Link>
            <Link to="/download" style={styles.navLink}>Download</Link>
            <Link to="/all-files" style={styles.navLink}>All Files</Link>
          </nav>
        </header>

        {/* Routes for Upload, Download, and All Files */}
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/download" element={<Download />} />
          <Route path="/all-files" element={<AllFiles />} />
        </Routes>
      </div>
    </Router>
  );
}

// Internal CSS Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '40px',
  },
  logo: {
    color: '#fff',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '5px 10px',
    borderRadius: '3px',
    backgroundColor: '#444',
    transition: 'background-color 0.3s',
  },
  navLinkHover: {
    backgroundColor: '#555',
  },
};

export default App;
