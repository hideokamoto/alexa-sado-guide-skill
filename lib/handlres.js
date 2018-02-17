const { AskFactIntent } = require('./intent/AskFact')
const { AskTriviaIntent } = require('./intent/AskTrivia')
const { AskFlowerIntent } = require('./intent/AskFlower')
const { HelpIntent } = require('./intent/HelpIntent')
const { SessionEndedRequest } = require('./intent/SessionEndedRequest')

const handlers = {
  LaunchRequest: require('./intent/LaunchRequest'),
  AskTriviaIntent,
  AskFactIntent,
  AskFlowerIntent,
  'AMAZON.HelpIntent': HelpIntent,
  'AMAZON.CancelIntent': SessionEndedRequest,
  'AMAZON.StopIntent': SessionEndedRequest,
  'SessionEndedRequest': SessionEndedRequest
}

module.exports = handlers
