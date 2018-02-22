const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  name: 'Alexa Sample App',
  appId: 'amzn1.ask.skill.f35b1223-1ed1-4283-a207-0e5d0fd2ff05',
  app: app,
  handler: app.handler
}

conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('茶道ガイドへようこそ。茶道の小噺や用語についてお尋ねください。')
  .userSays('AskTriviaIntent')
  .plainResponse
  .shouldContain(' ')
  .end()
