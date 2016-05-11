import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import WebpackDevServer from 'webpack-dev-server'
import { staticAssets, assetsCompiler, createDevCompiler } from './AssetsUtils'
import { sendHomePage } from './MainController'

export const createRouter = (config = {}) => {
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

  const router = express.Router()

  router.use(cookieParser())
  router.use(cookieSession(sessionConfig))
  router.get('/', sendHomePage)

  return router
}

export const createServer = (config) => {
  const app = express()

  app.disable('x-powered-by')
  app.use(express.static(config.publicDir))
  app.use(staticAssets(config.statsFile))
  app.use(createRouter(config))

  return app
}

export const createDevServer = (config) => {
  const webpackConfig = require(config.webpackConfigFile)
  const compiler = createDevCompiler(
    webpackConfig,
    `webpack-dev-server/client?http://localhost:${config.port}`
  )

  const server = new WebpackDevServer(compiler, {
    contentBase: config.publicDir,
    publicPath: webpackConfig.output.publicPath,
    setup(app) {
      // This runs before the middleware server.
      app.disable('x-powered-by')
      app.use(morgan('dev'))
      app.use(assetsCompiler(compiler))
      app.use(createRouter(config))
    }
  })

  return server
}
