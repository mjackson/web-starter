This is just a little repo that helps me build websites more quickly. It uses:

- [node.js](https://nodejs.org/) (runtime)
- [npm](https://www.npmjs.com/) (package manager)
- [webpack](https://webpack.github.io/) (build tool)
- [heroku](https://heroku.com/) (deploy target)
- [express](http://expressjs.com/) (web server)
- [react](https://facebook.github.io/react/) (UI framework)

## Getting Started

First, install:

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [heroku toolbelt](https://toolbelt.heroku.com/)

Next, clone the repo and install all dependencies:

    $ git clone https://github.com/mjackson/web-starter
    $ cd web-starter
    $ npm install

Then, start the web server:

    $ npm start

Open a browser to [http://localhost:5000](http://localhost:5000).

## Serving Assets

In **development**, we start an `asset-server` process for you that automatically re-compiles asset bundles as they change and refreshes the browser window so you see updates immediately. You can start the asset server manually with:

    $ npm run serve-assets

In **production**, create a static build of the assets:

    $ npm run build-assets

You can do this automatically when you deploy by setting the `BUILD_ASSETS` environment variable. Otherwise, you can create your build manually, upload it to a CDN, and use the `ASSETS_URL` environment variable to point to your CDN.

## Session Configuration

Use the `SESSION_DOMAIN` and `SESSION_SECRET` environment variables to configure the domain and secret that will be used to sign the session cookie.

## Deploy

You can deploy a sample app to Heroku right now:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
