import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    /* eslint no-underscore-dangle: 0 */
    return this._amount;
  }

  set amount(amount) {
    if ((typeof amount !== 'number') && !(amount instanceof Number)) {
      throw new TypeError('Amount must be a number');
    }
    /* eslint no-underscore-dangle: 0 */
    this._amount = amount;
  }

  get currency() {
    /* eslint no-underscore-dangle: 0 */
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instanceof of Currency');
    }
    /* eslint no-underscore-dangle: 0 */
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
