// *** after before append ***

let after = document.getElementById('after');
let before = document.getElementById('before');
let append = document.getElementById('append');
let content = document.getElementById('content');
let container = document.getElementById('container');

container.style.background = '#ffa';
container.style.height = '100px';


after.onclick = function(){
    container.after(content)// حطلي الكونتينت بعد الكونتاينر
}
before.onclick = function(){
    container.before(content)
}
append.onclick = function(){
    container.append(content) // لما اضغط على الآبيند حطلي الكونتينت في الكونتاينر
}
























