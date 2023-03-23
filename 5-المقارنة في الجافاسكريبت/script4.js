// *** if 3 ***

// age = prompt("what is your age ?"); كتبت المتغير بدون ليت, عادي لكن الأصح أكتبها
// if (age >= 18)
// {
//     document.write("hello world");
// }
// else
// {
//     document.write("no you are very young");
// }


//..............................................
//كتابة الجملة الشرطية بطريقة اخرى
// age = prompt("what is your age ?");
// age >= 18?
//         document.write("hello world")
//         :document.write("no you are very young");//: = else
//..............................................

// age = prompt("what is your age ?");
// age > 18?
//         document.write("hello world")
//         :age == 18?
//         document.write("you are young")//: = else
//         :document.write("nooooooooooo")

//..............................................
let age = prompt("what is your age?");
let result = age > 18?"hello world" :age == 18?"you are young":"noooooooooooooooooooooooooooooooo"
// في حال العمر اكبر من 18 احفظلي بالمتغير ريزولت جملة هلو وورد وفي حال العمر 18 احفظلي بالمتغير ريزولت يو اار يونق وهكذا ...
console.log(result)


