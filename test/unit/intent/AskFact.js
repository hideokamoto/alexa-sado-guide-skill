/* global describe, it */
const assert = require('power-assert')
const {
  getFacts,
  makeFact
} = require('../../../lib/intent/AskFact')

describe('AskFact', () => {
  it('make random response', () => {
    assert.equal(makeFact('なつめ'), '抹茶を入れるのに用いる木製漆塗りの蓋物容器のことです。形が植物のなつめの実に似ていることからそうよばれています。')
  })
  it('make fact response', () => {
    const param = {
      slots: {
        factName: {
          value: '濃茶'
        }
      }
    }
    const expect = '濃茶とは、黒味を帯びた濃緑色の抹茶をさします。濃茶は茶杓に山3杯を1人分として、たっぷりの抹茶に少量の湯を注ぎ、茶筅で練ってつくります。'
    const response = getFacts(param)
    assert.equal(expect, response)
  })
})
