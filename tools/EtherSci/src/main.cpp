/*
 * Created by prabushitha on 8/4/18.
*/
#include <cstdio>
#include <iostream>
#include "ethersci.h"

int main(int argc, char* argv[]) {
    EtherSci etherSci("/tmp/dbsqlite/ethereum_blockchain.db","/tmp/dbrocks");

    Block b = etherSci.getBlock(10);
    printf("hash = %s\n", &b.hash[0]);
    return 1;
}