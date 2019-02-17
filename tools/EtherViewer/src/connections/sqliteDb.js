const db = require('sqlite');
db.open('/etc/scorelab/databases/dbsqlite/ethereum_blockchain.db', { Promise });

module.exports = db;