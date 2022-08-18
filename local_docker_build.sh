#!/bin/bash
mkdir -p build
cp ./Docker/* ./build/
cp ./Node/* ./build/
sed -i 's/%BUILD%/$1/g' ./build/script.js
docker build -t demo-azure:$1 ./build