// *** المقارنة ***

let x = "ahmed";
let y = "ali";

console.log(x == y)// == معناها هل تساوي ؟
console.log(x = y)//قيمة واي انضافت بالمتغير إكس
//........................................

let askemail = prompt("enter your email");
let email = "obaida@gmail.com";
console.log(askemail.toLowerCase().trim()==email) // هل الايميل اللي حيدخلو المستخدم يساوي المتغير إيميل

let t = "     obaida majed      "
console.log(t);
console.log(t.length);
console.log(t.trim().length);
// .trim() ما بتلغي المسافات من النص حتى لا تخرب الكلام وتدخلو ببعض
// .trim() بلغي أي مسافات عاملها 
// المسافات بتسببلي مشكلة لأنو المسافة الوحدة عبارة عن حرف وبالتالي
// حيعطيني فولس حتى لو كنت مدخل نفس الايميل
//........................................

let z = "ahmed";
let w = "AHMED";

console.log(z.toUpperCase());//بحول الى حروف كبيرة
console.log(w.toLowerCase());//بحول الى حروف صغيرة





