function HelpIntent () {
  const speach = 'このスキルでは、茶道に関する情報を聞くことができます。聞きたい情報を仰ってください。'
  this.response.speak(speach).listen(speach)
  this.emit(':responseReady')
}

exports.HelpIntent = HelpIntent
