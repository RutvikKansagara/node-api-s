
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'encircle',
});

connection.connect();

const getUserById = (userId, callback) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  connection.query(query, [userId], callback);
};

const createUser = (user, callback) => {
  const query = 'INSERT INTO users SET ?';
  connection.query(query, user, callback);
};

const updateUser = (userId, updatedUser, callback) => {
  const query = 'UPDATE users SET ? WHERE id = ?';
  connection.query(query, [updatedUser, userId], callback);
};

const deleteUser = (userId, callback) => {
  const query = 'DELETE FROM users WHERE id = ?';
  connection.query(query, [userId], callback);
};

const loginUser = (email,callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  connection.query(query,[email],callback);
}



module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};
