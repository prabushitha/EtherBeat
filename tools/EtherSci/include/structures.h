/*
 * Created by prabushitha on 8/5/18.
*/

#include <vector>
#include <iostream>


//Transaction Receipt
class TransactionReceipt {
public:
    long blockNumber;
    long transactionIndex;

    std::string blockHash;

    std::string status;
    double cumulativeGasUsed;
    std::string logsBloom;
    std::string transactionHash;
    std::string contractAddress; // if a contract creation tx, address of contract created otherwise empty
    double gasUsed;

};

//Transaction
class Transaction {
public:
    std::string hash;
    std::string nonce;
    double gasPrice;
    double gasLimit; // gas limit*gas price = max tx fee
    std::string to; // No TO address is getting for contact creation transactions
    double value; // in wei (1 ETH = 10^18 wei)
    std::string v;
    std::string r;
    std::string s;
    std::string init; // data
    std::string from;
};



// Block
class Block {
public:
    std::string parentHash;
    std::string sha3Uncles;
    std::string beneficiary;
    std::string stateRoot;
    std::string transactionsRoot;
    std::string receiptsRoot;
    std::string logsBloom;
    long difficulty;
    long number;
    double gasLimit;
    double gasUsed;
    std::string timestamp;
    std::string extraData;
    std::string mixHash;
    std::string nonce;

    std::string hash;
    std::vector<Transaction> transactions;
    std::vector<std::string> ommerHashes;
};
