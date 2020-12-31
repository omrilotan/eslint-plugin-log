const { code } = require('common-js-file-extensions')

module.exports = Object.values(code).map(ext => `.${ext}`)
