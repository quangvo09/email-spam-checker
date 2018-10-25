const path = require('path')
const zlib = require('zlib')
const fs = require('fs')

const blacklist = new Set()
{
  const filePath = path.resolve(__dirname, '../data/blacklist.txt.gz');
  const buffer = fs.readFileSync(filePath);
  const blacklistText = zlib.gunzipSync(buffer).toString('utf8');

  blacklistText.split('\n').filter(Boolean).forEach((domain) => blacklist.add(domain));
}

module.exports = (domain) => blacklist.has(domain);
