import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import HomePage from './components/HomePage'

const doctype = '<!doctype html>'

export const renderHomePage = (props = {}) =>
  doctype + renderToStaticMarkup(<HomePage {...props}/>)
