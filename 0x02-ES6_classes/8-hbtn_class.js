export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    /* eslint no-underscore-dangle: 0 */
    this._size = size;
    this._location = location;
  }

  toString() {
    /* eslint no-underscore-dangle: 0 */
    return this._location;
  }

  valueOf() {
    /* eslint no-underscore-dangle: 0 */
    return this._size;
  }
}
