const str = ["a", "b", "c", "d"];
// 4*4 = 16 bytes
str[2];
console.log(str[2]);
// push
str.push("e"); //O(1)            Add the element to the last

//pop
str.pop(); //O(1)                Removes the last element

//unshift
str.unshift("x"); // O(n)        Adds the element at the begning of the array

//Splice                         inserts element in between
str.splice(4, 0, "Shahima"); //  array.splice( index , elemenntsToBeDeleted , Item_to_be_added)

//
console.log(str);
