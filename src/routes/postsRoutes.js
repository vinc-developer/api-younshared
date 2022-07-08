const express = require('express');
const router = express.Router();
const postsController = require("../controllers/postsController");

router.get('/get-all-home', postsController.getAllHome);
router.get('/get-all-by-user/:id', postsController.getAllByUser);
router.post('/insert-new-post', postsController.insert);
router.put('/update-by-id/:id', postsController.updateById);
router.delete('/delete-by-id/:id', postsController.deleteById);

module.exports = router;
