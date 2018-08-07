/*
 * Created by prabushitha on 8/4/18.
*/
#include "structures.h"
#include "rocksdb/db.h"
#include <sqlite3.h>

class EtherSci {
    rocksdb::DB* db_rocks{};
    rocksdb::Options options;
    sqlite3 *db_sqlite{};

public:
    explicit EtherSci(const char * sqlite_path, const char * rocksdb_path);
    ~EtherSci() {
        sqlite3_close(db_sqlite);
    }

    Block getBlock(long number);
    Block getBlock(std::string hash);
    Transaction getTransaction(std::string hash);
    TransactionReceipt getTransactionReceipt(std::string hash);
};

