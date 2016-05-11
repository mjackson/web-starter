import fs from 'fs'
import path from 'path'

const DevAssetsURL = 'http://localhost:8080/assets/'
const StaticAssetsURL = '/assets/'

export const AssetsURL = process.env.ASSETS_URL || (process.env.STATIC_ASSETS ? StaticAssetsURL : DevAssetsURL)
export const AssetsManifest = {}

export const serveStaticAssets = path.isAbsolute(AssetsURL)

if (serveStaticAssets) {
  const statsFile = path.resolve(__dirname, '../../stats.json')

  try {
    const stats = JSON.parse(fs.readFileSync(statsFile))
    const assetsByChunkName = stats.assetsByChunkName

    console.log(assetsByChunkName)

    for (const chunkName in assetsByChunkName) {
      if (assetsByChunkName.hasOwnProperty(chunkName)) {
        const assetPath = assetsByChunkName[chunkName]
        const canonicalURL = assetPath.replace(/[a-f0-9]{8}\//, '')
        AssetsManifest[canonicalURL] = assetPath
      }
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(
        'Cannot serve static assets without a build; ' +
        'run `npm run build-assets` before starting the server'
      )
    } else {
      throw error
    }
  }
}
