// *** string ***

// 1- repeat 
// 2- length 
// 3- access 
// 4- search 
// 5- slice 
// 6- split 

let name = "ali "; 
// the string is a sequence value قيم متسلسلة يعني قيم بتنحفظ بشكل متسلسل
// "a" بتتخزن في مكان
// "l" بتتخزن في مكان
// "i" بتتخزن في مكان
// كل إندكس منهم بتخزن بمكان وبقدر أستدعيهم من خلال النايم
// name[0] = "a"
// name[1] = "l"
// name[2] = "i"
console.log (name.repeat(3)+ "\n" + "\n") 
console.log (name.length) 
// .length بتعد أي قيمة متسلسلة وبما انو الستينق قيمة متسلسلة ف رح تعدلي اياه
let x = 100;
console.log(x.length + "\n" + "\n");
// الارقام ليست سيكوينس فاليو وهي بتنحفظ في مكان واحد 
// وبالتالي ما بقدر يعدها لذلك حيعطيني أنديفايند

// name[0]="a";
// name[1]="l";
// name[2]="i";
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name.charAt(0));
console.log(name.charAt(1));
console.log(name.charAt(2));

console.log("\n");

// The difference between them is:
console.log(name[20]);
console.log(name.charAt(20));

console.log(name.indexOf("l"))
console.log(name.indexOf("a")+ "\n" + "\n")

let obaida = "i love java script";

console.log(obaida.indexOf("a"))
console.log(obaida.indexOf("a",9)) // سيبدأ البحث من الإندكس رقم 9
console.log(obaida.indexOf("java")+ "\n" + "\n")

console.log(obaida.lastIndexOf("l"))
console.log(obaida.lastIndexOf("i")) // 15
console.log(obaida.lastIndexOf("i",14)+ "\n" + "\n")

console.log(obaida.slice()); // بتقطِع
console.log(obaida.slice(0));
console.log(obaida.slice(2)); // بقطع من الاندكس 2 للآخر
console.log(obaida.slice(0,3)); // قطع اندكس 0,1 و 2 وما شمل اندكس 3 
console.log(obaida.slice(0,6));
console.log(obaida.slice(2,3)+ "\n" + "\n"); // قطع إندكس رقم 2

console.log(obaida.split()) // هاي بتقطع السترنق وبتحطو في أراي
console.log(obaida.split(" "))
console.log(obaida.split("a"))
console.log(obaida.split("_")) // ما عندي أندر سكور في المتغير عبيده لذلك حينزل المتغير عبيدة كامل زي ما هو في اراي

console.log(obaida.split("a",2)) // بجيبلي العناصر لحد آخر آي قطعها
console.log(obaida.split("")) // قطع كل حرف لوحدو
console.log(obaida.split("",3)) // بقطع 3 حروف, الفراغ بعتبرو حرف

