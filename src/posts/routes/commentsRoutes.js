const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentsController');

router.post('/insert-comment', commentController.insert);
router.delete('/delete-by-id/:id', commentController.deleteById);

module.exports = router;
