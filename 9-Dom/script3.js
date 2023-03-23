// *** sipling and parent ***

let element = document.getElementById("second");

element.nextElementSibling.innerHTML = "test";// أضاف بداخل العنصر اللي بعدو
element.previousElementSibling.remove() // مسح العنصر اللي قبلو

console.log(element)
console.log(element.previousElementSibling)//بوصل للعنصر اللي قبلو
console.log(element.nextElementSibling)
console.log(element.previousSibling)//بجيب الاشي اللي قبلو سواء كان عنصر او اي اشي ثاني
console.log(element.nextSibling)
console.log(element.parentElement)//وصلت لعنصر العنصر وكمان بإمكاني أحذفو بنفس الطريقة اللي قبل للحذف
































