const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const fileRouter = require('./fileRouter')


router.use('/user', userRouter);
router.use('/main', fileRouter)

module.exports = router;
