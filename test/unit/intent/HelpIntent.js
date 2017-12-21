/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const {
  event,
  executeFunction,
  fail
} = helpers

describe('HelpIntent', () => {
  beforeEach(() => {
    event.request.type = 'AMAZON.HelpIntent'
  })
  it('Say help', () => {
    const succeed = (data) => {
      const { response } = data
      const {
        outputSpeech,
        shouldEndSession
      } = response
      assert.equal(shouldEndSession, false)
      assert.deepEqual(
        outputSpeech,
        {
          type: 'SSML',
          ssml: '<speak> このスキルでは、茶道に関する情報を聞くことができます。聞きたい情報を仰ってください。 </speak>'
        }
      )
    }
    executeFunction(event, {succeed, fail}, handler)
  })
})
