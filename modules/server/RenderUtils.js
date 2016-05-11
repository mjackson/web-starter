import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import HomePage from './components/HomePage'

export const renderHomePage = (props = {}) =>
  renderToStaticMarkup(<HomePage {...props}/>)
