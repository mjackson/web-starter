import http from 'http'
import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import { sendHomePage } from './MainController'

export const createRouter = (config = {}) => {
  const router = express.Router()

  router.use(cookieParser())

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

  router.use(cookieSession(sessionConfig))

  router.get('/', sendHomePage)

  return router
}

export const createRequestHandler = (config) => {
  const app = express()

  app.disable('x-powered-by')

  if (process.env.NODE_ENV === 'development')
    app.use(morgan('dev'))

  app.use(express.static('public'))
  app.use(createRouter())

  return app
}

export const createServer = (options) =>
  http.createServer(
    createRequestHandler(options)
  )
