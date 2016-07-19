import path from 'path'

export const id = 1
export const port = parseInt(process.env.PORT, 10) || 5000
export const webpackConfig = require('../../webpack.config')
export const statsFile = path.resolve(__dirname, '../../stats.json')
export const publicDir = path.resolve(__dirname, '../../public')
export const manifestFile = path.resolve(publicDir, 'assets/chunk-manifest.json')
export const timeout = parseInt(process.env.TIMEOUT, 10) || 20000
export const maxAge = process.env.MAX_AGE || '365d'

export const sessionDomain = process.env.SESSION_DOMAIN
export const sessionSecret = process.env.NODE_ENV === 'development' ? 'development' : process.env.SESSION_SECRET
