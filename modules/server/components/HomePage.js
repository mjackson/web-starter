import React from 'react'
import { getAssetURL } from '../AssetsUtils'

const HomePage = React.createClass({
  render() {
    return (
      <html>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="user-scalable=no,initial-scale=1.0,maximum-scale=1.0,width=device-width"/>
          <meta name="timestamp" content={(new Date).toISOString()}/>
          <title>web-starter</title>
        </head>
        <body>
          <div id="app"/>
          <script src={getAssetURL('main.js')}/>
        </body>
      </html>
    )
  }
})

export default HomePage
