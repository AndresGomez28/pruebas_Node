const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/api/v1/users', userController.getAllUsers);
router.get('/api/v1/users/id/:id', userController.getUserById);
router.get('/api/v1/users/nombres/:nombre', userController.getUserByName);
router.post('/api/v1/users', userController.createUser);
router.patch('/api/v1/users/update/:nombre', userController.updateUser);
router.delete('/api/v1/users/delete/:nombre', userController.deleteUser);


module.exports = router;
