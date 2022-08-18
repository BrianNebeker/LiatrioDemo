Liatrio REST API Demo

This demo returns at status with a current timestamp using a REST API interface.

GET: /api/status
Returns status message and current timestamp

GET: /api/status/response
Returns status message with Elapsed time to check the status

GET: /api/status/gmt
Returns status message with Start and End time as well as Elapsed time
      Times are stated in GMT                                       



This demo relies on infrastructure being in place:

1. Local Docker Installation for building Docker images.
2. Local Kubernetes for deploying the docker image and performing testing.
3. Cloud hosted Kubernetes for Production.
4. A local build environment with access to docker, the local Kubernetes, and the cloud Kubernetes.

This deployment was designed to automation via Jenkins or similar tool but can be manually deployed
using the manual_deploy.sh script.

The local Kubernetes environment is also optional if local testing is not required.

The deployment consists of three steps:
1. Build the docker image using the Dockerfile.
	local_docker_build.sh "{version}"

	Replace {version} with a version number.
	
  (The follow substeps me be added to work with your local environment.)
	a - Deploy the docker image to local Kubernetes
	b - Perform Validation testing


2. Push the docker the image to Azure repository
	azure_docker_build.sh "{version}"

  This script requires customization to setup the azure account login.

  
3. Deploy application update to azure kubernetes cluster
  kubeapply-demo-azure.sh

  This script requires customization to setup azure account login or it can be removed
  as the step is already accomplished in the previous step. This however depends on the
  token in the previous step still being valid which may not be true if this step is performed
  after enough time for the token to expire.