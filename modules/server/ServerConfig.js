import path from 'path'

export const id = 1
export const port = process.env.PORT || 5000
export const webpackConfig = require('../../webpack.config')
export const statsFile = path.resolve(__dirname, '../../stats.json')
export const publicDir = path.resolve(__dirname, '../../public')
export const timeout = 20000
export const sessionDomain = process.env.SESSION_DOMAIN
export const sessionSecret = process.env.NODE_ENV === 'development' ? 'development' : process.env.SESSION_SECRET
