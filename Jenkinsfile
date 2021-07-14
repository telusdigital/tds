String buildVersion = env.BUILD_NUMBER

try {
  String gitCommitId

  stage('Checkout') {
    node {
      sh "oc project ${env.PROJECT_NAME}"

      checkout scm
      stash includes: 'openshift/*.sh', name: 'scripts'

      String gitCommitNum = sh(returnStdout: true, script: "git rev-list HEAD --count").trim()
      String gitShortId = sh(returnStdout: true, script: "git rev-parse --short HEAD").trim()
      buildVersion = gitCommitNum + '-' + gitShortId

      gitCommitId = sh(returnStdout: true, script: "git rev-parse HEAD").trim()
    }
  }

  stage('Apply Templates') {
    node {
      String currentBranch = sh(
        returnStdout: true,
        script: "oc get bc tds-pipeline -o='jsonpath={.spec.source.git.ref}'"
      ).trim()

      sh("""
        oc apply -f openshift/openshift-template.yml
        oc process tds-pipeline BRANCH=${currentBranch} | oc apply -f -
      """)
    }
  }

  stage('Build') {
    build(
      name: 'tds',
      buildVersion: buildVersion,
      gitCommitId: gitCommitId
    )
  }

  stage('Test') {
    test(
      name: 'tds',
      buildVersion: buildVersion
    )
  }

  stage('Deploy Staging') {
    deploy(
      name: 'tds',
      buildVersion: buildVersion,
      environment: 'staging'
    )
  }

  stage('Deploy Prod Trigger') {
    inputUrl = env.BUILD_URL ? "(${env.BUILD_URL}deploy-prod-trigger)" : ''
    notifyBuild(
      message: "Build is ready for Production ${inputUrl}",
      color: '#0000FF',
      buildVersion: buildVersion
    )
    timeout(time:1, unit:'DAYS') {
      input 'Deploy to Production?'
    }
  }

  stage('Deploy Production') {
    deploy(
      name: 'tds',
      buildVersion: buildVersion,
      environment: 'production'
    )
  }

  currentBuild.result = 'SUCCESS'
}
catch (org.jenkinsci.plugins.workflow.steps.FlowInterruptedException flowError) {
  currentBuild.result = 'ABORTED'
}
catch (err) {
  currentBuild.result = 'FAILURE'
  consoleUrl = env.BUILD_URL ? "(${env.BUILD_URL}console)" : '';
  notifyBuild(
    message:  "Build failed ${consoleUrl}",
    color: '#FF0000',
    buildVersion: buildVersion
  )
  throw err
}
finally {
  if (currentBuild.result == 'SUCCESS') {
    notifyBuild(
      message: "Build successful",
      color: '#00FF00',
      buildVersion: buildVersion
    )
  }
}

def build(Map attrs) {
  node {
    unstash 'scripts'
    ansiColor('xterm') {
      sh("./openshift/run-build.sh ${attrs.name} ${attrs.buildVersion} ${attrs.gitCommitId}")
    }
  }
}

def test(Map attrs) {
  node {
    unstash 'scripts'
    sh("./openshift/run-test.sh ${attrs.name} ${attrs.buildVersion}")
  }
}

def deploy(Map attrs) {
  node {
    unstash 'scripts'
    sh("./openshift/run-deploy-docs.sh ${attrs.name} ${attrs.buildVersion} ${attrs.environment}")
  }
}

def notifyBuild(Map attrs) {
  node {
    slackSend(
      color: attrs.color,
      message: "${env.JOB_NAME} [${attrs.buildVersion}]\n${attrs.message}",
      teamDomain: 'telusdigital',
      channel: 'tds-bots',
      token: env.SLACK_TOKEN
    )
  }
}
