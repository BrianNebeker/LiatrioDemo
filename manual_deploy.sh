#!/bin/bash

# Build docker image
chmod +x ./local_docker_build.sh
./local_docker_build.sh latest

# Push docker image to Azure repository
chmod +x ./deploy/azure/azure_docker_build.sh
./deploy/azure/azure_docker_build.sh "$BUILD_NUMBER"

# Deploy application update to azure kubernetes cluster
chmod +x ./deploy/azure/kubeapply-demo-azure.sh
./deploy/azure/kubeapply-demo-azure.sh "$BUILD_NUMBER"
