// *** add and remove elements from array ***

let names = ["ahmed","ali","mazen"];

console.log(names)

names.push('obaida',"taha");//add obaida & taha at the end
console.log(names)

names.unshift("abed")//add abed at the beginning
console.log(names)

names.shift()//delete at the beginning
names.shift()
names.shift()
console.log(names)
console.log(names.shift())

names.pop()//delete at the end
console.log(names)