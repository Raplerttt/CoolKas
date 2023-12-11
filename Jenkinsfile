pipeline {
    agent any

    triggers {
        pollSCM('*/2 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline has succeeded! You can add more actions here.'
        }
        failure {
            echo 'Pipeline has failed! You can add more actions here.'
        }
    }
}
