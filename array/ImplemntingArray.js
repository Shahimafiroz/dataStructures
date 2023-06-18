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
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.length - 1]; // commment this and the last item wont be deleted
  }
}

const newArray = new myArray();
newArray.push("shahima");
newArray.push("you");
newArray.push("khushi");
newArray.push("Snaju");
console.log(newArray);
newArray.delete(1);
console.log(newArray);

//Here's an explanation of the code:

// The myArray class has a constructor that initializes the properties length and data. length represents the number of elements in the data structure, and data is an object that will store the elements.

// The get(index) method allows you to retrieve an element from the data structure by providing an index. It returns the element at the specified index in the data object.

// The push(item) method adds an item to the data structure. It assigns the item to this.data[this.length], which means the item will be stored at an index equal to the current length of the data structure. The length is then incremented, and the new length is returned.

// The pop() method removes the last item from the data structure. It retrieves the last item using this.data[this.length - 1], decrements the length, and returns the last item. However, there is an issue in the code with the line delete this.lastItem;. It should be delete this.data[this.length - 1]; to delete the last item from the data object.

// The delete(index) method removes an item from the data structure based on the provided index. It calls the shiftItm(index) method to shift the remaining items in the data object to fill the gap left by the deleted item.

// The shiftItm(index) method is responsible for shifting the elements in the data object when an item is deleted. It starts from the provided index and iterates over the elements, moving each item one position to the left. However, there is an issue in the code with the line this.data[this.length - 1];. It should be delete this.data[this.length - 1]; to remove the last item from the data object.

// The code demonstrates the implementation of basic array-like operations using an object and associated methods. However, as noted in the provided comment, implementing an array is not a typical interview question. It's more important to understand and apply array operations rather than focusing on the internal implementation of an array-like structure.
