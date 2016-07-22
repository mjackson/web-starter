import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import MainPage from './components/MainPage'

const DOCTYPE = '<!DOCTYPE html>'

export const sendHomePage = (req, res) => {
  const chunks = [ 'vendor', 'home' ]
  const props = {
    styles: req.bundle.getStyleAssets(chunks),
    scripts: req.bundle.getScriptAssets(chunks)
  }

  if (req.manifest)
    props.webpackManifest = req.manifest

  res.send(
    DOCTYPE + renderToStaticMarkup(<MainPage {...props}/>)
  )
}
