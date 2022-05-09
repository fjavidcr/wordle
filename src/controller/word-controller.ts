const DEFAULT_LONGITUDE = 5

export default class WordController {
  private _longitude: number

  constructor(longitude = DEFAULT_LONGITUDE) {
    this._longitude = longitude
  }

  get longitude() {
    return this._longitude
  }
}
