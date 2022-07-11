const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likesController');

router.post('/insert-like', likeController.insert);
router.post('/delete-like', likeController.deleteLike);

module.exports = router;
