const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  name: 'Alexa Sample App',
  appId: 'amzn1.ask.skill.f35b1223-1ed1-4283-a207-0e5d0fd2ff05',
  app: app,
  handler: app.handler
}

conversation(opts)
  .userSays('AskFlowerIntent')
  .plainResponse
  .shouldContain('月の花には')
  .end()
