import fs from 'fs'
import path from 'path'

const DevAssetsURL = 'http://localhost:8080/assets/'
const LocalAssetsURL = '/assets/'

export const AssetsURL = process.env.ASSETS_URL || (process.env.BUILD_ASSETS ? LocalAssetsURL : DevAssetsURL)
export const AssetsManifest = {}

const serveStaticAssets = path.isAbsolute(AssetsURL)

if (serveStaticAssets) {
  const statsFile = path.resolve(__dirname, '../stats.json')

  try {
    const webpackStats = JSON.parse(fs.readFileSync(statsFile))

    webpackStats.children.forEach(stats => {
      for (const chunkName in stats.assetsByChunkName) {
        const assetPath = '/' + stats.assetsByChunkName[chunkName]
        const canonicalURL = assetPath.replace(/-[a-f0-9]+\//, '/')

        AssetsManifest[canonicalURL] = assetPath
      }
    })
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Cannot serve static assets without a build; run `npm run build-assets` before starting the server')
    } else {
      throw error
    }
  }
}
