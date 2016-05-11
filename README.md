[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This repo is a boilerplate that helps me build websites quickly using [node](https://nodejs.org/), [webpack](https://webpack.github.io/), [React](https://facebook.github.io/react/), and a few other pieces. Among other things, it includes:

- An asset pipeline for development and production
- Auto-refreshing of assets in development
- Long-term asset caching in production that's easy to deploy to a CDN
- A web server (express) for custom server logic
- Session management (using cookies)
- React for rendering all views

It does not include:

- A mechanism for fetching data
- A global state management framework
- A client-side router

This repo is mainly for me. This is how I build my websites. But I'm publishing it for the sake of others who may find it interesting.

My main goal is to have something I can use to quickly spin up a new website on the stack I like to use. If I succeed, you can bet this repo will stay up to date and will occasionally even get new features. If you decide to use it and you think something's missing, please send a PR. If it's a lot of work, you might want to contact me first [on Twitter](https://twitter.com/mjackson) to see if it's something I'd like to include.

## Getting Started

First, install:

- [git](https://git-scm.com/)
- [node](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [heroku toolbelt](https://toolbelt.heroku.com/)

Next, create a new project and install all dependencies:

    $ git clone https://github.com/mjackson/web-starter new-project
    $ cd new-project
    $ npm install

Then, start the server:

    $ npm start

Open a browser to [http://localhost:5000](http://localhost:5000).

## Serving Assets

In **development**, we automatically re-compile asset bundles as they change and refresh the browser window so you see updates immediately. You can start the asset server manually with:

    $ npm run serve-assets

In **production**, we create a static build of the assets. You can build the assets manually with:

    $ npm run build-assets

If you want to upload your assets to a CDN, use the `output.publicPath` variable in `webpack.config.js`.

## Session Configuration

Use the `SESSION_DOMAIN` and `SESSION_SECRET` environment variables to configure the domain and secret that will be used to sign the session cookie. In development, you can store these variables in a `.env` file in the root directory.

## Credits

web-starter wouldn't exist without the incredible work of everyone involved in these projects:

- [node](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [webpack](https://webpack.github.io/)
- [express](http://expressjs.com/)
- [React](https://facebook.github.io/react/)
- [heroku](https://heroku.com/)
