#!/bin/bash
mkdir build
cp ./Docker/* ./buid/
cp ./Node/* ./build/
docker build -t brian/liatrodemo:test ./build