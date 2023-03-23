// *** events in javascript ***

let btn =document.getElementById('btn');

var 

    myInput = document.getElementById('input');

    myDiv = document.getElementById('div');

    myCurrency = document.getElementById('currency');


// btn.onclick = function(){
//     console.log('click');
// }
// onclick لازم تضغط وتترك على نفس العنصر
//...................................................
// btn.onmouseup = function(){
//     console.log('click');
// }
//onmouseup شرط تترك إيدك على الزر حتى لو ضغطت خارج الزر وتركت على الزر حيطبعلك الفنكشن أما لو ضغطت على الزر وتركت خارج الزر ما حيطبع
//...................................................
// btn.onmousedown = function(){
//     console.log('click');
// }
//onmousedown بمجرد ما أضغط على العنصر بطبعلي الفنكشن
//...................................................
// btn.onmouseover = function(){
//     console.log('click');
// }
//onmouseover بمجرد ما ييجي الماوس فوق الزر بطبعلي الفنكشن
//...................................................
// btn.onmouseout = function(){
//     console.log('click');
// }
//onmouseout بمجرد ما أخرج من الزر بطبعلي الفنكشن
//...................................................
// btn.onmousemove = function(){
//     console.log('click');
// }
// onmousemove كل ما بتتحرك على الزر بطبع الفنكشن
//...................................................
// myInput.onkeyup = function(){
//     "use strict";
//     myDiv.innerHTML = myInput.value * 3.75;
// }

//خلينا نشوف اذا استخدمت الأون تشانج شو رح يصير

// myInput.onchange = function(){//ما بطبع مباشرة لما أكتب, بطبع لما أخرج من التكست بعد ما أكتب فيه
//     "use strict";
//     myDiv.innerHTML = myInput.value * 3.75;
// }

myCurrency.onchange = function(){
    "use strict";
    myDiv.innerHTML = 'worth ' + myInput.value * myCurrency.value + ' JD';
}
//  لما أكتب أي قيمة بداخل التكست وأروح أغير الأوبشن حيوخذ قيمة التكست
// ويضربها ب قيمة الأوبشن اللي انا غيرتو
//onchange بتشتغل مع التكست آريا ومع الإنبوت ومع السيليكت, ما بتشتغل مع أي عنصر






// حننتقل لأحداث الكيبورد
// let inp = document.getElementById('inp');

// inp.onkeyup = function(){
//     console.log('click');
// }
//onkeyup ما بطبع الفنكشن إلا لما أرفع إيدي عن الكيبورد
//...................................................
// inp.onkeydown = function(){
//     console.log('click');
// }
//onkeydown بمجرد ما أضغط على أي زر بطبع الفنكشن مباشرة
//...................................................

// حننتقل لأحداث الفورم
// inp.onfocus = function(){ // الإنبوت عبارة عن أوبجيكت بالتالي بقدر أنادي عليه عن طريق ذيس
//     inp.style.border = '4px solid #f00';
// }
//onfocus لما أضغط على العنصر وأعمل عليه فوكس بنفذ الفنكشن
//...................................................
// inp.onblur = function(){
//     inp.style.border = '4px solid #f00';
// }
//onblur لما أضغط خارج العنصر بعد ما أكون ضغطت عليه في البداية حينفذ الفنكشن
//...................................................
// onload = function(){
//     document.body.style.background = 'green'
// }
//onload أول ما أشغل الصفحة أو أعمللها ريلود بتنفذ الفنكشن
//...................................................
// onresize = function(){
//     document.body.style.background = 'green'
// }
//onresize أول ما تغير حجم الشاشة سواء صغرتها او كبرتها حيطبع الفنكشن














