// *** inner and outer ***

let container = document.getElementById("container");


console.log(container)
console.log(container.outerHTML)//بجيبلك العنصر كامل زي ما هو
console.log(container.innerHTML)//بتجيبلك اللي بداخل العنصر
// container.outerHTML = "<p> hello </p>"; // بدلت العنصر كامل بالفقرة هاي
// container.innerHTML = "<p> hello </p>";// بتغير اللي بداخل العنصر نفسو لكن بكتب بلغة اتش تي ام ال
// container.innerText = "<p> hello </p>";// بتغير اللي بداخل العنصر العنصر الى نص
// container.outerText = "<p> hello </p>";//  بتغير العنصر نفسو الى نص
container.textContent = "<p> hello </p>";























