require('babel-register')({
  only: require('path').resolve(__dirname, '..')
})

const port = process.env.PORT || 5000
const sessionDomain = require('./SessionConfig').SessionDomain
const sessionSecret = require('./SessionConfig').SessionSecret
const createServer = require('./index').createServer

const server = createServer({
  sessionDomain,
  sessionSecret
})

server.listen(port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', port)
})
