/* global describe,  it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../index.js')
const { handler } = MyLambdaFunction
const helpers = require('./helpers')
const {
  event,
  executeFunction
} = helpers

const fail = (e) => {
  if (e.name === 'AssertionError') {
    assert.deepEqual(e.expected, e.actual)
  } else {
    assert.ok(false)
  }
}
const succeed = (data) => {
  const { response } = data
  const {
    outputSpeech
  } = response
  assert.deepEqual(
    outputSpeech,
    {
      type: 'SSML',
      ssml: '<speak> またのご利用をお待ちしてます。 </speak>'
    }
  )
}

describe('Say stop session', () => {
  it('AMAZON.StopIntent', () => {
    event.request.type = 'AMAZON.StopIntent'
    executeFunction(event, {succeed, fail}, handler)
  })
  it('AMAZON.CancelIntent', () => {
    event.request.type = 'AMAZON.CancelIntent'
    executeFunction(event, {succeed, fail}, handler)
  })
  it('SessionEndedRequest', () => {
    event.request.type = 'SessionEndedRequest'
    executeFunction(event, {succeed, fail}, handler)
  })
})
