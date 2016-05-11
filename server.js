require('babel-register')({
  only: require('path').resolve(__dirname, 'modules')
})

const port = process.env.PORT || 5000
const sessionDomain = require('./modules/server/SessionConfig').SessionDomain
const sessionSecret = require('./modules/server/SessionConfig').SessionSecret
const createServer = require('./modules/server').createServer

const server = createServer({
  sessionDomain,
  sessionSecret
})

server.listen(port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', port)
})
