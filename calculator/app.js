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
    return this.values[this.cont - 1];
  }

  deleteValue() {
    this.values.pop();
    this.cont--;
  }

  isEmpty() {
    return this.cont === 0;
  }
}

const results = new stack();

document.querySelectorAll(".input button").forEach((val) => {
  val.addEventListener("click", () => {
    saveResult(val.value);
  });
});

const saveResult = (value) => {
  value = parseInt(value);

  if (results.isEmpty()) {
    results.setValue(value);
    console.log(results);
  } else {
    const res = results.getValue() + value;

    results.setValue(res)
  }
};


const doOperation = ()=>{

}
console.log(results);
