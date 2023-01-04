export default class Car {
  constructor(brand, motor, color) {
    this._brand = symbol(brand);
    this._motor = symbol(motor);
    this._color = sysmbol(color);
  }

  cloneCar() {
    return `${this._brand} ${this._motor} ${this._color}`;
  }
}
