/*
 * Created by prabushitha on 8/4/18.
*/


#include "ethersci.h"
#include "utils.h"
#include <cstdio>

EtherSci::EtherSci(const char * sqlite_path, const char * rocksdb_path) {
    options.create_if_missing = true;
    rocksdb::Status status = rocksdb::DB::Open(options, rocksdb_path, &db_rocks);
    auto rc = sqlite3_open((char *)sqlite_path, &db_sqlite);

    if (rc != SQLITE_OK || !status.ok()) {
        std::cout << "!sqlite error" << std::endl;
        exit;
    }
}

Block EtherSci::getBlock(long number) {
    Block block = Block();

    sqlite3_stmt * stmt = nullptr;
    int rc = sqlite3_prepare(db_sqlite, "SELECT * FROM block WHERE id=?", -1, &stmt, 0);
    sqlite3_bind_int64(stmt, 1, number);

    if(rc != SQLITE_OK)
    {
        return block;
    }

    rc = sqlite3_step(stmt);
    if (rc != SQLITE_OK) {
        return block;
    }

    block.number = sqlite3_column_int64(stmt, 0);

    block.hash = std::string((char *)sqlite3_column_text(stmt, 1));

    block.parentHash = std::string((char *)sqlite3_column_text(stmt, 2));
    block.sha3Uncles = std::string((char *)sqlite3_column_text(stmt, 3));
    block.beneficiary = std::string((char *)sqlite3_column_text(stmt, 4));
    block.stateRoot = std::string((char *)sqlite3_column_text(stmt, 5));
    block.transactionsRoot = std::string((char *)sqlite3_column_text(stmt, 6));
    block.receiptsRoot = std::string((char *)sqlite3_column_text(stmt, 7));
    block.logsBloom = std::string((char *)sqlite3_column_text(stmt, 8));

    block.difficulty = sqlite3_column_int(stmt, 9);
    block.gasLimit = sqlite3_column_int(stmt, 10);
    block.gasUsed = sqlite3_column_int(stmt, 11);

    block.timestamp = std::string((char *)sqlite3_column_text(stmt, 12));
    block.extraData = std::string((char *)sqlite3_column_text(stmt, 13));
    block.mixHash = std::string((char *)sqlite3_column_text(stmt, 14));
    block.nonce = std::string((char *)sqlite3_column_text(stmt, 15));

    sqlite3_finalize(stmt);

    return block;
}

Block EtherSci::getBlock(std::string hash) {
    return Block();
}

Transaction EtherSci::getTransaction(std::string hash) {
    return Transaction();
}

TransactionReceipt EtherSci::getTransactionReceipt(std::string hash) {
    return TransactionReceipt();
}

