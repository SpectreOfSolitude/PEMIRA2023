const router = require('express').Router();

const studentServices = require('../services/student.js');

router.post('/check/', studentServices.checkNIMAvailable);
router.post('/validate/', studentServices.validateUniqueCode);
router.post('/vote/', studentServices.updateIsVote);

module.exports = router;