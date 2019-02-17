const sqliteDb = require('../connections/sqliteDb');
const getBlocks = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            const blocks = await sqliteDb.all(`SELECT * FROM block LIMIT ${limit}`);
            resolve(blocks)
        } catch (err) {
            reject(err);
        }
    });

};

const getBlock = (num) => {
    return new Promise(async (resolve, reject) => {
        try {
            const blocks = await sqliteDb.all(`SELECT * FROM block WHERE id = ${num}`);
            if (blocks.length > 0) {
                resolve(blocks[0]);
            } else {
                reject("Invalid block number");
            }

        } catch (err) {
            reject(err);
        }
    });

};

module.exports = {getBlocks, getBlock};
