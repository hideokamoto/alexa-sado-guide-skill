/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const {
  event,
  executeFunction
} = helpers

describe('HelpIntent', () => {
  beforeEach(() => {
    event.request.type = 'AMAZON.HelpIntent'
  })
  it('Say hekp', () => {
    const succeed = (data) => {
      const { response } = data
      const {
        outputSpeech
      } = response
      assert.deepEqual(
        outputSpeech,
        {
          type: 'SSML',
          ssml: '<speak> このスキルでは、茶道に関する情報を聞くことができます。 </speak>'
        }
      )
    }
    const fail = (e) => {
      if (e.name === 'AssertionError') {
        assert.deepEqual(e.expected, e.actual)
      } else {
        assert.ok(false)
      }
    }
    executeFunction(event, {succeed, fail}, handler)
  })
})
