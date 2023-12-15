const router = require('express').Router();

const studentRoutes = require('./student');
const voteRoutes = require('./vote');

router.use('/students', studentRoutes);
router.use('/votes', voteRoutes);

module.exports = router;
