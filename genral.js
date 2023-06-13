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

// obj.greet(); // Output: Hello, John! (context is obj, scope is the object method)
// sayHello(); // Output: Hello, undefined! (context is global, scope is the global scope)

// INSTANTIATION

// involves a number of concepts 1. Constructors  2. inheritence 3.Principal class and derived Class

class player {
  constructor(nam, type) {
    console.log("player", this);
    this.playerName = nam;
    this.playerType = type;
  }

  introduce() {
    console.log(`hi im ${this.playerName} , im a ${this.playerType}`);
  }
}

// using inheritance

class wizard extends player {
  constructor(spell, powers, nam, type) {
    // console.log("wiz", this); never use the derived class before "super" it will give error
    super(nam, type);
    this.spellWiz = spell;
    this.powersWiz = powers;
    console.log("wiz", this);
  }

  castSpell() {
    console.log(
      `I ${this.playerName} posses the power of ${this.powersWiz} , and I now cast a spell ${this.spellWiz}`
    );
  }
}

class fighter extends player {
  constructor(killCapacity, killTime, nam, type) {
    super(nam, type);
    this.killfig = killCapacity;
    this.killtim = killTime;
  }

  fightBugs() {
    console.log(
      `I ${this.playerName} posses the kill capacity of ${this.killfig} , and I can kill for ${this.killtim}`
    );
  }
}
// now instantly creating new players(Objects) of different kinds(wizards and fighters) using main class(player) and derived class(fighters and wizards)
const wiz = new wizard(
  "Abra cadabra ",
  "Turning readers in coding wizards",
  "Shahima",
  " HighPriestess"
);
const Bugkiller = new fighter("1000", "0.1 seconds", "Khushi", "cyberQueen");
// calling everyone
wiz.introduce();
wiz.castSpell();

Bugkiller.introduce();
Bugkiller.fightBugs();

// Out put

// player wizard {}
// wiz wizard {
//   playerName: 'Shahima',
//   playerType: ' HighPriestess',
//   spellWiz: 'Abra cadabra ',
//   powersWiz: 'Turning readers in coding wizards'
// }
// player fighter {}
// hi im Shahima , im a  HighPriestess
// I Shahima posses the power of Turning readers in coding wizards , and I now cast a spell Abra cadabra
// hi im Khushi , im a cyberQueen
// I Khushi posses the kill capacity of 1000 , and I can kill for 0.1 seconds
