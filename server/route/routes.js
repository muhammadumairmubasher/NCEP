import express from 'express';
import {getUsers,addUser, getUserById, edittUser,deleteUser} from '../controller/user-controller.js';
const route=express.Router();

route.get('/',getUsers)
route.post('/add',addUser);
route.get('/:id',getUserById);
route.put('/:id',edittUser);
route.delete('/:id', deleteUser);

export default route;