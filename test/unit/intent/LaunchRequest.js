/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const {
  event,
  executeFunction
} = helpers

describe('LaunchRequest', () => {
  beforeEach(() => {
    event.request.type = 'LaunchRequest'
  })
  it('Say hallo world', () => {
    const succeed = (data) => {
      const { response } = data
      const {
        outputSpeech
      } = response
      assert.deepEqual(
        outputSpeech,
        {
          type: 'SSML',
          ssml: '<speak> 茶道ガイドへようこそ。茶道の小噺や用語についてお尋ねください。 </speak>'
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
