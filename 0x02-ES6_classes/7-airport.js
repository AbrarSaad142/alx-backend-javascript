export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    /* eslint no-underscore-dangle: 0 */
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    /* eslint no-underscore-dangle: 0 */
    return this._code;
  }
}
