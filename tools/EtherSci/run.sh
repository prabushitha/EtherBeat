#!/usr/bin/env bash

export LD_LIBRARY_PATH=/usr/local/lib

rm -rf build
mkdir build
cd build
cmake ..
make

./EtherSci
