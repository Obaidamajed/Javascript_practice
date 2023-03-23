// *** add and remove and toggle class ***

let hello = document.getElementById('hello');


// hello.onclick = function(){
//     hello.classList.add('name')
// }
//لما أضغط على هلو بضيفلي كلاس للفقرة
// hello.oncontextmenu = function(){
//     hello.classList.remove('name')
// }
//لما أضغط على هلو كليك يمين بحذفلي الكلاس اللي ضافو للفقرة

//onclick بتشتغل على الكليك يسار
//oncontextmenu بتشتغل على الكليك يمين
hello.onclick = function(){
    hello.classList.toggle('name')
}
//toggle هي بتجمع بين الآد والريموف مع بعض , أول ضغطة بتضيف الكلاس والضغطة الثانية بتحذفو

































