// *** عمل برنامج لتحويل الجنيه الى دولار والعكس ***

let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');

// dollar.onkeyup = function(){
//     console.log(dollar.value)//.value مهمة جدا, ما بتشتغل إلا مع الإنبوت
// }
dollar.onkeyup = function(){
    pound.value = dollar.value * 15.6;
}
pound.onkeyup = function(){
    dollar.value = pound.value / 15.6;
}

























