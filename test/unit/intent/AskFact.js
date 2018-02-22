/* global describe, it */
const assert = require('power-assert')
const {
  makeFact
} = require('../../../lib/intent/AskFact')

describe('AskFact', () => {
  it('make random response', () => {
    assert.equal(makeFact('なつめ'), 'なつめとは、抹茶を入れるのに用いる木製漆塗りの蓋物容器のことです。形が植物のなつめの実に似ていることからそうよばれています。')
  })
})
