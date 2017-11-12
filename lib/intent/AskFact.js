const facts = {
  '楽焼': '楽焼とは、ろくろを使わずに手とヘラだけで整形する陶器のことです。１６世紀後半に、長次郎が千利休の指導のもと作ったものが始まりとされています。'
}

function getRandomFacts () {
  return 'テスト'
}

function getFacts (intents) {
  if (!intents || Object.keys(intents).length === 0) return getRandomFacts()
  const slots = intents.slots || {}
  if (!slots || Object.keys(slots).length === 0) return getRandomFacts()
  const factName = slots.factName || {}
  if (!factName || Object.keys(factName).length === 0) return getRandomFacts()
  const { value } = factName || ''
  if (!value) return getRandomFacts()
  return facts[value]
}

function AskFact () {
  const intents = this.event.request.intent || {}
  const speach = getFacts(intents)
  this.response.speak(speach).listen(speach)
  this.emit(':responseReady')
}

module.exports = AskFact
