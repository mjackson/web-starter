import { AssetsURL, AssetsManifest } from './AssetsConfig'

export const getAssetURL = (canonicalURL) =>
  AssetsURL + (AssetsManifest[canonicalURL] || canonicalURL)
