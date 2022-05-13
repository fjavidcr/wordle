import WordController from './word-controller'

export default class GameController {
  private _word: string

  constructor(word = '') {
    this._word = word
  }

  async initialize() {
    const wordController = new WordController()
    console.log(wordController.longitude)
    if (this._word === '') this._word = await wordController.chooseWord()
  }

  get word() {
    return this._word
  }
}
