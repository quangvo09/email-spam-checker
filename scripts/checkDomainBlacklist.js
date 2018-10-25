var path = require('path')
var zlib = require('zlib')
var fs = require('fs')

var blacklist = new Set()
{
  const filePath = path.resolve(__dirname, '../data/blacklist.txt.gz');
  const buffer = fs.readFileSync(filePath);
  const blacklistText = zlib.gunzipSync(buffer).toString('utf8');

  blacklistText.split('\n').filter(Boolean).forEach(function (domain) {
    return blacklist.add(domain)
  });
}

module.exports = function (domain) {
  return blacklist.has(domain)
};
