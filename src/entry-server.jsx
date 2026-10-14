// Used only at build time (scripts/prerender.mjs) to put real HTML into index.html.
import { renderToString } from 'react-dom/server'
import App from './App'

export function render() {
  return renderToString(<App />)
}

export { BRANCHES, COMPANY, MODELS } from './lib/siteData'
