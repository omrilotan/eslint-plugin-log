const common = require('common-js-file-extensions');

module.exports = Object.values(common).map(ext => `.${ext}`);
