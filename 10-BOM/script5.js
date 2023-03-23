// *** Local & Session storage *** 

// #### كيف بدي أضيف البيانات
// localStorage.setItem('name','Obaida');
// // ضيف في اللوكال ستورج كاي اسمو نايم والفاليو إلو هو عبيدة
// // localStorage.setItem('key','value')
// localStorage.name = 'Ali';
// // ضيف في اللوكال ستورج كاي اسمو نايم والفاليو إلو هو علي
// // localStorage.key = 'value';
// localStorage.setItem('age', 25)// حيشوف الفاليو سترنق بالرغم إني دخلتو ك نمبر
// localStorage.setItem('skills', [1,2,3])// حيشوف الفاليو سترنق بالرغم إني دخلتو ك أرراي
// localStorage.user = {
//     name: "obaida",
//     age: "25"
// } 
// localStorage.setItem('age', JSON.stringify(25) )
// localStorage.setItem('skills', JSON.stringify([1,2,3]))
// localStorage.user = JSON.stringify({
//     name: "obaida",
//     age: "25"
// })
// //JSON.stringify() بتحولي الفاليو لسترنق في اللوكال ستورج فقط

// //حيعطيني الفاليو أوبجيكت أوبجيكت لأنو مو فاهم شو دخلتلو لأنو هو بقرأ الفاليو ك سترنق وما بفهم غير السترنق , فالحل لكل الحالات هاي هو إني أحول الفاليو لسترنق وهسا حنشوف كيف أعمل الفاليو سترنق
// // السطرين زي بعض بعطوني نفس النتيجة لكن السطر الثاني حيعمل
// // اوفر رايت عالسطر الاول لأنو عندي النايم إلو إسمين
// // وبالتالي حيطبع عندي اسم علي 

// //  لما أعمل ديليت هسا وأرجع للبراوزر بتضل الداتا محفوظة
// // في اللوكال ستوراج, خلينا نشوف كيف بدي أحذفهم من اللوكال ستوراج


// // #### كيف بدي أقرأ البيانات
// // console.log(        localStorage.getItem('name')          )
// console.log(        localStorage.name          )
// //  لما تنادي على الكاي بتيجيلك الفاليو الخاصة بالكاي وهون بحالتنا
// // الفاليو الخاص بالكاي نايم هو علي
// console.log(localStorage.getItem('age'))
// console.log(typeof localStorage.getItem('age')) // حيعطيني إنها سترنق بالرغم إني دخلتها ك نمبر
// console.log(typeof JSON.parse(localStorage.getItem('skills')) ) // حيعطيني إنها سترنق بالرغم إني دخلتها ك أرراي
// console.log(JSON.parse(localStorage.getItem('skills')) )

// //ال أرراي عبارة عن ابوجكت لذلك حيعطيني نوعو أوبجكت لكن لما أطبعها حيطبعلي إياها ع أرراي وهذا الممطلوب
// //JSON.parse() رجعت الفاليو لأصلو لما أعمل إلو قيت يعني استدعاء يعني في الكونسول لوق
// console.log(JSON.parse(localStorage.getItem('user')) )

// //......................................
// console.log(localStorage.key(0))
// console.log(localStorage.key(1))
// console.log(localStorage.key(2))
// console.log(localStorage.key(3))
// //هيك بستدعي الكاي نفسو
// //......................................

// // كيف بدي أمسح الداتا ؟ اللوكال ستوراج بحفظ البيانات الى مالانهاية, شو بدي اعمل ؟
// localStorage.removeItem('user')// هيك مسحت كاي اليوزر
// localStorage.clear()//بمسح كل الداتا

//..................................................................
// ##### Session storage
// كل الكلام اللي حكيناه بنطبق على السشن ستوراج

// الفرق بين اللوكال ستوراج والسشن ستوراج أن اللوكال بتحفظ الجاتا الى مالانهاية
// او لحد ما انا أمسحها
// أما السشن ستوراج الداتا اللي فيها بتنحذف اذا طلعت من الصفحة اللي انا فيها 
// بحيث اذا طلعت من الصفحة ورجعت عليها حلاقي البيانات محذوفات 
// أما في اللوكال ستوراج هذا الحكي ما بصير, الداتا ما بتنحذف فيها إلا لما
// أحذفهم أنا. سعة تخزين اللوكال ستوراج من 5 ل 10 ميجابايت
// أما السشن ف سعة تخزينها 5 ميجابايت
//.....................................................................
// ###EX: localStorage

// let txt = document.getElementById("txt");
// // console.log(txt)

// if(localStorage.length > 0 ){
//     txt.value = localStorage.getItem("txt")
// }// بهاي الخطوة بتخلي الداتا في التكست على طول حتى لو عملت ريلود , مدام في داتا في اللوكال ستوراج حيكون التكست في داتا من الكاي تكست
// txt.onkeyup = function(){
//     localStorage.setItem("txt", txt.value)
// }//هون حتى لو أطلع من الصفحة وأسكرها وأرجع أفتحها نفسها حلاقي البيانات اللي كتبتهم قبل ما أطلع من الصفحة لأنو لوكال ستوراج

//.....................................................................
// ###EX: sessionStorage

// let txt = document.getElementById("txt");
// // console.log(txt)

// if(sessionStorage.length > 0 ){
//     txt.value = sessionStorage.getItem("txt")
// }
// txt.onkeyup = function(){
//     sessionStorage.setItem("txt", txt.value)
// }//هون لو أطلع من الصفحة وأسكرها وأرجع أفتحها نفسها ماااا حلاقي البيانات اللي كتبتهم قبل ما أطلع من الصفحة لأنو سشن ستوراج
//.....................................................................
// Example:local storage



// if(localStorage.length > 0){
//     document.body.style.background = localStorage.color
// }


// function setColor(color)
// {
//     localStorage.setItem('color', color)
//     document.body.style.background = color;
   
// }
// localStorage.clear()
//.....................................................
// Example:session storage

if(sessionStorage.length > 0){
    document.body.style.background = sessionStorage.color
}


function setColor(color)
{
    sessionStorage.setItem('color', color)
    document.body.style.background = color;
   
}

// الفرق بين اللوكال والسشن في المثال السابق
// هو أن اللوكال لما أخرج من الصفة وأغلقها وأرجع أفتحها نفسها 
// بكون آخر شغل اشتغلتو عليها لسا محفوظ
// لكن في السشن ستورج كل إشي بنحذف اذا بسكر الصفحة وبرجع أفتحها






































