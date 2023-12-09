const mysql = require('mysql2');
const { User } = require('../Models/userModels');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_mysql_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to execute SQL queries
const executeQuery = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const createUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    const result = await executeQuery('INSERT INTO users (name, age) VALUES (?, ?)', [name, age]);
    res.send('User added to the MySQL database');
  } catch (error) {
    res.status(500).send('Error adding user to the MySQL database');
  }
};

const readUsers = async (req, res) => {
  try {
    const results = await executeQuery('SELECT * FROM users');
    res.json(results);
  } catch (error) {
    res.status(500).send('Error fetching users from the MySQL database');
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { name, age } = req.body;
    await executeQuery('UPDATE users SET name = ?, age = ? WHERE id = ?', [name, age, userId]);
    res.send('User updated in the MySQL database');
  } catch (error) {
    res.status(500).send('Error updating user in the MySQL database');
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    await executeQuery('DELETE FROM users WHERE id = ?', [userId]);
    res.send('User deleted from the MySQL database');
  } catch (error) {
    res.status(500).send('Error deleting user from the MySQL database');
  }
};

module.exports = {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
};
