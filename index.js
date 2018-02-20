const Alexa = require('alexa-sdk')
const handlers = require('./lib/handlres')

module.exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context)
  alexa.appId = 'amzn1.ask.skill.f35b1223-1ed1-4283-a207-0e5d0fd2ff05'
  alexa.registerHandlers(handlers)
  alexa.execute()
}
