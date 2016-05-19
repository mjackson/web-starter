import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import HomePage from './components/HomePage'

const DOCTYPE = '<!DOCTYPE html>'

export const sendHomePage = (req, res) => {
  const props = {
    styles: req.bundle.getStyleAssets('home'),
    scripts: req.bundle.getScriptAssets('home')
  }

  res.send(
    DOCTYPE + renderToStaticMarkup(<HomePage {...props}/>)
  )
}
