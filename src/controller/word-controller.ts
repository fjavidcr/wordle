export default class WordController {
  private _longitude: number

  constructor(longitude: number) {
    this._longitude = longitude
  }

  get longitude() {
    return this._longitude
  }
}
