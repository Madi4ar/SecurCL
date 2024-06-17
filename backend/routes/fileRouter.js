const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware');
const fileController = require('../controllers/fileController');

router.post('/', fileController.create);
router.get('/', fileController.getAll);
router.delete('/:id', fileController.delete);

module.exports = router;
