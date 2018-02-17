const getAesClient = require('elasticsearch').Client({
  hosts: [ 'https://search-kyoto-guide-t3mr6rbxr6nfgqask26l4azoci.ap-northeast-1.es.amazonaws.com' ],
  connectionClass: require('http-aws-es')
})

exports.getAesClient = getAesClient
