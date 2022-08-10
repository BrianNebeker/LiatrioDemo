pipeline {
    agent docker
    stages {
        stage('Build') { 
            steps {
                // Build docker image
                local_docker_build.sh
            }
        }
        stage('Test') { 
            steps {
                // 
            }
        }
        stage('Deploy') { 
            steps {
                // Build docker image on AWS
                aws_docker_build.sh
            }
        }
    }
}