var req = require.context('./', true, /\.json$/);

let locales = []

req.keys().forEach(path => {
  let localeName = RegExp('\.\/(.*)\.json','igm').exec(path)[1].split('-')
  localeName = localeName[0] + '-' + localeName[1].toUpperCase()
  locales[localeName] = req(path)
})

module.exports = locales
