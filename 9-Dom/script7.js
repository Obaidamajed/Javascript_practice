// *** events ***

// function hello ()
// {
//     console.log('heloooo')
// }

let btn = document.getElementById('btn');

// btn.onclick = function(){ // عند الضغط على الزر بي تي ان نفذلي الفنكشن
//     console.log('hello')
// }
//..................................................
// function hello(){
//     console.log('hello')
// }
// btn.onclick = hello; //عند الضغط على الزر نفذلي الفنكشن هلو
//..................................................
// function hello(){
// document.body.style.background= "red"
// }
// btn.onclick = hello; //عند الضغط على الزر نفذلي الفنكشن هلو
//element.onevent = the command(function)
//..................................................

// btn.addEventListener('click', function(){
//     console.log('hello');
// })
// btn.addEventListener('write event without on', the command)


// *** The difference between two method ***

// method1
// btn.onclick = function(){
//     document.body.style.background = 'red';
// }

// btn.onclick = function(){
//     btn.style.background = 'blue';
// }

// btn.onclick = function(){
//     btn.style.color = 'white';
// }

// method2
btn.addEventListener('click', function(){
    document.body.style.background = 'red';
})
btn.addEventListener('click', function(){
    btn.style.background = 'blue';
})
btn.addEventListener('click', function(){
    btn.style.color = 'white';
})

// الآد إيفينت ليسينر بتنفذ كل الأوامر لكن الأون كليك بنفذ آخر أمر فقط

// btn.onclick = 'test'; // المفروض والمنطقي يكون الإيفينت عبارة عن فنكشن ولذلك المفروض يعطيني أيرور لكن ما بعطيني
// btn.addEventListener('click','test'); // هون بعطيني إيرور

// ***************************** عندك طريقتين لإضافة الحدث:
// أول طريقة عن طريق العنصر نفسو في ملف ال أتش تي أم أول
// والطريقة الثانية عن طريق ملف الجافاسكريبت
// وعن طريق الجافاسكريبت بتقدر تضيف الحدث بطريقتين
// الطريقة الاولى عن طريق الآد إيفين ليسينر
// والطريقة الثانية عن طريق الأون كليك او الأون إيفينت لأنو لسا
// في عنا أحداث كثيرة حندرسها


























