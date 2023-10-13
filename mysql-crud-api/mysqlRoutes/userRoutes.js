
const express = require('express');
const router = express.Router();
const userController = require('../mysqlControllers/userController');

router.get('/user-details/:id', userController.getUserById);
router.post('/register', userController.createUser);
router.put('/update-user-details/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.post('/login',userController.login);
module.exports = router;
