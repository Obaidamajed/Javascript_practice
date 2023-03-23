// *** String search ***

let name = "i love java script";

console.log(name.indexOf("a")); // بترجعلي رقم الاندكس
console.log(name.lastIndexOf("a"));
console.log(name.indexOf("a",9) +'\n'+'\n');

console.log(name.includes("a")); // بترجعلي ترو او فولس
console.log(name.includes("z")); 
console.log('\n');
console.log(name.indexOf("z")); // بتطلعلي -1 ادا ما كان الحرف موجود
console.log(name.includes("o",3)); // بتبحث من الاندكس رقم 3
console.log(name.includes("o",4)+'\n'+'\n'); 

console.log('\n');

console.log(name.startsWith("i")); // هل هذا السترنق ببدا بحرف ال أي
console.log(name.startsWith("a"));
console.log(name.startsWith("l",2)); // هل ببدا بحرف ال إل من الاندكس رقم 2 ؟
console.log(name.startsWith("love",2) +'\n'+'\n');

console.log(name.endsWith("t"));
console.log(name.endsWith("e",6)); // هل ال6 حروف الأولى بنتهو بحرف ال إي
console.log(name.endsWith("e",8));
console.log(name.endsWith("j",8));
