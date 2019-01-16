import { configure } from '@storybook/react'

// function loadStories() {
//   require('../stories/index.js')
// }

function importAll(req) {
  req.keys().forEach(filename => req(filename))
}

function loadStories() {
  const req = require.context('../src', true, /\.story\.js$/)
  importAll(req)
}

configure(loadStories, module)