const Alexa = require('alexa-sdk')
const SKILL_NAME = 'Kyoto Guide'
const handlers = {
  'LaunchRequest': function () {
    this.response.speak('Hello World!');
    this.emit(':responseReady');
  },
}

module.exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context)
  alexa.registerHandlers(handlers)
  alexa.execute()
}
