// *** search in array ***

let names = [ "ahmed", "ali", "mazen","gamal","ali","ahmed"]
console.log(names.indexOf("ahmed"))
console.log(names.indexOf("ahmed",1))// بعطيني -1 يعني معناها إنو ما لقى العنصر اللي ببحث عنو
console.log(names.indexOf("ahmed"))
console.log(names.indexOf("ahmed",1))
console.log('\n');
console.log(names.indexOf("ali",1))
console.log(names.indexOf("ali",2))
console.log(names.lastIndexOf("ali"))
console.log(names.lastIndexOf("ahmed"))
console.log('\n');
console.log(names.lastIndexOf("ahmed",3))// ببدا البحث من الاندكس 3
console.log(names.lastIndexOf("ahmed",-1))
console.log(names.lastIndexOf("ahmed",-2))
console.log(names.includes("ahmed"))
console.log('\n');
console.log(names.includes("mazen"))
console.log(names.includes("mazen",3))
console.log(names.includes("mazen",2))



