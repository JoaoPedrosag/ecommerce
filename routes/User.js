const express = require('express');
const app = express();
const UserController = require('../controllers/UsersController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
app.use(express.json());
app.post('/auth/register', UserController.insertUser); 
app.post('/auth/login', UserController.loginUser);
app.get("/user/:id",AuthMiddleware.checkUser, UserController.checkAuth );



module.exports = app;