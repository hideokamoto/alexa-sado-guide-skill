const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  name: 'Alexa Sample App',
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

conversation(opts)
  .userSays('AskFlowerIntent')
  .plainResponse
  .shouldContain('月の花には')
  .end()
