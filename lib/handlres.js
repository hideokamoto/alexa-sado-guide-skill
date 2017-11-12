const { AskFact } = require('./intent/AskFact')
const { AskTrivia } = require('./intent/AskTrivia')
const { HelpIntent } = require('./intent/HelpIntent')
const { SessionEndedRequest } = require('./intent/SessionEndedRequest')

const handlers = {
  LaunchRequest: require('./intent/LaunchRequest'),
  AskTrivia,
  AskFact,
  'AMAZON.HelpIntent': HelpIntent,
  'AMAZON.CancelIntent': SessionEndedRequest,
  'AMAZON.StopIntent': SessionEndedRequest,
  'SessionEndedRequest': SessionEndedRequest
}

module.exports = handlers
