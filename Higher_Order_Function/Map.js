// ميثود خاصة بالأرراي  , بتنشأ أرراي جديدة , لو انت بدك تطبق على الأرراي
// اللي بتشتغل عليها فالماب ليس الحل المناسب لأن الماب بنشأ أرراي جديدة

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++){
    newArray.push(myNums[i]+myNums[i]);
}
console.log(newArray);

//Same idea with map
// الماب بقبل مني حاجتين, الكول ماب فنكشن والذيس أرقيومنت
// let addSelf = myNums.map(function(element, index, arr){
// // حيمشي على الأرراي ماينومز إيليمنت إيليمنت
// // console.log(`current element => ${element}`)
// // console.log(`current Index => ${index}`)
// // console.log(`Array => ${arr}`)
// // console.log(`This => ${this}`)//ال ذيس اللي بترجعها الفنكشن, لاحظ انها مش مكتوبة انا كتبتها بنفسي واللي هي 10
// return element + element;
// },10)
// console.log(addSelf);
//..........................................................
// let addSelf = myNums.map((element) => element + element);//لغينا الحاجات الأوبشن او الاختيارية
// let addSelf = myNums.map((a) => a + a);//لغينا الحاجات الأوبشن او الاختيارية
//     console.log(addSelf);

function addition(ele){
    return ele + ele;
}
let add = myNums.map(addition);
console.log(add);
// بعطيني نفس النتيجة لكن كتبتها بطريقة ثانية
























