import Building from './5-building';

export default class skyHighBuilding extends Building {
  constructor(sqrt, floor) {
    if (typeof sqrt !== 'number') throw new TypeError('SQRT must be a number');
    if (typeof floor !== 'number') throw new TypeError('Floor must be a number');
    super(sqrt);
    this._floor = floor;
  }

  get floor() {
    return this._floor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floor} floors`;
  }
}
