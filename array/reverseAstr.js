//create a function that reverses a string
// [shahima] ----> [amihahs]

// 1........///////////////////////////////////// crude solution /////////////////////////////////////////////////////////////////////

function revStr1(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "pls enter valid array";
  } else {
    const resArray = [];
    const strToArray = str.split("");
    console.log("1) " + strToArray);
    const pointer = str.length - 1;
    for (let i = pointer; i >= 0; i--) {
      resArray.push(strToArray[i]);
    }
    console.log(resArray);
    const arrayToStr = resArray.join("");
    console.log(arrayToStr);
    return arrayToStr;
  }
}

//2............///////////////////////////////////////////////////////  optimsed solution  /////////////////////////////////////////////////////////
function revStr2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
  } else {
    const resArray = [];
    ///// in java script no need to convert str to array
    //   const strToArray = str.split("");
    //   console.log(strToArray);
    const pointer = str.length - 1;
    for (let i = pointer; i >= 0; i--) {
      resArray.push(str[i]);
    }
    console.log("2) " + resArray.join(""));
    return resArray.join("");
  }
}

//3.............../////////////////////////////////////////  Best Solution with respect to all the langs////////////////////////////////////////////
// the following solution is an inplace solution there is not creation of a
//seprate array rather the array is reversed in the existing space

function bestRevStr(strr) {
  if (!strr || strr.length < 2 || typeof strr !== "string") {
    return "enter valid string";
  } else {
    const str = strr.split("");
    let i = 0;
    let j = str.length - 1;
    console.log("3) " + str);
    while (i < j) {
      let temp = str[i];
      str[i] = str[j];
      str[j] = temp;
      i++;
      j--;
    }
    console.log(str.join(""));
    return str.join("");
  }
}

//4................./////////////////////////////////////////////////// java script built in solution ////////////////////////////////////////////////////

function builtRevMthd(str) {
  console.log("4) " + str.split("").reverse().join(""));
  return str.split("").reverse().join("");
}
//5.................///////////////////////////////////////////////////    fancy const    ///////////////////////////////////////////////

const dope = (str) => console.log("5) " + [...str].reverse().join(""));

// result ....................////////////////////// ////////////////////////// funtion calling
revStr1("Aadil");
revStr2("Shahima");
bestRevStr("Aqib");
builtRevMthd("Khushi");
dope("sanjana");
