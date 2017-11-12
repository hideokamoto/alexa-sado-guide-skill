function LaunchRequest () {
  const say = '茶道ガイドへようこそ。茶道の小噺や用語についてお尋ねください。'
  this.response.speak(say).listen(say)
  this.emit(':responseReady')
}

module.exports = LaunchRequest
