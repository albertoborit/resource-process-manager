pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/albertoborit/resource-process-manager', branch: 'main')
      }
    }

    stage('log') {
      steps {
        sh 'ls -la'
      }
    }

  }
}