// *** Arguments ***

// function hello(name)
// {
//     console.log(`hello ${name}`);
// }
// hello(); حيعطيني hello undefined لأني ما حددت قيمة النايم وانا بدي أحل هالشغلة لأنو مو منطق اذا المستخدم ما دخل إشي محل النايم يطلع عندو أن ديفايند


// function hello(name="") // القيمة الافتراضية اللي حطيتها بتظهر لما ما أدخل إشي محل النايم لما أستدعي الفنكشن
// {
//     console.log(`hello ${name}`);
// }
// hello('obaida');


// function calcAge(age) 
// {
//     console.log(age * 365);
// }
// calcAge(); // حيطلعلي NaN

// function calcAge(age=0) //حطيت قيمة افتراضية بحيث اذا ما دخل اشي المستخدم ما يطلع عندي NaN
// {
//     console.log(age * 365);
// }
// calcAge();


// function calc(    ...numbers    ) // القيمة اللي بداخل هذا القوس اسمها باراميتر
// // بدي اعمل ارراي داخل الاقواس اللي فوق حتى توخد مني أي عدد من الأرقيومنت
// // انا مو عارف كم أرقيومنت حيدخل عندي
// {
//     console.log(numbers); // هيك بطبع الأرراي
// }
// calc(1,2,4,6,7,8); // القيمة اللي بداخل هذا القوس اسمها ارقيومنت
// هسا بدي أشوف كيف بدي أجمع الأرقام اللي بداخل الأرراي
function calc(    ...numbers   )
{
let result = 0;
for ( let i=0 ; i<numbers.length ; i++ ){
    result += numbers[i];
}
console.log(result);
}


calc(5,2,1,9,6,4,3);
















