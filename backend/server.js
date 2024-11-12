const express = require('express');
const cors = require('cors');
 // Enable all CORS requests

const fileRoutes = require('./routes/fileRoutes');
const app = express();
const port = 3001;

app.use(cors());

// File upload/download routes
app.use('/api/files', fileRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
