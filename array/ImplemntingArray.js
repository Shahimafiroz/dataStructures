// you will hardly be asked to implement array in an interview (its like derivation of formulas . While solving problems we are only concerned with applying the formulas and not actullly deriving the formula) But its good to konw the derivation

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // get an element
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.lastItem;
    this.length--;
    return lastItem;
  }

  delete(index) {
    const itm = this.data[index];
    this.shiftItm(index);
  }

  shiftItm(index) {
    for (i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const newArray = new myArray();
newArray.push("shahima");
newArray.push("you");
newArray.push("khushi");
newArray.push("Snaju");
console.log(newArray);
newArray.pop();
console.log(newArray);
