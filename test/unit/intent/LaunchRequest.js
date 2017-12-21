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

describe('LaunchRequest', () => {
  beforeEach(() => {
    event.request.type = 'LaunchRequest'
  })
  it('Say hallo world', () => {
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
          ssml: '<speak> 茶道ガイドへようこそ。茶道の小噺や用語についてお尋ねください。 </speak>'
        }
      )
    }
    executeFunction(event, {succeed, fail}, handler)
  })
})
