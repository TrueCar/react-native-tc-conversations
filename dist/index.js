
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-native-tc-conversations.cjs.production.min.js')
} else {
  module.exports = require('./react-native-tc-conversations.cjs.development.js')
}
