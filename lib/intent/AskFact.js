const { getAesClient } = require('../utils')
const facts = {
  '楽焼': 'ろくろを使わずに手とヘラだけで整形する陶器のことです。１６世紀後半に、長次郎が千利休の指導のもと作ったものが始まりとされています。',
  'わび茶': '茶道のなかで、簡素簡略の境地すなわち「わび」の精神を重んじたものをさします。なお、わび茶という言葉は江戸時代に生まれた言葉です。',
  '待庵': '京都府乙訓郡大山崎町にある国宝の茶室です。千利休が作った日本最古の茶室といわれており、見学には事前予約が必要です。',
  '千利休': '1500年代後半の茶人です。わび茶の完成者として知られ、茶聖ともよばれています。',
  '古田織部': '1600年代の戦国武将です。大胆かつ自由な気風を好み、「織部好み」と呼ばれる一大流行を安土桃山時代にもたらしました。',
  '茶碗': '茶の湯において用いられる茶を入れて飲むための碗を指す言葉です。産地や由来、その色形の特徴によって様々な種類がります。',
  '茶室': '茶道において、茶を出してもてなすために造られる施設のことです。草庵風のものと書院風のものがあり、一般的には草庵風のものさします。',
  '抹茶': '茶の葉を蒸してから乾燥させたものを茶臼で引いたもののことです。黒味を帯びた濃緑色の濃茶と鮮やかな青緑色の薄茶があります。',
  'なつめ': '抹茶を入れるのに用いる木製漆塗りの蓋物容器のことです。形が植物のなつめの実に似ていることからそうよばれています。',
  '濃茶': '黒味を帯びた濃緑色の抹茶をさします。濃茶は茶杓に山3杯を1人分として、たっぷりの抹茶に少量の湯を注ぎ、茶筅で練ってつくります。'
}

function getRandomKey () {
  const min = 0
  const max = Object.keys(facts).length - 1
  const number = Math.floor(Math.random() * (max + 1 - min)) + min
  return Object.keys(facts)[number]
}

function makeResponse (name, value) {
  return `${name}とは、${value}`
}

function makeFact (key) {
  return makeResponse(key, facts[key])
}

function getRandomFacts () {
  const key = getRandomKey()
  return makeFact(key)
}

const getSlotByName = (request, name = 'wordName') => {
  const { intent } = request
  if (!intent || Object.keys(intent).length === 0) return ''
  const { slots } = intent
  if (!slots || Object.keys(slots).length === 0) return ''
  const target = slots[name]
  if (!target || Object.keys(target).length === 0) return ''
  return target.value
}

const tellRamdomFact = (self) => {
  const randomFact = getRandomFacts()
  self.emit(':tell', randomFact)
}

function AskFactIntent () {
  const searchWord = getSlotByName(this.event.request)
  const self = this
  if (!searchWord) {
    tellRamdomFact(self)
  } else {
    getAesClient.search({
      index: 'sadou-words-*',
      body: {
        query: {
          match: {
            title: searchWord
          }
        }
      }
    }).then(body => {
      const { hits } = body.hits
      if (hits.length === 0) return tellRamdomFact(self)
      const mostRelatedWord = hits[0]
      const title = mostRelatedWord._source.title
      const description = mostRelatedWord._source.description
      self.emit(':tell', makeResponse(title, description))
    }).catch(err => {
      console.log(err)
      tellRamdomFact(self)
    })
  }
}

exports.makeFact = makeFact
exports.AskFactIntent = AskFactIntent
