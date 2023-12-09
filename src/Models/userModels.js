const mysql = require('mysql2');

class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

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

// Function to retrieve users from the MySQL database
const getUsersFromDatabase = async () => {
  try {
    const results = await executeQuery('SELECT * FROM users');
    return results;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  User,
  getUsersFromDatabase,
};
