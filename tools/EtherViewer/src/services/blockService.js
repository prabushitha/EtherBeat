const blockModel = require('../models/blockModel');
const responseHandler = require('../utils/ResponseBuilder').handleResponse;
const getBlocks = (req, res) => {
    blockModel.getBlocks(50)
        .then((blocks) => {
            responseHandler(res, blocks, 200);
        })
        .catch((error)=>{
            responseHandler(res, error, 500);
        })
};

const getBlock = (req, res) => {
    blockModel.getBlock(req.params.block_number)
        .then((block) => {
            responseHandler(res, block, 200);
        })
        .catch((error)=>{
            responseHandler(res, error, 500);
        })
};

module.exports = {getBlocks, getBlock};