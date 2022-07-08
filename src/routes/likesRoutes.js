const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likesController');

router.post('/insert-like', likeController.insert);
router.delete('/delete-by-id/:id', likeController.deleteById);

module.exports = router;
