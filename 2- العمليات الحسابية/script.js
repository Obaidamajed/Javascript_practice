// *** العمليات الحسابية في الجافاسكريبت ***

let num = 5;

console.log(num + 4) // عملية جمع لانو عندي رقمين
console.log('num' + 4) // عملية دمج لانو صار عندي رقم ونَص

console.log("\n");

let num1 = 5;
let num2 = 4;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 ** num2); // ** = أُس
console.log(num1 / num2);
console.log(num1 % num2); // % = بتعطيني ناتج باقي القسمة

console.log("\n");

console.log( 'num1' + num2);
console.log( 'num1' - num2); // بعطيني نوت أَ نومبر لأني بقوم بعملية حسابية برقم غير مفهوم وهذا الكلام بنطبق على جميع العمليات الحسابية ما عدا الكونكاتينايشن
console.log( 'num1' * num2);
console.log( 'num1' / num2);
console.log( 'num1' % num2 + '\n' + '\n');

let numm = 10;
numm = numm + 1; // =  numm += 1  =  numm++
numm -= 1; // numm--
numm -= 4;
console.log(numm)
console.log(    ++numm    ) // ++numm بزود واحد بعدين بطبع
console.log(    numm++    ) // بطبع بعدين بزود واحد
console.log(    numm    ) // هون صار الناتج 8لانو زاد بالخطوة القبليها 1 بعد ما طبع
