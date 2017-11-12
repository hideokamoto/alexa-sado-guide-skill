const { AskFact } = require('./intent/AskFact')
const { AskTrivia } = require('./intent/AskTrivia')

const handlers = {
  LaunchRequest: require('./intent/LaunchRequest'),
  AskTrivia,
  AskFact
}

module.exports = handlers
