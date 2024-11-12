const db = require('../config/db');

// Function to create a new file entry in the database
const createFileEntry = async (fileName, filePath, version) => {
  const sql = 'INSERT INTO files (name, path, version) VALUES (?, ?, ?)';
  await db.execute(sql, [fileName, filePath, version]);
};

// Function to get a file entry by file name
const getFileByName = async (fileName) => {
  const [rows] = await db.execute('SELECT * FROM files WHERE name = ?', [fileName]);
  return rows.length > 0 ? rows[0] : null;
};
const getAllFileNames = async () => {
  const [rows] = await db.execute('SELECT name FROM files');
  return rows;
};

module.exports = { createFileEntry, getFileByName, getAllFileNames };
