import http from 'http'
import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import { sendHomePage } from './MainController'

export const createRequestHandler = (options = {}) => {
  const app = express()

  app.disable('x-powered-by')

  if (process.env.NODE_ENV === 'development')
    app.use(morgan('dev'))

  app.use(express.static('public'))
  app.use(cookieParser())

  const sessionConfig = {
    name: `sess_${process.env.NODE_ENV}`,
  }

  if (options.sessionDomain)
    sessionConfig.domain = options.sessionDomain

  if (options.sessionSecret)
    sessionConfig.secret = options.sessionSecret

  app.use(cookieSession(sessionConfig))

  app.get('/', sendHomePage)

  return app
}

export const createServer = (options) =>
  http.createServer(
    createRequestHandler(options)
  )
