def s3User = 'Front-Prod'
def s3BucketLatam = 'tudiscovery-com-webbucket-ndgh158ipjre/special/hermanos-la-obra-tour-en-vivo'
def s3BucketBrasil = 'cf-discoverybrasil-webbucket-m82eddj5q9y7/special/irmaos-obra-no-brasil-live'
def metaData = []

if (env.JOB_NAME == 'Front-Static-Contest-Property-Brothers-DEV' ) {
  s3User = 'Front-Develop'
  s3BucketLatam = 'dev-latam-discovery.com/special/hermanos-la-obra-tour-en-vivo'
  s3BucketBrasil = 'dev-brasil-discovery.com/special/irmaos-obra-no-brasil-live'
  metaData = [[key: 'Cache-Control', value: 'no-cache']]
}

def s3UploadFiles(profileName, bucket, userMetadata) {
    s3Upload consoleLogLevel: 'INFO', dontWaitForConcurrentBuildCompletion: false, entries: [[bucket: bucket, excludedFile: '', flatten: false, gzipFiles: false, keepForever: false, managedArtifacts: false, noUploadOnFailure: true, selectedRegion: 'us-east-1', showDirectlyInBrowser: true, sourceFile: 'build/**/*', storageClass: 'STANDARD', uploadFromSlave: false, useServerSideEncryption: false, userMetadata: userMetadata]], pluginFailureResultConstraint: 'FAILURE', profileName: profileName, userMetadata: []
}

pipeline {
    agent any
    stages {
      stage('Install') {
        steps {
          sh 'yarn install'
        }
      }
      stage('Build n Upload Latam') {
        steps {
          sh 'yarn build'
          s3UploadFiles(s3User, s3BucketLatam, metaData)
        }
      }
      stage('Build n Upload BR') {
        steps {
          sh 'yarn build:br'
          s3UploadFiles(s3User, s3BucketBrasil, metaData)
        }
      }
    }
}
