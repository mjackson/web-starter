import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import HomePage from './components/HomePage'

const DOCTYPE = '<!DOCTYPE html>'

export const sendHomePage = (req, res) => {
  const chunks = [ 'vendor', 'home' ]
  const props = {
    styles: req.bundle.getStyleAssets(chunks),
    scripts: req.bundle.getScriptAssets(chunks)
  }

  res.send(
    DOCTYPE + renderToStaticMarkup(<HomePage {...props}/>)
  )
}
