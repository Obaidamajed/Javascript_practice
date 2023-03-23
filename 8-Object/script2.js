// *** create object ***

let user = {};

user.name = "ahmed";
//بالشكل هذا ضفت بروبرتي في الاوبجيكت اللي اسمو نايم وأعطيت البروبرتي اسم احمد
//  ===> let user = 
//         {
//             name:"ahmed"
//         };
user["age"]=25;//ضفت بروبرتي من خلال البراكيتس
user.hello = function(){
    return "hello"; 
}
//هيك ضفت ميثود بداخل الأوبجيكت
console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.hello())
console.log('\n')
// لو كان البروبرتي اللي اسمو احمد أصلا موجود بالأوبجيكت يوزر, ساعتها حيعدلو ويكت محلو احمد
 let obaida = {name:"sami"};
 console.log(obaida.name)//هون حيطبعلي سامي لأني لسا ما عدلت على البروبرتي نايم
 obaida.name = " ali";//استبدل سامي ب علي
 console.log(obaida)
 console.log(obaida.name)
 console.log('\n')


// let abc = new String(); // هيك حكيتلو حول المتغير الى اوبجيكت يكون سترنق
// console.log (abc) // الاوبجيكت ممكن يكون نوعو سترنق او نمبر او بوليان او حتى اوبجيكت 
// let abc = new Number();
// console.log (abc)
// let abc = new Boolean();
// console.log (abc)
let abc = new Object();
abc.title ="obaida"
console.log (abc)
console.log (abc.title)










