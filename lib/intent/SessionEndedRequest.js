function SessionEndedRequest () {
  const speach = 'またのご利用をお待ちしてます。'
  this.emit(':tell', speach)
}

exports.SessionEndedRequest = SessionEndedRequest
