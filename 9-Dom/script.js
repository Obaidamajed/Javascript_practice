// *** select elements by javascript ***
//بتوصل لعناصر الاتش تي ام ال عن طريق الدوكيومنت
// document.getElementById("head"); // هيك مسكت العنصر اللي الو اي دي اسمو هيد
// console.log(document.getElementById("head")) // بنعرض بالكونسول
// في طريقة ابسط واسهل من هاي, بخزن العنصر بمتغير
let head = document.getElementById("head");
head.innerHTML = "test" // هيك غيرت الداتا اللي بداخل العنصر اللي إلو آي دي اسمو ايد
head.style.color = "red" // غيرت لون الداتا اللي بداخل العنصر
console.log(head)
console.log('\n')
// let z = document.getElementsByClassName("x");
// حيعطيني إيرور لأني مو ماسك العنصر لغاية الآن, الكلاس بكون لأكثر من عنصر وبالتالي لازم أحددلو أي عنصر بالزبط بدي أمسك وهذا الإشي بصير عن طريق الإندكس
// z.style.color = "red";
// console.log(z)


let z = document.getElementsByClassName("x")[1];
//الان بغير اللون وبعرض العنصر في الكونسول لأني حددتلو أي إندكس بدي بالزبط وهذا الفرق لما بدي أستدعي عنصر عن طريق ال آي دي أو ال كلاس
z.style.color = "blue";  
console.log(z)
// نفس الطريقة اللي بنستدعي فيها العنصر عن طريق الكلاس, هي نفسها اللي بنستدعي فيها العنصر عن طريق اسمو او ما يسمى بالتاق نايم

let q = document.getElementsByTagName("h1")[1] //وصلت للعنصر عن طريق اسمو
q.style.color ="green"


// let w = document.querySelector("#head");//عيبها انها بتجيب فقط اول عنصر
// w.style.color ="green"

// let R = document.querySelectorAll("h1")[3] // بجيبلي كل العناصر لكن بدك تحدد العنصر اللي بدك تمسكو زي طريقة الكلاس والتاق نايم
// R.style.color="red"

let body = document.body;//هيك بوصل للبودي
console.log(body) 


let title = document.title
title = "xxxxxxxxxxx"//غيرت اسم التايتل
console.log(title)

let images = document.images[0];
images.src = "b.jpg" // غيرت سورس الصورة الاولى الى سورس الصورة الثانية
images.alt = "bbb"
console.log(images.src)
console.log(images.alt)

let links = document.links[1]
links.href="https://www.google.com/" // غيرتو
console.log(links.href)


let forms = document.forms[0];

console.log( forms )



















