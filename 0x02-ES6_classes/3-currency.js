export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    /* eslint no-underscore-dangle: 0 */
    return this._code;
  }

  set code(code) {
    if ((typeof code !== 'string') && !(code instanceof String)) {
      throw new TypeError('Code must be a string');
    }
    /* eslint no-underscore-dangle: 0 */
    this._code = code;
  }

  get name() {
    /* eslint no-underscore-dangle: 0 */
    return this._name;
  }

  set name(name) {
    if ((typeof name !== 'string') && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    /* eslint no-underscore-dangle: 0 */
    this._name = name;
  }
}
