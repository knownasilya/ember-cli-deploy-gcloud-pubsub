ember-cli-deploy-gcloud-pubsub
===============================

Notify that a deployment has been activated via Google PubSub.

[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]  
[![Ember-CLI Deploy Version][ember-cli-deploy-badge]][ember-cli-deploy-url]

This is an alternative to the webhooks plugin, which doesn't work
in a setup where the application is clustered and the cache is local to each instance of the application, like a `Map` instance.

> Note: If you use Redis, the webhook plugin should work for you, even if clustered. 

Installation
-------------

```sh
ember install ember-cli-deploy-gcloud-pubsub
```

Requires these other plugins:

- https://github.com/ember-cli-deploy/ember-cli-deploy
- https://github.com/ember-cli-deploy/ember-cli-deploy-build
- https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data


Usage
-----

### Setup PubSub

1. Configure the plugin to access your PubSub account.
2. Setup PubSub to accept notifications/send notifications

To create a PubSub topic, run a deployment with the `SETUP` env var.

```sh
SETUP=true ember deploy alpha
```

This will create a topic in PubSub which will be used for the subscription.

3. Create a subscription for the topic

### Use

```sh
ember deploy <target> --activate
```

Or you can activate after the fact

```sh
ember deploy:activate <target> --revision=<revision>
```

### Subscription Data

The subscription data is a stringified JSON object that contains:

- `project` - name from `package.json`
- `revisionKey` - The activated revision key
- `previousRevisionKey` - The previous revision key

### Works well with

- https://github.com/knownasilya/ember-cli-deploy-gcloud-storage
- https://github.com/mwpastore/ember-cli-deploy-sql

Contributing
------------

### Installation

* `git clone https://github.com/knownasilya/ember-cli-deploy-gcloud-pubsub`
* `cd ember-cli-deploy-gcloud-pubsub`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
-------

This project is licensed under the [MIT License](LICENSE.md).

[npm-badge-img]: https://badge.fury.io/js/ember-cli-deploy-gcloud-pubsub.svg
[npm-badge-link]: http://badge.fury.io/js/ember-cli-deploy-gcloud-pubsub
[travis-badge]: https://travis-ci.org/knownasilya/ember-cli-deploy-gcloud-pubsub.svg
[travis-badge-url]: https://travis-ci.org/knownasilya/ember-cli-deploy-gcloud-pubsub
[ember-observer-badge]: http://emberobserver.com/badges/ember-cli-deploy-gcloud-pubsub.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-cli-deploy-gcloud-pubsub
[ember-cli-deploy-badge]: https://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/plugins/ember-cli-deploy-gcloud-pubsub.svg
[ember-cli-deploy-url]: http://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/