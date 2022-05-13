import { getRandomWord } from '@/db/wordsDB'

export default class WordController {
  private _longitude: number

  constructor(longitude = 5) {
    this._longitude = longitude
  }

  get longitude() {
    return this._longitude
  }

  async chooseWord() {
    return await getRandomWord(5)
  }
}
