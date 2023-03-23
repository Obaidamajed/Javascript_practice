// *** auto event ***

let txt = document.getElementById('txt');
let myBtn = document.getElementById('btn');

onload = function(){
    txt.focus(); //مجرد ماأعمل ريلود للصفحة حيعمل فوكس على التكست
}
onload = function(){
    myBtn.click(); //مجرد ماأعمل ريلود للصفحة حيعمل كليك على الزر وبالتالي حيتحول الباط قراوند للون اصفر
}
onload = function(){
    txt.value = 'test'; //مجرد ماأعمل ريلود للصفحة حيكتب تكست في مربع التكست
}
onload = function(){
    txt.placeholder = 'test' //مجرد ماأعمل ريلود للصفحة حيعمل البلاس هولدر تيست
}
// طبعا هون نفَذ آخر أون لود فقط لأنو بقرأ من فوق لتحت وبنفذ ااخر أمر بشوفو
txt.oncontextmenu = function(){
    txt.blur()//لما اضغط كليك يمين بقيم تأثير الفوكس اللي على النص
}
myBtn.onclick = function(){
    myBtn.style.background = '#ffa'
}
























