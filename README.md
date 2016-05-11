This is just a little repo that helps me build websites more quickly. It uses:

- node.js and npm
- [express](http://expressjs.com/)
- [webpack](https://webpack.github.io/)
- [heroku-local](https://devcenter.heroku.com/articles/heroku-local)
- [react](https://facebook.github.io/react/)

## Getting Started

Install everything by cloning the repo and installing dependencies:

    $ git clone https://github.com/mjackson/web-starter
    $ cd web-starter
    $ npm install

Then, start the web server:

    $ npm start

Then, open a browser to [http://localhost:5000](http://localhost:5000).

## Serving Assets

In **development**, we start an `asset-server` process for you that automatically re-compiles asset bundles as they change and refreshes the browser window so you see updates immediately. You can start the asset server manually with:

    $ npm run serve-assets

In **production**, create a static build of the assets:

    $ npm run build-assets

You can do this automatically when you deploy by setting the `BUILD_ASSETS` environment variable. Otherwise, you can create your build manually, upload it to a CDN, and use the `ASSETS_URL` environment variable to point to your CDN.

## Session Configuration

Use the `SESSION_DOMAIN` and `SESSION_SECRET` environment variables to configure the domain and secret that will be used to sign the session cookie.
