const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { createFileEntry, getFileByName, getAllFileNames } = require('../models/File');

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Make sure the 'uploads' directory exists
  },
  filename: (req, file, cb) => {
    const fileName = `${uuidv4()}-${file.originalname}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage });

// File upload logic
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = req.file.path;
    const fileName = req.file.originalname;
    const version = 1;  // You can add file versioning logic here if needed

    // Insert the file entry into the database
    await createFileEntry(fileName, filePath, version);

    // Send response after successful upload
    res.status(201).json({ message: 'File uploaded successfully', file: req.file });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Error uploading file' });
  }
};

// File download logic
const downloadFile = async (req, res) => {
  try {
    const fileName = req.params.filename;

    // Fetch file information from the database
    const file = await getFileByName(fileName);

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Construct the correct file path
    const filePath = path.resolve(__dirname, '../uploads', path.basename(file.path));

    // Attempt to download the file
    res.download(filePath, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        return res.status(404).json({ error: 'Error downloading file' });
      }
    });
  } catch (error) {
    console.error('Error retrieving file:', error);
    res.status(500).json({ error: 'Error retrieving file' });
  }
};

const getAllFiles = async (req, res) => {
  try {
    // Fetch all file names from the database
    const files = await getAllFileNames();

    // Map to extract only the file names
    const fileNames = files.map(file => file.name); 

    res.status(200).json(fileNames); // Respond with the array of file names
  } catch (error) {
    console.error('Error retrieving files:', error);
    res.status(500).json({ error: 'Error retrieving files' });
  }
};

module.exports = { uploadFile, downloadFile, upload, getAllFiles };
