pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
         stage('Clone repository') { 
            steps { 
                script{
                checkout scm
                }
            }
        }

        stage('Build') { 
            steps { 
                script{
                 app = docker.build("donotknowwhattoeat")
                }
            }
        }
        stage('Test'){
            steps {
                 echo 'Empty'
            }
        }
        stage('Deploy') {
            steps {
                script{
                        docker.withRegistry('https://708243111202.dkr.ecr.eu-north-1.amazonaws.com', 'ecr:eu-north-1:aws-credentials') {
                    app.push("django")
                    }
                }
            }
        }
    }
}
