const handlers = {
  LaunchRequest: require('./intent/LaunchRequest'),
  AskTrivia: require('./intent/AskTrivia'),
  AskFact: require('./intent/AskFact')
}

module.exports = handlers
