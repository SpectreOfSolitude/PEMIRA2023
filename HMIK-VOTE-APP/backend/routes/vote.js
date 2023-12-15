const router = require('express').Router();

const voteServices = require('../services/vote');

router.get('/', voteServices.getAll);
router.put('/', voteServices.updateVoteAmount);

module.exports = router;
