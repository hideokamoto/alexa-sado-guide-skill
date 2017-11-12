const assert = require('power-assert')
const sinon = require('sinon')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const {
  event,
  executeFunction,
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
          ssml: "<speak> Hello World! </speak>"
        }
      )
    }
    const fail = () => assert.ok(false)
    executeFunction(event, {succeed, fail}, handler)
  })
})
