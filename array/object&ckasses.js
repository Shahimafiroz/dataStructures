const str = ["a", "b", "c", "d"];
// 4*4 = 16 bytes

//lookup using index 
str[2];
console.log(str[2]); // O(1)                                  View elements at the given index
// push (insert )
str.push("e"); //O(1)                                         Add the element to the last

//pop (delete)
str.pop(); //O(1)                                             Removes the last element

//unshift (insert)
str.unshift("x"); // O(n)                                     Adds the element at the begning of the array

//Splice:-  (inserts & delete) element in between            array.splice( index , elemenntsToBeDeleted , Item_to_be_added)           

str.splice(4, 0, "Shahima"); //  // O(n/2)---> but ignore constants acc to rules .: O(n)  

//
console.log(str);
