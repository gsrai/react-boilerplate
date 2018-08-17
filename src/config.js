const PRODUCTION = 'production'
const DEV = 'dev'

const repoListUrl = '//api.github.com/search/repositories'

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '8080',

  repoListUrl,

  PRODUCTION,
  DEV
})
