const moment = require('moment')
const { getAesClient } = require('../utils')

function AskFlowerIntent () {
  const self = this
  const theMonth = moment().format('M')
  getAesClient.search({
    index: 'sadou-flowers-*',
    body: {
      query: {
        term: {
          month: theMonth
        }
      }
    }
  }).then(function (body) {
    const hits = body.hits.hits
    console.log(theMonth)
    console.log(hits.length)
    if (hits.length === 0) {
      self.emit(':ask', '花を見つけることができませんでした。他に何か聞きたいことはありますか？', '聞きたいことがあれば、話しかけてください。そうでない場合は、ストップといってください。')
      return
    }
    const num = Math.floor(Math.random() * hits.length - 1)
    const target = num < 0 ? 0 : num
    console.log(target)
    console.log(hits)
    self.response.speak(`${theMonth}月の花には、${hits[target]._source.title_hira}があります。`)
    self.emit(':responseReady')
  }, function (error) {
    console.trace(error.message)
    self.emit(':ask', '花を見つけることができませんでした。他に何か聞きたいことはありますか？', '聞きたいことがあれば、話しかけてください。そうでない場合は、ストップといってください。')
  })
}

exports.AskFlowerIntent = AskFlowerIntent
