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

describe('AskTriviaIntent', () => {
  beforeEach(() => {
    event.request.type = 'AskTriviaIntent'
  })
  it('Say hallo world', () => {
    const succeed = (data) => {
      const { response } = data
      const {
        outputSpeech,
        shouldEndSession
      } = response
      assert.equal(shouldEndSession, true)
      assert.equal(outputSpeech.type, 'SSML')
    }
    executeFunction(event, {succeed, fail}, handler)
  })
})
