function LaunchRequest() {
  this.response.speak('Hello World!');
  this.emit(':responseReady');
}

module.exports = LaunchRequest
