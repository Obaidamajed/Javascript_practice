// *** concat and join array ***

let arr1 = ["ahmed", "ali", "mazen"]
let arr2 = ["gamal", "karem", "omar"]

// arr1 = arr1 + arr2;
// arr1 += arr2;//the same




// console.log(typeof arr1)

arr1.concat(arr2)
console.log(arr1.concat(arr2))//الكونكات بتضيف المصفوفات بين بعض وبتقدر تضيف اي اشي كمان لكن لو ضفناهم من خلال ال + حيدمجلي اياهم ويعملهم سترينق وانا بدي اياهم يكونو مصفوفة مو سترنق

console.log(arr1.concat(arr2,"mona"))

console.log(arr1)
console.log(arr1.join())//الجوين بتضيف عناصر المصفوفة بدون المصفوفة نفسها
console.log(typeof arr1.join())
console.log(arr1.join(" "))//بتفصل بين كل عنصر والآخر اللي بداخل المصفوفة
console.log(arr1.join(" # "))// بتحط هاشتاق بين كل عنصر والآخر بداخل المصفوفة