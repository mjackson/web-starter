[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This little repo is a boilerplate that helps me build websites more quickly. It includes:

- An asset pipeline for development and production
- A web server (express) for custom server logic
- Session management (using cookies)
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

    $ git clone https://github.com/mjackson/web-starter new-project
    $ cd new-project
    $ npm install

Then, start the web server:

    $ npm start

Open a browser to [http://localhost:5000](http://localhost:5000).

## Serving Assets

In **development**, we start an `asset-server` process for you that automatically re-compiles asset bundles as they change and refreshes the browser window so you see updates immediately. You can start the asset server manually with:

    $ npm run serve-assets

In **production**, create a static build of the assets:

    $ npm run build-assets

This is run automatically when you deploy to Heroku. If you want to upload your assets to a CDN, use the `ASSETS_URL` environment variable to point to it.

## Session Configuration

Use the `SESSION_DOMAIN` and `SESSION_SECRET` environment variables to configure the domain and secret that will be used to sign the session cookie.

## Stack

web-starter relies on the following tools to get the job done:

- [node.js](https://nodejs.org/) (runtime)
- [npm](https://www.npmjs.com/) (package manager)
- [webpack](https://webpack.github.io/) (build tool)
- [express](http://expressjs.com/) (web server)
- [react](https://facebook.github.io/react/) (UI framework)
- [heroku](https://heroku.com/) (deploy target)
