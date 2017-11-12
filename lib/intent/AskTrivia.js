const trivias = [
  '織部焼で有名な古田織部を主人公とした「へうげもの」という漫画がある。'
]

function getRandomNumber () {
  const min = 0
  const max = trivias.length - 1
  const number = Math.floor(Math.random() * (max + 1 - min)) + min
  return number
}

function makeReqponse (number = 0) {
  const say = `${trivias[number]}`
  return say
}

function AskTrivia () {
  const number = getRandomNumber()
  const say = makeReqponse(number)
  this.response.speak(say).listen(say)
  this.emit(':responseReady')
}

module.exports = AskTrivia
