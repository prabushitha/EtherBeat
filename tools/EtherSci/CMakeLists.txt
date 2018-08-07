cmake_minimum_required(VERSION 3.10)
#Define project name
set(PROJECT_NAME "EtherSci")

project(${PROJECT_NAME})

set(CMAKE_CXX_STANDARD 11)

include_directories(
        include
)
set(SOURCES
        src/utils.cpp
        src/ethersci.cpp
)
set(HEADERS
        include/utils.h
        include/structures.h
        include/ethersci.h
        )


# create the executable
add_executable(${PROJECT_NAME} src/main.cpp ${SOURCES} ${HEADERS})
target_link_libraries (${PROJECT_NAME} rocksdb sqlite3 ${BASE_LIBS})

