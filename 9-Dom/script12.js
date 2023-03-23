// *** عمل navbar بالجافاسكريبت ***

let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let container = document.querySelector('.container');

btnClose.onclick = function(){
    container.classList.add('hide');
    this.classList.add('hide');//this=btnClose
    btnOpen.classList.remove('hide')
}
//لما أضغط على كلوز حيختفي الكونتاينر ويختفي أيضا زر الكلوز ويظهر عندي زر الأوبن
btnOpen.onclick = function(){
    this.classList.add('hide')
    btnClose.classList.remove('hide')
    container.classList.remove('hide')
}

























