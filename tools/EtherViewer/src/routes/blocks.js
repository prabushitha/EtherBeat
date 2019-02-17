const router = require("express").Router();
const blockService = require('../services/blockService');

router.get('/', blockService.getBlocks);
router.get('/:block_number', blockService.getBlock);

module.exports = router;