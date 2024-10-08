export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  get length() {
    /* eslint no-underscore-dangle: 0 */
    return this._length;
  }

  set length(length) {
    if ((typeof length !== 'number') && !(length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    /* eslint no-underscore-dangle: 0 */
    this._length = length;
  }

  get students() {
    /* eslint no-underscore-dangle: 0 */
    return this._students;
  }

  set students(students) {
    if (!(students instanceof Array) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    /* eslint no-underscore-dangle: 0 */
    this._students = students;
  }
}
