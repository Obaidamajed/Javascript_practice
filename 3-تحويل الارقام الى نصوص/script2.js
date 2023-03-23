// *** slice - substring - substr ***

let name = 'i love java script';

console.log(name.slice());
console.log(name.substring());
console.log(name.substr());
console.log(name.slice(2,6));
console.log(name.substring(2,6) + "\n" + "\n");

console.log(name.slice(-6)); // بتوخذ قيمة سالبة 
console.log(name.slice(-6,-4));
console.log(name.substring(-6,-4)+ "\n" + "\n"); // ما بعطيني اشي لأنها ما بتوخذ قيمة سلبية وهذا الفرق بينهم

console.log(name.slice(2,6));
console.log(name.substring(2,6)); //حيقطعو من الاندكس رقم 2 للاندكس رقم 6
console.log(name.substr(2,6)); // حتعد 6 احرف من الاندكس رقم 2 وهذا الفرق بينها وبين اللي فوقيها 






