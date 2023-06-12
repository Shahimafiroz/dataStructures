// REFRENCE TYPES

let obj1 = { value: 10 };
let obj2 = obj1; // obj2 references the same object as obj1
obj2.value = 20;
console.log(obj1.value); // Output: 20

//CONTEXT

// In the above example, the greet function is defined within the obj object. When called as obj.greet(), the this keyword inside the function refers to the obj object. The name property of obj is accessed within the function due to the context provided by the object method call. In contrast, when the sayHello function is called without any specific object context, this refers to the global object. Since there is no name property defined in the global object, the output is undefined. Here, the scope is the global scope, and the context is the global context.
const obj = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

obj.greet(); // Output: Hello, John! (context is obj, scope is the object method)
sayHello(); // Output: Hello, undefined! (context is global, scope is the global scope)

// INSTANTIATION
