function SessionEndedRequest () {
  const speach = 'またのご利用をお待ちしてます。'
  this.response.speak(speach).listen(speach)
  this.emit(':responseReady')
}

exports.SessionEndedRequest = SessionEndedRequest
