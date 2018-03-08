const _ = require('lodash')
const fs = require('fs')
const path = require('path')

// Omit any properties starting with `_`, which are fake-private
module.exports = function (results) {
  const cleanedResults = results.map(result => {
    return _.omitBy(result, (value, key) => key[0] === '_')
  })

  const tmpl = fs.readFileSync(path.resolve(__dirname, './tmpl/index.html'))
  return tmpl.toString().replace('LINT_RESULT', JSON.stringify(cleanedResults))
}
