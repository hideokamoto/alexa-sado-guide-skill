const conversation = require('alexa-conversation')
const app = require('../../index.js')

const opts = {
  name: 'Alexa Sample App',
  appId: 'your-app-id',
  app: app,
  handler: app.handler
}

conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('茶道ガイドへようこそ。茶道の小噺や用語についてお尋ねください。')
  .userSays('AskFactIntent', {factName: '楽焼'})
  .plainResponse
  .shouldContain('楽焼とは、ろくろを使わずに手とヘラだけで整形する陶器のことです。１６世紀後半に、長次郎が千利休の指導のもと作ったものが始まりとされています。')
  .end()

conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('茶道ガイドへようこそ。茶道の小噺や用語についてお尋ねください。')
  .userSays('AskFactIntent', {factName: 'なつめ'})
  .plainResponse
  .shouldContain('なつめとは、抹茶を入れるのに用いる木製漆塗りの蓋物容器のことです。形が植物のなつめの実に似ていることからそうよばれています。')
  .end()
