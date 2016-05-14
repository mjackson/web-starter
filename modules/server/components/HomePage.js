import React, { PropTypes } from 'react'

const assetType = PropTypes.string

const HomePage = React.createClass({
  propTypes: {
    title: PropTypes.string,
    styles: PropTypes.arrayOf(assetType),
    scripts: PropTypes.arrayOf(assetType)
  },

  getDefaultProps() {
    return {
      title: 'web-starter',
      styles: [],
      scripts: []
    }
  },

  render() {
    const { title, styles, scripts } = this.props

    return (
      <html>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="user-scalable=no,initial-scale=1.0,maximum-scale=1.0,width=device-width"/>
          <meta name="timestamp" content={(new Date).toISOString()}/>
          <title>{title}</title>
          <script dangerouslySetInnerHTML={{ __html: "window.Promise || document.write('\\x3Cscript src=\"/es6-promise.min.js\">\\x3C/script>\\x3Cscript>ES6Promise.polyfill()\\x3C/script>')" }}/>
          <script dangerouslySetInnerHTML={{ __html: "window.fetch || document.write('\\x3Cscript src=\"/fetch.min.js\">\\x3C/script>')" }}/>
          {styles.map(style => (
            <link key={style} rel="stylesheet" href={style}/>
          ))}
        </head>
        <body>
          <div id="app"/>
          {scripts.map(script => (
            <script key={script} src={script}/>
          ))}
        </body>
      </html>
    )
  }
})

export default HomePage
