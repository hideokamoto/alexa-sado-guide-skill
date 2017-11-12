function HelpIntent () {
  const speach = 'このスキルでは、茶道に関する情報を聞くことができます。'
  this.response.speak(speach).listen(speach)
  this.emit(':responseReady')
}

exports.HelpIntent = HelpIntent
