
const userModel = require('../mysqlModels/userModel');
const hashPassword = require("../../config/hashPassword");
const generateToken = require("../../config/generateToken");
const decryptPassword = require("../../config/decryptPassword");

const getUserById = (req, res) => {
  const userId = req.params.id;
  userModel.getUserById(userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(result);
  });
};

const createUser = async (req, res) => {
  const user = req.body;
  user.password = await hashPassword(user.password);
  userModel.createUser(user, (err, result) => {
    if (err) {
      console.log(err);
      console.log(err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'User created successfully', id: result.insertId });
  });
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  
  if (updatedUser.password) {
    const hashedPassword = await hashPassword(updatedUser.password);
    updatedUser.password = hashedPassword;
  }

  userModel.updateUser(userId, updatedUser, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'User updated successfully' });
  });
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  userModel.deleteUser(userId, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'User deleted successfully' });
  });
};


const login = async (req, res) => {
  const { email, password } = req.body;

  userModel.loginUser(email, async (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (user.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    try{
    const result = user[0];
    const hashedPasswordFromDatabase = result['password'];
    const isPasswordSame = await decryptPassword(password,hashedPasswordFromDatabase);
    
    if (isPasswordSame) {
      const token = await generateToken(result['id']);
      return res
        .status(200)
        .json({ status: "success", message: "login successful", token: token });
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "invalid credentials" });
    }
  }catch(error){
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
  });
};

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login
};
