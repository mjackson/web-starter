const path = require('path')

require('babel-register')({
  only: path.resolve(__dirname, 'modules')
})

const { createServer, createDevServer } = require('./modules/server')

const port = process.env.PORT || 5000
const sessionDomain = require('./modules/server/SessionConfig').SessionDomain
const sessionSecret = require('./modules/server/SessionConfig').SessionSecret
const webpackConfig = require('./webpack.config')
const statsFile = path.resolve(__dirname, 'stats.json')
const publicDir = path.resolve(__dirname, 'public')

const serverConfig = {
  port,
  sessionDomain,
  sessionSecret,
  webpackConfig,
  statsFile,
  publicDir
}

const server = process.env.NODE_ENV === 'production'
  ? createServer(serverConfig)
  : createDevServer(serverConfig)

server.listen(port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', port)
})
