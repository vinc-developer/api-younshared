const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/get-by-id/:id', userController.getById);
router.put('/update-by-id/:id', userController.updateById);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
