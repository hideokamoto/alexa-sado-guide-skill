/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const {
  event,
  executeFunction
} = helpers

describe('AskTrivia', () => {
  beforeEach(() => {
    event.request.type = 'AskTrivia'
  })
  it('Say hallo world', () => {
    const succeed = (data) => {
      const { response } = data
      const {
        outputSpeech
      } = response
      assert.equal(outputSpeech.type, 'SSML')
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
