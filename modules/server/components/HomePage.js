import React, { PropTypes } from 'react'
import { getAssetURL } from '../AssetsUtils'

const HomePage = React.createClass({
  propTypes: {
    title: PropTypes.string
  },

  getDefaultProps() {
    return {
      title: 'web-starter'
    }
  },

  render() {
    const { title } = this.props

    return (
      <html>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="user-scalable=no,initial-scale=1.0,maximum-scale=1.0,width=device-width"/>
          <meta name="timestamp" content={(new Date).toISOString()}/>
          <link rel="stylesheet" href={getAssetURL('styles.css')}/>
          <title>{title}</title>
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
