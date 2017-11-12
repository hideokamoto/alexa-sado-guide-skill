const trivias = [
  '織部焼で有名な古田織部を主人公とした「へうげもの」という漫画があります。',
  'お茶事では、「千鳥の杯」とよばれる亭主・客と共に千鳥がけのようにお酒を酌み交わすやりとりがあります。',
  '茶人としても有名な細川幽斎は、手打ちした家臣の人数にちなんで「歌仙兼定」という名前を刀につけたことがあります。',
  '日本の建築様式の一つである数寄屋づくりは、茶道の茶室を取り入れたものといわれています。',
  '安土桃山時代、領土の代わりに名物の茶器を望んで却下された滝川一益という武将がいました。',
  '大阪城天守には、かつて豊臣秀吉がつくったと言われる黄金の茶室を復元したものがあります。',
  '京都には裏千家が運営する茶道資料館があり、茶道に関する展示や茶道体験ができます。'
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
