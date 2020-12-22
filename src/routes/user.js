import express from 'express';
import UserController from '../controllers/UserController.js';

const user = express.Router();

user.post('/', UserController.createUser);

export default user;