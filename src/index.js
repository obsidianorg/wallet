// JSX only for now
require('babel/register')({
  only: '*.react.js'
})

var alert = require('./lib/alert')
// annoying popup an error box instead of silent console output
window.onerror = function (message, url, line) {
  alert.showError(message + ' (' + line + ')')
}

var appGUI = require('./components/index.react')
window.onload = function () {
  appGUI.renderApp()
}

var blockChecker = require('./lib/block-checker')
setTimeout(function () {
  blockChecker.init(function (err) {
    if (err) alert.showError(err)
  })
}, 1000)