import { renderHomePage } from './RenderUtils'

export const sendHomePage = (req, res) =>
  res.send(renderHomePage())
