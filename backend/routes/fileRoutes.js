const express = require('express');
const { uploadFile, downloadFile, getAllFiles, upload } = require('../controllers/fileController');

const router = express.Router();

// Upload route
router.post('/upload', upload.single('file'), uploadFile);

// Download route
router.get('/download/:filename', downloadFile);

// Get all files route
router.get('/all', getAllFiles); // New route to get all file names

module.exports = router;
