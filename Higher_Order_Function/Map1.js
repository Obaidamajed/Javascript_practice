let swappingCases = 'elZERo';
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = 'Elz123er4o'

// condition ? true : false
//1-
// let sw =swappingCases
// .split("")
// .map(function(ele){//.split حتى أحولو ل أرراي
// return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");//.join("")حتى أعملها سترنق
// console.log(sw); 

//Arrow function: 
let sw =swappingCases
.split("")
.map ((ele) => (ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()))
.join("");

console.log(sw);


//2-
let inv = invertedNumbers.map(function(ele){
    return -ele;
})
console.log(inv);


//3-
let ign = ignoreNumbers.split("").map(function(ele){
    return isNaN(parseInt(ele)) ? ele : "";
}).join("")
console.log(ign);




























