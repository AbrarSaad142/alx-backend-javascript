export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
  }

  get sqft() {
    /* eslint no-underscore-dangle: 0 */
    return this._sqft;
  }

  set sqft(sqft) {
    if ((typeof sqft !== 'number') && (sqft instanceof Number)) {
      throw new TypeError('Sqft must be a number');
    }
    /* eslint no-underscore-dangle: 0 */
    this._sqft = sqft;
  }
}
