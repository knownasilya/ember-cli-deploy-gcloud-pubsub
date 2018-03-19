ember-cli-deploy-gcloud-pubsub
===============================

Notify that a deployment has been activated via Google PubSub.

This is an alternative to the webhooks plugin, which doesn't work
in a setup where the application is clustered and the cache is local to each instance of the application, like a `Map` instance.

> Note: If you use Redis, the webhook addon should work for you, even if clustered. 

Installation
-------------

```sh
ember install ember-cli-deploy-gcloud-pubsub
```

Requires these other plugins:

- 

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

### Works well with

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
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
-------

This project is licensed under the [MIT License](LICENSE.md).
