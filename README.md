# ember-transition

This is a reproduction of a bug in Ember whereby transitioning using the router service
with queryParams will trigger incorrect model calls on queryParam with refreshModel. 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* [yarn](https://https://yarnpkg.com)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-transition`
* `npm install`

## Running reproduction

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Clicking either trigger controller or trigger controller 2 won't trigger another model call
* Click trigger service will trigger another model call and another on the first click on either trigger controller button
