var glob = require('glob')
var fs = require('fs')
var fp = require('path')

glob("./src/**/*.@(le|c)ss", function (e, files) {
  files.map(function (path) {
    var source = fs.createReadStream(path)
    var dest = path.replace(/^.\/src\/(.*)/, function (match, rest) {
      return fp.join(__dirname, './lib', rest)
    })
    source.pipe(fs.createWriteStream(dest))
  })
})
