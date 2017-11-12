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
      assert.deepEqual(
        outputSpeech,
        {
          type: 'SSML',
          ssml: '<speak> 織部焼で有名な古田織部を主人公とした「へうげもの」という漫画がある。 </speak>'
        }
      )
    }
    const fail = () => assert.ok(false)
    executeFunction(event, {succeed, fail}, handler)
  })
})
