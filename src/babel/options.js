module.exports = {
  resolveModuleSource: require('./resolve').resolve,
  only: 'src/',
  extensions: ['.js'],
  stage: 0,
  cache: false
}
