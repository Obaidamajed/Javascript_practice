// Template Literals [Template Strings]



// let x = "hello its me obaida";

// console.log(x)





// let x = "hello its me obaida \n" +
// "Iam from coding orange academy";

// console.log(x)



// let x = "hello its me obaida \n" +
// "Iam from coding orange academy \n" +
// "I love all people ";

// console.log(x)



// let oldWay = "hello its me obaida \n" +
// "Iam from coding orange academy \n" +
// "I love all people ";

// console.log(oldWay);

// let newWay = `hello its me obaida  
// Iam from coding orange academy 
// I love all people` ;

// console.log(newWay);



// const theKind = "Male";


// let oldWay = "hello its me obaida \n" +
// "Iam " + theKind + "\n" +
// "Iam from coding orange academy \n" +
// "I love all people ";

// console.log(oldWay);

// let newWay = `hello its me obaida 
// Iam ${theKind}
// Iam from coding orange academy 
// I love all people` ;

// console.log(newWay);
// function pyramid(n) {
//   const midPoint = Math.floor((2 * n - 1) / 2)
//   for (let row = 0; row < n; row++) {
//     let level = ""
//     for(let col = 0; col < (2 * n - 1); col++) {
//       if (col + row >= midPoint && col - row <= midPoint) {
//         level += "*"
//       } else {
//         level += " "
//       }
//     }
//     console.log(level);
//   }
// }

// pyramid(3);
function pyramid(n) {
  const midPoint = Math.floor((n * 2 - 1) / 2)
  for(row = 0; row < n; row++) {
    let level = ""
    for(col = 0; col < (n * 2 - 1); col++) {
      if (col + row >= midPoint && col - row <= midPoint) {
        level += "*"
      } else {
        level += " "
      }
    }
    console.log(level);
  }
}

pyramid (4)

