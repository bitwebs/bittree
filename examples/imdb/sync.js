const BitTree = require('../../')
const unichain = require('@web4/unichain')

const db = new BitTree(unichain('./db', { sparse: true }))

require('@web4/replicator')(db.feed, {
  announce: true,
  lookup: true,
  live: true
})

db.feed.ready(function () {
  console.log('Feed key: ' + db.feed.key.toString('hex'))
})

module.exports = db
