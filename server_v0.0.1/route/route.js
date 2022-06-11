import express from 'express';
import { logInUser, registerNewUser, getAll, getUserProfile, setUserProfile, signOutUser } from '../controller/profileController.js';
import { getUsers, addUser, getUserById, edittUser, deleteUser } from '../controller/userController.js';
import auth from '../middleware/authenticate.js'
const route = express.Router();

//Users
route.get('/user', getAll);
route.post('/register', registerNewUser);
route.post('/signin', logInUser);
route.put('/profile/:id', setUserProfile)
route.get('/profile', auth , getUserProfile)
route.get('/signout', auth, signOutUser)

//About Universities
route.get('/', getUsers);
route.post('/add', addUser);
route.get('/:id', getUserById);
route.put('/:id', edittUser);
route.delete('/:id', deleteUser);
export default route;  