import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    /* eslint no-underscore-dangle: 0 */
    this._fllors = floors;
  }

  get floors() {
    /* eslint no-underscore-dangle: 0 */
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    /* eslint no-underscore-dangle: 0 */
    this._floors = floors;
  }

  evacuationWarningMessage() {
    /* eslint no-underscore-dangle: 0 */
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
