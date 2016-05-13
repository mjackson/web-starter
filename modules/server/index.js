import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import devErrorHandler from 'errorhandler'
import WebpackDevServer from 'webpack-dev-server'
import { staticAssets, assetsCompiler, createDevCompiler } from './AssetsUtils'
import { sendHomePage } from './MainController'

const createSession = (config) => {
  const sessionConfig = {
    name: `sess_${process.env.NODE_ENV}`,
  }

  if (config.sessionDomain)
    sessionConfig.domain = config.sessionDomain

  if (config.sessionSecret) {
    sessionConfig.secret = config.sessionSecret
  } else {
    sessionConfig.signed = false
  }

  return cookieSession(sessionConfig)
}

export const createRouter = (config = {}) => {
  const router = express.Router()

  router.use(cookieParser())
  router.use(createSession(config))
  router.get('/', sendHomePage)

  return router
}

const errorHandler = (err, req, res, next) => {
  res.status(500).send('<p>Internal Server Error</p>')
  console.error(error.stack)
  next(err)
}

export const createServer = (config) => {
  const app = express()

  app.disable('x-powered-by')
  app.use(errorHandler)
  app.use(express.static(config.publicDir))
  app.use(staticAssets(config.statsFile))
  app.use(createRouter(config))

  return app
}

export const createDevServer = (config) => {
  const webpackConfig = config.webpackConfig
  const compiler = createDevCompiler(
    webpackConfig,
    `webpack-dev-server/client?http://localhost:${config.port}`
  )

  const server = new WebpackDevServer(compiler, {
    contentBase: false,
    publicPath: webpackConfig.output.publicPath,
    setup(app) {
      // This runs before webpack-dev-middleware.
      app.disable('x-powered-by')
      app.use(morgan('dev'))
    }
  })

  // This runs after webpack-dev-middleware.
  server.use(devErrorHandler())
  server.use(express.static(config.publicDir))
  server.use(assetsCompiler(compiler))
  server.use(createRouter(config))

  return server
}
