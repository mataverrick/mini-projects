class stack {
  constructor() {
    this.values = [];
    this.cont = 0;
  }

  setValue(value) {
    this.values.push(value);
    this.cont++;
  }

  getValue() {
    return this.values[this.cont -1];
  }

  deleteValue() {
    this.values.pop();
    this.cont--;
  }

  isEmpty(){
    return this.cont === 0;
  }
}
