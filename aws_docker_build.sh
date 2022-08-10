#!/bin/bash
// Connect docker to Amazon Repo
sudo docker login -u AWS -p $(aws ect get-login-password --region-us-west-1) 037452191287.dkr.ecr.us-west-1.amazonaws.com

// Build docker image
mkdir awsbuild
cp ./Docker/* ./awsbuid/
cp ./Node/* ./awsbuild/

docker build -t brian ./awsbuild
docker tag brian:latest 037452191287.dkr.ecr.us-west-1.amazonaws.com/brian:latest
docker push 037452191287.dkr.ecr.us-west-1.amazonaws.com/brian:latest
