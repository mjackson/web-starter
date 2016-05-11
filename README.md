This is just a little repo that helps me build websites more quickly. This boilerplate includes:

- An asset pipeline for development and production
- A web server (express) for custom server logic
- Long-term asset caching that's easy to push to a CDN
- React for rendering all views

It does not include:

- A mechanism for fetching data
- A router (beyond express on the server)
- A global state management framework

This repo is mainly for me. This is how I build my websites. But I'm publishing it for the sake of others who may find it interesting.

My main goal is to have something I can use to quickly spin up a new website on the stack I like to use. If I succeed, you can bet this repo will stay up to date and will occasionally even get new features. If you decide to use it and you think something's missing, please send a PR. If it's a lot of work, you might want to contact me first [on Twitter](https://twitter.com/mjackson) to see if it's something I'd like to include.

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

## Stack

web-starter relies on the following tools to get the job done:

- [node.js](https://nodejs.org/) (runtime)
- [npm](https://www.npmjs.com/) (package manager)
- [webpack](https://webpack.github.io/) (build tool)
- [heroku](https://heroku.com/) (deploy target)
- [express](http://expressjs.com/) (web server)
- [react](https://facebook.github.io/react/) (UI framework)
