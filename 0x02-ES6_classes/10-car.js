export default class Car {
  constructor(brand, motor, color) {
    /* eslint no-underscore-dangle: 0 */
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this.prototype.constructor;
  }

  cloneCar() {
    return new (this.constructor[Symbol.species])();
  }
}
