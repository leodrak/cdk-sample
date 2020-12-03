#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkSampleStack } = require('../lib/cdk-sample-stack');

const app = new cdk.App();
new CdkSampleStack(app, 'CdkSampleStack');
