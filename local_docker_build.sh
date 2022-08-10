#!/bin/bash
mkdir -p build
cp ./Docker/* ./build/
cp ./Node/* ./build/
docker build -t brian/liatrodemo:test ./build