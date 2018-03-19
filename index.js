'use strict';

const BasePlugin = require('ember-cli-deploy-plugin');
const PubSub = require('@google-cloud/pubsub');

module.exports = {
  name: 'ember-cli-deploy-gcloud-pubsub',

  createDeployPlugin: function(options) {
    const DeployPlugin = BasePlugin.extend({
      name: options.name,

      requiredConfig: [
        'projectId'
      ],

      defaultConfig: {
        topicNamePrefix: '',
        topicName: function (context) {
          let name = context.project.pkg.name;
          let target = context.deployTarget;

          return name + '-' + target;
        }
      },

      getTopicName: function () {
        let base = this.readConfig('topicName');
        let prefix = this.readConfig('topicNamePrefix');

        if (prefix) {
          prefix += '-';
        }

        return prefix + base;
      },

      setup: function (context) {
        let projectId = this.readConfig('projectId');

        this.pubsub = new PubSub({
          projectId
        });
      },

      didUpload: function(context) {
        if (process.env.SETUP) {
          let topicName = this.getTopicName();

          return this.pubsub.createTopic(topicName);
        }
      },

      didActivate: function(context) {
        let topicName = this.getTopicName();
        let data = JSON.stringify({
          revisionKey: context.revisionData.activatedRevisionKey,
          previousRevisionKey: context.revisionData.previousRevisionKey,
          project: context.project.pkg.name
        });
        let dataBuffer = Buffer.from(data);


        return this.pubsub
          .topic(topicName)
          .publisher()
          .publish(dataBuffer);
      }
    });

    return new DeployPlugin();
  }
};
